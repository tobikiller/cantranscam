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

