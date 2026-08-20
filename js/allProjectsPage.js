// Inline project data (Babel standalone cannot resolve ES module imports)
const projects = [
  { id: "helistrike", title: "HeliStrike: Tactical Rescue", category: "Game Development", featured: true, desc: "A realistic 3D helicopter flight simulation game featuring rigid body physics, dynamic wind resistance, tactical missile systems, and challenging rescue operations.", tech: ["Unity", "C#", "RigidBody Physics"], github: "#", demo: "#" },
  { id: "vanguard", title: "Vanguard: Tactical Ops", category: "Game Development", featured: true, desc: "A high-performance first-person shooter with intelligent AI behavior trees, pathfinding networks, weapon handling mechanics, and interactive environmental destructibility.", tech: ["Unity", "C#", "NavMesh AI", "Shader Graph"], github: "#", demo: "#" },
  { id: "labyrinth", title: "Labyrinth Escape: Maze Runner", category: "Game Development", featured: true, desc: "A thrilling maze navigation runner game with procedural maze generation, dynamic light/shadow puzzles, and immersive time-based survival mechanics.", tech: ["Godot", "GDScript", "Procedural Gen"], github: "#", demo: "#" },
  { id: "gamehub", title: "GameHub: Mini Games", category: "Flutter Development", featured: true, desc: "An all-in-one Flutter application hosting interactive local mini-games like Chess, Tic-Tac-Toe, and Sudoku. Features state management via Bloc and local caching.", tech: ["Flutter", "Dart", "Bloc", "Local Storage"], github: "#", demo: "#" },
  { id: "bitespeed", title: "BiteSpeed Delivery App", category: "Flutter Development", featured: true, desc: "A premium cross-platform food delivery app integrating secure checkout, Google Maps integration for live tracking, menu customizations, and interactive UI animations.", tech: ["Flutter", "Dart", "Google Maps API", "Provider"], github: "#", demo: "#" },
  { id: "fitface", title: "FitFace Gym Attendance", category: "AI Automation & ML", featured: true, desc: "A deep learning face recognition attendance system built to automate gym member logins in real-time. Features active spoof detection and dashboard analytics.", tech: ["Python", "OpenCV", "FaceNet", "SQLite"], github: "#", demo: "#" },
  { id: "traffic", title: "AI Traffic Signal Recognizer", category: "AI Automation & ML", featured: true, desc: "A state-of-the-art computer vision model that classifies traffic signals and signs in real-time, designed to assist autonomous driving systems under varying lighting conditions.", tech: ["PyTorch", "YOLOv8", "CNN", "OpenCV"], github: "#", demo: "#" },
  { id: "rag", title: "RAG Search Engine", category: "AI Automation & ML", featured: false, desc: "RAG pipeline with vector search and intelligent document chunking for instant query retrieval.", tech: ["LangChain", "Pinecone", "OpenAI"], github: "#", demo: "#" },
  { id: "faq", title: "AI FAQ Assistant", category: "AI Automation & ML", featured: false, desc: "LLM bot trained on custom documentation for instant automated customer resolution.", tech: ["OpenAI", "Next.js", "Tailwind"], github: "#", demo: "#" },
  { id: "email-agent", title: "n8n Email Reply Agent", category: "AI Automation & ML", featured: false, desc: "n8n + GPT-4o autonomous email classification, drafting, and workflow automation.", tech: ["n8n", "Gmail API", "GPT-4o"], github: "#", demo: "#" },
  { id: "inventory", title: "n8n Inventory System", category: "AI Automation & ML", featured: false, desc: "Automated Google Sheets sync to Slack stock alerts and low-inventory triggers.", tech: ["n8n", "Sheets", "Slack API"], github: "#", demo: "#" },
  { id: "ecom", title: "E-Com Website", category: "Web Development", featured: false, desc: "Full stack store with real-time inventory management and Stripe checkout.", tech: ["Next.js", "Stripe", "Tailwind"], github: "#", demo: "#" }
];

const { useState, useMemo, useEffect } = React;
const motion = window.Motion?.motion || window.framerMotion?.motion || (({ children, className, style, ...props }) => <div className={className} style={style}>{children}</div>);
const AnimatePresence = window.Motion?.AnimatePresence || window.framerMotion?.AnimatePresence || (({ children }) => <>{children}</>);

const normalizeCategory = (cat) => (cat || '').toString().trim().toLowerCase();

const ProjectCategoryIcon = ({ category }) => {
  const norm = normalizeCategory(category);
  if (norm.includes("flutter")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    );
  }
  if (norm.includes("ai") || norm.includes("ml") || norm.includes("automation")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"></path>
      </svg>
    );
  }
  if (norm.includes("web")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="3"></rect>
      <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"></path>
    </svg>
  );
};

const SearchIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ClearIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


export function AllProjectsPage() {
  const categories = ["All", "Game Development", "Flutter Development", "AI Automation & ML", "Web Development"];

  // URL Param Initialization (?category=...)
  const [activeCategory, setActiveCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const catFromUrl = params.get('category');
    if (!catFromUrl) return 'All';
    const normUrlCat = normalizeCategory(catFromUrl);
    const matched = categories.find(c => normalizeCategory(c) === normUrlCat);
    return matched || 'All';
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize category state to browser URL parameter
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const url = new URL(window.location.href);
    if (cat === 'All') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', cat);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Category Counts
  const counts = useMemo(() => {
    const c = {};
    categories.forEach(cat => {
      const normCat = normalizeCategory(cat);
      c[cat] = normCat === "all" ? projects.length : projects.filter(p => normalizeCategory(p.category) === normCat).length;
    });
    return c;
  }, []);

  // Filter & Search Logic (Shows ALL projects matching category/search query)
  const filtered = useMemo(() => {
    let list = projects;
    const normActive = normalizeCategory(activeCategory);
    
    if (normActive !== 'all' && normActive !== '') {
      const matches = list.filter(p => normalizeCategory(p.category) === normActive);
      list = matches.length > 0 ? matches : list.filter(p => {
        const cat = normalizeCategory(p.category);
        return cat.includes(normActive) || normActive.includes(cat);
      });
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 max-w-7xl pb-24">
      {/* Top Search & Category Controls Container */}
      <div className="flex flex-col items-center gap-6 mb-12">
        {/* Search Input Bar */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9ea4b5]">
            <SearchIcon size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, description or tech stack..."
            className="w-full pl-11 pr-10 py-3 bg-[#12111d] text-white border border-[#2a293a] rounded-xl focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] placeholder-[#646a78] text-sm transition-all duration-200 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#9ea4b5] hover:text-white transition-colors"
            >
              <ClearIcon size={16} />
            </button>
          )}
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map(cat => {
            const isActive = normalizeCategory(activeCategory) === normalizeCategory(cat);
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00E5FF] to-[#9C27FF] text-black shadow-lg shadow-[#00E5FF]/25 scale-105 border border-transparent font-bold'
                    : 'bg-[#1a1a1a] text-[#9ea4b5] border border-[#2a2a2a] hover:text-white hover:border-[#00E5FF]/40 hover:bg-[#222]'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 bg-[#0f0e17]/50 border border-white/5 rounded-2xl max-w-lg mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1c1a2e] flex items-center justify-center text-[#00E5FF]">
            <SearchIcon size={28} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No projects in this category</h3>
          <p className="text-sm text-[#9ea4b5] mb-6 px-6">
            We couldn't find any projects matching "{searchQuery || activeCategory}". Try clearing your search or picking another category.
          </p>
          <button
            onClick={() => {
              handleCategoryChange('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#1c1a2e] border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-semibold text-sm transition-all duration-200 cursor-pointer"
          >
            Clear Filters
          </button>
        </motion.div>
      ) : (
        /* Projects Cards Grid with AnimatePresence */
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-[#0f0e17]/90 backdrop-blur-md border border-white/10 hover:border-[#00E5FF]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] flex flex-col h-full group"
              >
                {/* Top Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#1c1a2e] flex items-center justify-center text-[#00E5FF] border border-[#00E5FF]/20 mb-5 group-hover:border-[#00E5FF]/50 group-hover:scale-105 transition-all duration-300">
                  <ProjectCategoryIcon category={project.category} />
                </div>

                {/* Cyan Category Tag */}
                <span className="text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>

                {/* White Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Gray Description */}
                <p className="text-sm text-[#9ea4b5] leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-[#1a1926] border border-white/10 text-xs text-[#00E5FF] font-mono px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a 
                    href={project.demo || "#"} 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

const rootElem = document.getElementById('react-all-projects-root');
if (rootElem) {
  ReactDOM.createRoot(rootElem).render(<AllProjectsPage />);
}
