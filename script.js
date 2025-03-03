function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBoxes = document.querySelectorAll(".menu-box");
  
    function revealOnScroll() {
      const triggerPoint = window.innerHeight * 0.85; 
      menuBoxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerPoint) {
          box.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
  });
  