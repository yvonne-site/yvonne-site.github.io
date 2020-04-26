var slideIndex = 1;
var slideNumberFlag = false;
var captionFlag = false;

showSlide(slideIndex);
toggleClassVisibility(slideNumberFlag, "numbertext");
toggleClassVisibility(captionFlag, "caption");

function toggleClassVisibility(flag, element) {
  // Toggle class visibility based on flag
  var index;
  var slideNumbers = document.getElementsByClassName(element)
  var displayStyle = "none"

  if(flag) {
    displayStyle = "block"
  }

  for(index = 0; index < slideNumbers.length; index++) {
    slideNumbers[index].style.display = displayStyle;
  }
}

function moveSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  // Show slide n in the list. Crop n if it is too large or small.
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // Set slide inder
  if (n > slides.length) {slideIndex = 1}
  else if (n < 1) {slideIndex = slides.length}
  else {slideIndex = n}
  // Reset all slides to not visible
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Reset active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Set show current slide and activate correct dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
