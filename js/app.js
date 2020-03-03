//declare variables
const navbar = document.querySelector('.navbar'); 
const logo = document.querySelector('.logo');
let navbarText = document.querySelectorAll('.nav-item .nav-link'); 
let scrollPosition = 0; 

const navbarMobileContain = document.querySelector('.navbar-mobile-contain');
const navbarMobile = document.querySelector('.navbar-mobile'); 
const navbarMobileLink = document.querySelector('.navbar-mobile-link'); 

// change background and text color on scroll 
window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY; 

    if(scrollPosition === 0) {
        navbar.style.backgroundColor = 'transparent'; 
        navbarMobileLink.style.color = 'white';
        logo.setAttribute('src', 'https://jaskiran-chhokar.github.io/raman-illusions/assets/raman-illusions-logo.png');

        for(let i = 0; i < navbarText.length; i++) {
           navbarText[i].style.color = 'white';
           navbarText[i].classList.remove('fancy-link-scroll');
        }  
        
    }

    if (scrollPosition != 0) {
        navbar.style.backgroundColor = 'white'; 
        navbarMobileLink.style.color = '#02132a';
        logo.setAttribute('src', 'https://jaskiran-chhokar.github.io/raman-illusions/assets/raman-illusions-dark-logo.png');

        for(let i = 0; i < navbarText.length; i++) {
           navbarText[i].style.color = '#02132a';
           navbarText[i].classList.add('fancy-link-scroll');
        }       
    } 
});

// navbar functionality in mobile 
navbarMobile.addEventListener('click', (e) => {
    
    let navIcon = navbarMobileLink.children[0]; 

    if(navIcon.getAttribute('class') == 'fas fa-bars') {
        navIcon.setAttribute('class', 'fas fa-times'); 
        navbarMobileContain.style.display = 'block'; 
        if(screen.width <= 992) {
            navbar.style.backgroundColor = 'white';
            navbarMobileLink.style.color = '#02132a'; 
            logo.setAttribute('src', 'https://jaskiran-chhokar.github.io/raman-illusions/assets/raman-illusions-dark-logo.png');
        } 
    
    } else {
        navIcon.setAttribute('class', 'fas fa-bars');
        navbarMobileContain.style.display = 'none'; 
    }

    e.preventDefault();
}); 