const navBtn = document.getElementById("nav-btn")
const navLink = document.getElementById("nav-link")
const navSub = document.querySelectorAll(".nav-sub")
const langBtn = document.getElementById("btn-lang")
const links = document.querySelectorAll(".links")
const langDisplay = document.getElementById("display-lang")

navBtn.addEventListener('click', function(){
    navLink.classList.toggle("active")
    navSub.forEach((e) => {
    
       e.classList.toggle("change")
    });


   
})

langBtn.addEventListener("click", function(){
langDisplay.classList.toggle("on")
})


links.forEach((i)=>{
    i.addEventListener("click",function(){
        navLink.classList.remove("active")
        navSub.forEach((e) => {
    
            e.classList.toggle("orignal")
         });
    })
})



gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({default: {ease:"SlowMo.easeOut"}})

tl.from(".small-title",{
    
    y:20,
    opacity:0,
    duration:1,
  
    stagger:0.5

})

tl.from(".small-text",{

    y:20,
    opacity:0,
    duration:1,
})


gsap.from(".about-title",{
    scrollTrigger: {
        trigger:".about-title",
        toggleActions:"play none none none"
        
    },

    y:20,
    opacity:0,
    duration:1,
    ease:"power1.out",
    stagger:0.5
})



TweenMax.from(".mask-text",{
    scrollTrigger: {
        trigger:".mask-text",
        start:"top center",
        markers:"true",
        toggleActions:"play none none none"
        
    },
    y:40,
    opacity:0,
   duration:1.5,
 
   ease:"power3.out",
})
