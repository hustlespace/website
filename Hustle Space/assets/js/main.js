// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZDwjzlZxNJPLYX66tcEwPxs0UqzNBXvQ",
    authDomain: "hustlespaceofficial-62fe3.firebaseapp.com",
    databaseURL: "https://hustlespaceofficial-62fe3-default-rtdb.firebaseio.com",
    projectId: "hustlespaceofficial-62fe3",
    storageBucket: "hustlespaceofficial-62fe3.appspot.com",
    messagingSenderId: "701971109493",
    appId: "1:701971109493:web:445b43aeb5e18e2bc70a3c"
  };

// initialize database
firebase.initializeApp(firebaseConfig);

//reference database
var contactFormDB = firebase.database().ref('HustleSpaceOfficial');

document.getElementById('form2').addEventListener('submit', submitForm);
function submitForm(e) {
    var emailfooter = getElementVal('email2');
    
    saveMessages(emailfooter);
    alert('Thankyou for contacting our team will reach you within 24h')
}

const saveMessages = (emailfooter) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        emailfooter : emailfooter,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}; 


document.getElementById('form1').addEventListener('submit', submitForm);
function submitForm(e) {
    var emailprompt = getElementVal('email1');
    
    saveMessages(emailprompt);
    alert('Thankyou for contacting our team will reach you within 24h')
}

const saveMessages2 = (emailprompt) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        emailprompt : emailprompt,
    })
}

const getElementVal2 = (id) => {
    return document.getElementById(id).value;
}; 



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponser-name, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)



