
let hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active") 
    
}



var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });




  const scriptURL = 'https://script.google.com/macros/s/AKfycbwRtSCu0ahiDEKQjY6dYeNXYZWhRcfp80U9gymDqKHnbr9fHaxcirGWTg0gp1hzmhcI/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Successfully submitted!"
        setTimeout(function(){
            msg.innerHTML = " "
            
        },5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })