let currentSlide = 3;
showSlides(currentSlide);
 
function plusSlide() {
    showSlides(currentSlide += 1);
}
 
function minusSlide() {
    showSlides(currentSlide -= 1);  
}
 
function currentxSlide(n) {
    showSlides(currentSlide = n);
}

function showSlides(n) {
   
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      currentSlide = 1
    }
    if (n < 1) {
        currentSlide = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[currentSlide - 1].style.display = "block";
    
}