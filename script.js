document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Hamburger menu animation
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
      spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Typing Effect
  const words = ["Game Developer.", "Flutter Developer.", "AI Automation Engineer.", "ML Specialist."];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
      if (word.length > 0) {
        document.getElementById('typed-text').innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 2000);
        return false;
      }
      timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        document.getElementById('typed-text').innerHTML = word.join("");
      } else {
        if (words.length > (i + 1)) {
          i++;
        } else {
          i = 0;
        }
        setTimeout(typingEffect, 500);
        return false;
      }
      timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
  }

  // Start typing animation if element exists
  if (document.getElementById('typed-text')) {
    typingEffect();
  }

  // Animate Skill Bars on scroll using IntersectionObserver
  const skillBars = document.querySelectorAll('.skill-bar-inner');
  const skillsSection = document.getElementById('skills');

  if (skillsSection && skillBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(skillsSection);
  }

  // Contact Form Submission Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      
      // Visual Feedback
      submitBtn.disabled = true;
      submitBtn.innerText = "Sending Message...";
      submitBtn.style.background = 'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))';

      setTimeout(() => {
        // Reset form and show success message
        contactForm.reset();
        submitBtn.innerText = "Message Sent! Thanks.";
        submitBtn.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)'; // Green success gradient
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
          submitBtn.style.background = ''; // Restores default variable styling
        }, 3000);
      }, 1500);
    });
  }
});
