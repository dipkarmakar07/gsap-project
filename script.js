const hamburger = document.querySelector(".hamburger");
const listMobile = document.querySelector(".list-mobile");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    listMobile.classList.toggle("active");
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
    },
});         
// Animation for mobile list items

hamburger.addEventListener("click", () => {
 
   if (listMobile.classList.contains("active")) {
        const mobileListItems = listMobile.querySelectorAll('li');
        gsap.fromTo(mobileListItems, 
            { opacity: 0, x: -70 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.5, 
                stagger: 0.1,
                ease: "power2.out"
            }
        );
    } else {
        gsap.to(mobileListItems, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        });
    }
});

 const landingPage = document.querySelector(".landing-page");
 gsap.from(landingPage, {
    opacity: 0,
    duration: 0.8,
    y: -900,
    ease: "power2.out"
 });
