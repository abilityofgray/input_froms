console.log('slider_init');

const slider = document.querySelector('.participants__list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliders = 
Array.from(slider.querySelectorAll('.participants__item'));
const slideCount = sliders.length;
let sliderIndex = 0;
let sliderLine = 0;
let transition;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click',
showNextSlide);

function showPreviousSlide () {
  sliderIndex = (sliderIndex - 1 + slideCount) % slideCount;
  console.log(sliderIndex);
  sliderMover(sliderIndex)
  slider.classList.add('list_backward');
  
  transition = document.querySelector(".list_backward");
  console.log(transition);
  transition.addEventListener("transitionend", () => {
    console.log('list_forward_end');
    slider.classList.remove('list_backward');
  }); 
  updateSlider();
}
function showNextSlide() {
  sliderIndex = (sliderIndex +1) % slideCount;
  sliderMover(sliderIndex);
  console.log(sliderIndex);
  slider.classList.add('list_forward');
  updateSlider();
}
function updateSlider () {
  
  sliders.forEach((slide, index) => {
    if (index === sliderIndex) {
      slide.classList.add('participants-item_focus');
      
      //console.log(sliders.classList());
      //sliders.computedStyleMap.display = 'block';
    }else {
      //sliders.computedStyleMap.display = 'none'
      //sliders.classList.add('slide_hide');
      slide.classList.remove('participants-item_focus');
    }
  });
  //console.log(sliderIndex);
}
function sliderMover(index){
  //need every third slide
  if (index === 3) {
    //console.log('slider number 3');

  }
}
updateSlider();