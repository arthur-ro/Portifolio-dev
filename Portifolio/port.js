// Minimal JS: navegação, indicador ativo e scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const panels = document.querySelectorAll('.panel');
  const content = document.getElementById('content');
  const mobileToggle = document.getElementById('mobileToggle');
  const sidebar = document.getElementById('sidebar');

  // Navegação entre seções (click)
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // active class on nav
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // show panel
      panels.forEach(p => p.classList.remove('active'));
      const target = document.getElementById(item.dataset.target);
      if (target) {
        target.classList.add('active');
        // scroll content top smoothly
        content.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // on mobile collapse menu (if using a toggle behaviour)
      if (window.innerWidth <= 900) {
        sidebar.classList.toggle('collapsed');
      }
    });
  });

  // Mobile toggle button: simply toggle a class to change nav layout (CSS handles display)
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  // Scroll reveal using IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity .6s ease, transform .6s ease';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0px)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // prepare elements
  revealEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    observer.observe(el);
  });

  // small UX: show content only after small delay for smoothness
  const contentEl = document.querySelector('.content');
  if (contentEl) {
    contentEl.style.opacity = 0;
    setTimeout(() => {
      contentEl.style.transition = 'opacity .6s ease';
      contentEl.style.opacity = 1;
    }, 120);
  }
});
