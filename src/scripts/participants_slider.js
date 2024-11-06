/*
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
  
  mover('list_backward');
  transition = document.querySelector(".list_backward");
  console.log(transition);
  sliderRelocate();
  if(sliderIndex === 3 || sliderIndex === 0) {
    sliderRelocate();
  }
  updateSlider();
}
function showNextSlide() {
  sliderIndex = (sliderIndex +1) % slideCount;
  sliderMover(sliderIndex);
  console.log(sliderIndex);
  
  mover('list_forward');
  if(sliderIndex === 3 || sliderIndex === 0) {
    sliderRelocate();
  }
  
  updateSlider();
}
function sliderRelocate() {
  let fC = slider.firstElementChild;
  console.log(fC.getBoundingClientRect());
  fC.style.transoform = "translateX(1600px)";
  fC.classList.add('change_position');
  console.log(fC.style);
  slider.appendChild(fC);
}
function mover(cl){
  slider.classList.remove('list_backward');
  slider.classList.remove('list_forward');
  if (slider.classList.contains(cl)){
    slider.classList.remove(cl);
  }else {
    slider.classList.add(cl);
  }
}
function updateSlider () {
  console.log(slider.getBoundingClientRect());
  sliders.forEach((slide, index) => {
    if (index === sliderIndex) {
      //slide.classList.add('participants-item_focus');
      
      //console.log(sliders.classList());
      //sliders.computedStyleMap.display = 'block';console.log(slider.firstElementChild);
      

    }else {
      //sliders.computedStyleMap.display = 'none'
      //sliders.classList.add('slide_hide');
      //slide.classList.remove('participants-item_focus');
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
*/


//transform translate chrome breakup render in mozila fine 
(async ()=>{
  console.log('init corousel');
  const sliderWrapper = document.querySelector('.participants__list');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelectorAll('.participants__item')
  const paddingRight = 20;
  const pagCounter = document.querySelector('.pagination__counter');
  let p = 0;
  console.log(pagCounter);
  const moveNext = (el, mov) => new Promise (r => 
    {
    console.log(el);
    el.ontransitionstart =_=> {
      console.log('transitionStart');
    };
    el.ontransitionend =_=> {
      el.ontransitionend = null;
      el.style.transition ='none';
      r();
    }
    el.style.transition = '1s ease-in-out';
    el.style.WebkitTransform = 'translateX(-' + mov + 'px)';
    });

  const delay = ms => new Promise (r => setTimeout(r, ms));
  const testObj = null;

  testInitObject(sliderWrapper, 'sliderWrapper');
  testInitObject(slides, 'slides');
  testInitObject(testObj, 'testObj');
  

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click',
  showNextSlide);

  function showPreviousSlide() {
    console.log('btn prev');
    pagCounter.textContent = '3/6';
  }
  function showNextSlide() {
    console.log('btn next');
    pagCounter.textContent = '6/6';
  }
  let index = 0;


 function sliderUpdate (){
  
 }
 while (true) {
  
  await delay(4000);
  await moveNext (sliderWrapper, slides[index].clientWidth + paddingRight);
  
  
  sliderWrapper.appendChild(slides[index]);
  sliderWrapper.style.WebkitTransform = 'translateX(0px)';
  index = ++index % slides.length;
  
}

function testInitObject (obj, objName) {
  if(obj !== null) {
    console.log('Pass: ' + objName + ' ' + obj);
    console.log(obj);
  }else {
    console.log('Not Pass: ' + objName + ' object is empty');
  }
}
})();


