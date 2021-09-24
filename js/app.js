const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const anchors = document.querySelectorAll(".link");
//-----------------------------------js for hamburger and nav 
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("cross")
    nav.classList.toggle("nav-toggle");
});
anchors.forEach((a)=>{
    a.addEventListener("click",()=>{
        hamburger.classList.remove("cross")
        nav.classList.remove("nav-toggle");
        
    });
    
})
// -----------------------------js for vedio buttons
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const vedio1 = document.querySelector(".vid-1")
const vedio2 = document.querySelector(".vid-2")
const vedio3 = document.querySelector(".vid-3")

dot1.addEventListener("click",()=>{
    vedio1.style.display="block"
    vedio2.style.display="none"
    vedio3.style.display="none"
})
dot2.addEventListener("click",()=>{
    vedio1.style.display="none"
    vedio2.style.display="block"
    vedio3.style.display="none"
})
dot3.addEventListener("click",()=>{
    vedio1.style.display="none"
    vedio2.style.display="none"
    vedio3.style.display="block"
})
// ------------------------------js for header active when scrolling via scroll event
const header = document.getElementById("header");
window.addEventListener("scroll",()=>{
      if (window.pageYOffset > 40){
          header.classList.add("headerActive")
        }else{  
            header.classList.remove("headerActive")
            
      }
    
})
