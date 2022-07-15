const navBtn = document.getElementById("nav-btn")
const navLink = document.getElementById("nav-link")
const navSub = document.querySelectorAll(".nav-sub")

const links = document.querySelectorAll(".links")

navBtn.addEventListener('click', function(){
    navLink.classList.toggle("active")
    navSub.forEach((e) => {
    
       e.classList.toggle("change")
    });


   
})


links.forEach((i)=>{
    i.addEventListener("click",function(){
        navLink.classList.remove("active")
        navSub.forEach((e) => {
    
            e.classList.toggle("orignal")
         });
    })
})

