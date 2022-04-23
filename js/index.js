let dropdown = document.querySelector('#avatar');
let dropdowncont = document.querySelector('#dropdowncontent');

dropdown.onblur = ()=>{
  dropdowncont.className = 'blured'
}

var slideIndex = 0;
showSlides()
function showSlides() {
  var i;
  var slide = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("elipsis");

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    dots[i].classList.remove('current');
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}
  slide[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("current");
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

