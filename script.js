document.addEventListener('DOMContentLoaded', function () {

// Smooth Scroll on Click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In effect for sections (Achievements and Project)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.achievements-box, .project-box');
    sections.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Popup Open and Close
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
const popupButtons = document.querySelectorAll('.btn');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
        setTimeout(() => {
            popupContainer.classList.add('popup-open');  // Add the class for transitions
        }, 50);
    });
});

closeBtn.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open'); // Remove the class for transitions
    setTimeout(() => {
        popupContainer.style.display = 'none'; // Hide it after transition
    }, 500);
});
});
// Highlight the active section as the user scrolls
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener('scroll', () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id);
    
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

