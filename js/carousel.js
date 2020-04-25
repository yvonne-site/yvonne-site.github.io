var slideIndex = 1;
var slideNumberFlag = false;
var captionFlag = false;
var prevNextFlag = false;

showSlide();

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

function showSlide() {
  // Show slide n in the list. Crop n if it is too large or small.
  var i;
  var slides = document.getElementsByClassName("slide");

  // Set slide inder
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
  // Reset all slides to not visible
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Set show current slide and activate correct dot
  slides[slideIndex-1].style.display = "block";
  slideIndex ++;
  setTimeout(showSlide, 6000); // Change image every 2 seconds
}
