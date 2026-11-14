/**
 * Anudeep V F - Portfolio Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initMobileNav();
  initScrollEffects();
  initSkillFilters();
  initProjectModals();
  initCopyEmail();
  initContactForm();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

      html.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);

      showToast(`Switched to ${nextTheme} mode`);
    });
  }
}

/* ==========================================================================
   2. Typing Animation in Hero
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Python & Web Applications',
    'Java & JavaFX Systems',
    'Full-Stack PHP & SQL Solutions',
    'Clean Code & User-Centric UI'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 500;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   3. Mobile Navigation & Drawer
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  }
}

/* ==========================================================================
   4. Scroll Effects (Navbar shadow & Active Link Spy)
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link indicator
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   5. Skill Filtering (All / Technical / Soft)
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          // Trigger subtle animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   6. Project Modals & Deep-dive Data
   ========================================================================== */
const projectData = {
  byndoor: {
    tag: 'Web Application • Full Stack',
    title: 'Byndoor - A Heaven of Natural Beauty',
    description: 'A dedicated tourism-based web application developed to promote and showcase the picturesque natural beauty, temples, and tourist attractions of Byndoor, Udupi District, Karnataka.',
    features: [
      'Interactive catalog displaying scenic beaches (Ottinene Beach, Someshwara Beach), water sports, and historical heritage sites.',
      'Backend powered by PHP with dynamic queries retrieving attraction information and visitor recommendations.',
      'Relational SQL Database storing location entries, traveler inquiries, and reviews.',
      'Responsive user interface crafted using semantic HTML5, custom CSS3 styling, and JavaScript for client interactivity.',
      'Inquiry contact module allowing tourists to request tour guidelines and local assistance.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL / MySQL', 'Responsive Design'],
    role: 'Lead Developer (Concept, Frontend UI, Database schema, Backend PHP scripts)'
  },
  hospital: {
    tag: 'Desktop Application • JavaFX',
    title: 'Hospital Appointment Booking System',
    description: 'A desktop application engineered to automate clinic appointment bookings, eliminate overcrowding in healthcare waiting rooms, and streamline doctor schedule management.',
    features: [
      'Designed using JavaFX and FXML for clean separation of GUI layout and business logic.',
      'Implemented Object-Oriented Programming (OOP) paradigms for patient records, doctors, and appointment slots.',
      'Real-time date and time conflict detection preventing double-booking of doctors.',
      'User-friendly input forms with field validation and immediate confirmation status.',
      'Structured error handling and data management for appointment logs.'
    ],
    techStack: ['Java', 'JavaFX', 'FXML', 'Scene Builder', 'OOP Architecture'],
    role: 'Software Developer (GUI Design with FXML, Controller logic, OOP architecture)'
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-content');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <span class="modal-header-tag">${data.tag}</span>
      <h3 class="modal-title">${data.title}</h3>
      <p class="project-desc">${data.description}</p>
      
      <h4 class="modal-section-title"><i class="fa-solid fa-list-check"></i> Key Highlights & Features</h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px;">
        ${data.features.map(f => `
          <li style="display: flex; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
            <i class="fa-solid fa-check" style="color: var(--accent-emerald); margin-top: 4px;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <h4 class="modal-section-title"><i class="fa-solid fa-microchip"></i> Technology Stack</h4>
      <div class="modal-tech-list">
        ${data.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <h4 class="modal-section-title"><i class="fa-solid fa-user-gear"></i> Role & Ownership</h4>
      <p style="font-size: 0.92rem; color: var(--text-secondary);">${data.role}</p>

      <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-primary btn-sm" onclick="closeModal()">
          <i class="fa-solid fa-comments"></i> Discuss This Project
        </a>
        <button class="btn btn-secondary btn-sm" onclick="closeModal()">Close</button>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach globally for inline onclick
  window.closeModal = closeModal;

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Copy Email with Toast Feedback
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailValue = 'anudeepvfbyndoor@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailValue).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('Email: ' + emailValue);
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* ==========================================================================
   8. Contact Form Handling with Direct Mailto Fallback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      if (formStatus) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.className = 'form-status error';
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = 'Opening your email client...';
      formStatus.className = 'form-status success';
    }

    // Prepare mailto link
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:anudeepvfbyndoor@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      showToast('Opening default mail client...');
      form.reset();
      if (formStatus) {
        formStatus.textContent = 'Thank you! If mail client did not open, reach me directly at anudeepvfbyndoor@gmail.com';
      }
    }, 600);
  });
}
