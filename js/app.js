// change background and text color on scroll 
const navbar = document.querySelector('.navbar'); 
let navbarText = document.querySelectorAll('.nav-item .nav-link'); 
let scrollPosition = 0; 

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY; 

    if(scrollPosition === 0) {
        navbar.style.backgroundColor = 'transparent'; 

        for(let i = 0; i < navbarText.length; i++) {
           navbarText[i].style.color = 'white';
        }      
    }

    if (scrollPosition != 0) {
        navbar.style.backgroundColor = 'white'; 

        for(let i = 0; i < navbarText.length; i++) {
           navbarText[i].style.color = 'black';
        }       
    } 
    
});