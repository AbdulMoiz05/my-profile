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

const { useState, useMemo } = React;
const motion = window.Motion?.motion || window.framerMotion?.motion || (({ children, className, style, ...props }) => <div className={className} style={style}>{children}</div>);
const AnimatePresence = window.Motion?.AnimatePresence || window.framerMotion?.AnimatePresence || (({ children }) => <>{children}</>);

// Helper function to normalize category string for case-insensitive matching
const normalizeCategory = (cat) => (cat || '').toString().trim().toLowerCase();

// Project Category Icon SVG
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

// Chevron icons for accordion
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export function HomepageProjects() {
  // Fixed category order for accordion sections (4 categories)
  const categories = ["Game Development", "Flutter Development", "AI Automation & ML", "Web Development"];
  
  // Accordion state - first category open by default
  const [openCategory, setOpenCategory] = useState("Game Development");
  
  // Expand all state
  const [expandAll, setExpandAll] = useState(false);

  // Group projects by category (case-insensitive matching)
  const grouped = useMemo(() => {
    const map = {};
    categories.forEach(cat => {
      const normCat = normalizeCategory(cat);
      map[cat] = projects.filter(p => normalizeCategory(p.category) === normCat);
    });
    return map;
  }, []);

  // Total project count
  const totalCount = useMemo(() => projects.length, []);

  // Fallback: if grouped is completely empty
  if (Object.keys(grouped).length === 0 || Object.values(grouped).every(arr => arr.length === 0)) {
    return (
      <div className="container mx-auto px-4 max-w-7xl text-center py-20">
        <p className="text-[#9ea4b5] text-lg">Projects loading...</p>
      </div>
    );
  }

  // Toggle accordion: if expandAll is true, show all; otherwise single-open accordion
  const toggleCategory = (cat) => {
    if (expandAll) {
      // In expand-all mode, clicking any header collapses all
      setExpandAll(false);
      setOpenCategory(cat);
    } else {
      // Normal accordion: click same = close, click different = switch
      setOpenCategory(prev => prev === cat ? null : cat);
    }
  };

  // Check if a category is open
  const isCategoryOpen = (cat) => {
    return expandAll || openCategory === cat;
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Section Title */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-mono font-semibold tracking-wider text-[#00E5FF] uppercase mb-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 shadow-sm">
          Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* Accordion Sections - Stacked Vertically */}
      <div className="space-y-4 mb-12">
        {categories.map((category) => {
          const categoryProjects = grouped[category] || [];
          const isOpen = isCategoryOpen(category);
          const displayProjects = categoryProjects.slice(0, 3);
          const hasMore = categoryProjects.length > 3;

          return (
            <div key={category} className="bg-[#121218] border border-[#1f1f2a] rounded-xl overflow-hidden">
              {/* Accordion Header - Always Visible */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#1a1a24] transition-colors duration-200"
              >
                {/* Left: Category Name + Count Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-[#00E5FF] font-mono text-sm font-bold uppercase tracking-wider">
                    {category}
                  </span>
                  <span className="bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00E5FF]/20">
                    {categoryProjects.length}
                  </span>
                </div>

                {/* Right: Expand/Collapse Icon */}
                <div className="text-[#9ea4b5]">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>

              {/* Accordion Content - Animated Grid */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      {/* 3-Column Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayProjects.map((project, idx) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.07 }}
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
                      </div>

                      {/* "Show all N in Category" Button */}
                      {hasMore && (
                        <div className="mt-6 text-center">
                          <a
                            href={`projects.html?category=${encodeURIComponent(category)}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] text-[#00E5FF] font-semibold text-sm border border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] transition-all duration-300"
                          >
                            <span>Show all {categoryProjects.length} in {category}</span>
                            <span>→</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Section - Divider + Buttons */}
      <div className="mt-14">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-8"></div>
        
        {/* Centered Buttons */}
        <div className="text-center space-y-4">
          {/* Main CTA Button */}
          <a 
            href="projects.html" 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#9C27FF] text-black font-bold shadow-lg shadow-[#00E5FF]/20 hover:shadow-[#00E5FF]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>View All {totalCount} Projects</span>
            <span className="text-lg">→</span>
          </a>

          {/* Expand/Collapse All Link */}
          <div>
            <button
              onClick={() => setExpandAll(prev => !prev)}
              className="text-sm text-[#9ea4b5] hover:text-[#00E5FF] transition-colors duration-200 underline decoration-dotted underline-offset-4"
            >
              {expandAll ? "Collapse all categories" : "Expand all categories"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export FeaturedProjects alias
export const FeaturedProjects = HomepageProjects;

const rootElem = document.getElementById('react-projects-root');
if (rootElem) {
  ReactDOM.createRoot(rootElem).render(<HomepageProjects />);
}
