
const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-nav");

console.log(mobile.classList)
hamburger.addEventListener("click",(e)=>{
    if(mobile.className === "mobile-nav hide"){
        mobile.className = "mobile-nav show";
    }
    else{
        mobile.className = "mobile-nav hide";
    }

})