let menuIcon = document.getElementById('menu-item');
let navbar = document.querySelector('.navbaro');
let links = document.querySelectorAll('.navbaro a')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // toggle 'active' class on navbar
        menuIcon.classList.toggle('fa-bars');
        navbar.classList.toggle('active');
    });
});



// ScrollReveal({ 
//     reset: true,
//     distance: '20px',
//     duration: 5000,
//     delay: 100,
//     opactiy: 0.5
// });

// ScrollReveal().reveal('.home-content, .portfolio-box, #temp', {origin: 'top'})
// // ScrollReveal().reveal('.gallery-item', {origin: 'top'})
// ScrollReveal().reveal('.about', {origin: 'top'})
// ScrollReveal().reveal('.portfolio-box', {origin: 'top'})




const text = "Our Team will you give 24/7 support in your ongoing beautiful journey"; // Text to be typed
const typingElement = document.getElementById("typing-effect");

function typeWriter(text, element) {
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Delay between typing each character (adjust as needed)
    }
  }

  type();
}

typeWriter(text, typingElement);
