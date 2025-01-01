// Smooth scrolling for navigation links
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to Top Button
  window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  