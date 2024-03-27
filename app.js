
let hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active") 
    
}
let options = document.querySelectorAll(".activee");
for(let option of options){
options.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active") 
    console.log("clicked");

}
}


var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });