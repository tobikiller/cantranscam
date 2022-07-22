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


tl.from(".links",{
  
  
   opacity:0,
   duration:0.5,
   stagger:0.2,
   
   ease:"power3.out",
})

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

gsap.from(".about-text",{
    scrollTrigger: {
        trigger:".about-text",
        toggleActions:"play none none none"
        
    },

    x:80,
    opacity:0,
    duration:1,
    ease:"power1.out",
    
})

gsap.from(".image-mask",{
    scrollTrigger: {
        trigger:".image-mask",
        toggleActions:"play none none none",
        start:"start center"
        
    },

    x:80,
    opacity:0,
    duration:1,
    ease:"power1.out",
    
})



TweenMax.from(".mask-text",{
    scrollTrigger: {
        trigger:".mask-text",
        start:"top center",
        
        toggleActions:"play none none none"
        
    },
    y:40,
    opacity:0,
   duration:1.5,
 
   ease:"power3.out",
})


TweenMax.from(".services",{
    scrollTrigger: {
        trigger:".services",
        start:"top center",
        
        toggleActions:"play none none none"
        
    },
    x:-40,
   opacity:0,
   duration:1.5,
   stagger:0.5,
 
   ease:"power3.out",
})


gsap.from(".number", {
    scrollTrigger: {
        trigger:".number",
        start:"-800%, 20%",
       
        
        toggleActions:"play none none none"
        
    },
    textContent: 0,
    duration: 1,
    ease: "Power1.easeIn",
    snap: { textContent: 1 },
    stagger: 1,
    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  });

  gsap.from(".numbers", {
    scrollTrigger: {
        trigger:".numbers",
        start:"-800%, 20%",
        
        toggleActions:"play none none none"
        
    },
    textContent: 0,
    duration: 2,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
      each: 1.0,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    }
  });
  
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }





  TweenMax.from(".rel-text", {

    scrollTrigger: {
        trigger:".rel-text ",
        start:"-20%",
       
       
        
        toggleActions:"play none none none"
        
    },
    opacity:0,
    duration: 1,
    delay:1,
    y:100,
    ease: "Power1.easeIn",
    
})

gsap.from(".vehiculex ", {
    scrollTrigger: {
        trigger:".vehiculex ",
        start:"-20%",
        
       
        
        toggleActions:"play none none none"
        
    },
    opacity:0,
    duration:1,
    x:-20,
    delay:0.5,
    ease: "Power2.easeIn",


   
  });

gsap.from(".vehicules ", {
    scrollTrigger: {
        trigger:".vehicules ",
        start:"-20%",
        
       
        
        toggleActions:"play none none none"
        
    },
    opacity:0,
    duration:1,
    x:20,
    delay:0.5,
    ease: "Power2.easeIn",


   
  });

  gsap.from(".trust ", {
    scrollTrigger: {
        trigger:".vehicules ",
        start:"-20%",
        toggleActions:"play none none none"
        
    },
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,
    ease: "Power2.easeIn",


   
  });


    gsap.from(".trust-text ", {
    scrollTrigger: {
        trigger:".vehicules ",
        start:"-20%",
        toggleActions:"play none none none"
        
    },
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,
    ease: "Power2.easeIn",


   
  });