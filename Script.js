let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }
    })

    // ---------------------sticky navbar ----- 

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)


    // ---------------------------------reve  Toggle icon & navbar ---------------------------

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


//  ---------------------- scroll Reviel ------------------- 

ScrollReveal(
    {
        // reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200
    }
);


ScrollReveal().reveal('.home-content , .heading , .whatsapp', { origin: 'top' });
ScrollReveal().reveal('.home-img-img, .service-container, .portfolio-box, .contact form , ', { origin: 'bottom' });
ScrollReveal().reveal('.home-cntent h1, .about-img , .whatsapp', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .mail', { origin: 'right' });



// ---------------------- typed js ------------ 

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



