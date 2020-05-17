var slideIndex = 1;
var slideNumberFlag = false;
var captionFlag = false;
var prevNextFlag = false;

showSlide();

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
  setTimeout(showSlide, 7000); // Change image every 2 seconds
}

function toggleNavigationMenu() {
    var collapseElement = document.getElementById("bs-example-navbar-collapse-1");
    if (collapseElement.classList.contains("collapse")) {
        document.getElementById("bs-example-navbar-collapse-1").className += " collapse.in";
        document.getElementById("bs-example-navbar-collapse-1").className = document.getElementById("bs-example-navbar-collapse-1").className.replace( /(?:^|\s)collapse(?!\S)/g , '' )
    }
    else if (collapseElement.classList.contains("collapse.in")) {
        document.getElementById("bs-example-navbar-collapse-1").className += " collapse";
        document.getElementById("bs-example-navbar-collapse-1").className = document.getElementById("bs-example-navbar-collapse-1").className.replace( /(?:^|\s)collapse.in(?!\S)/g , '' )
    }
}
