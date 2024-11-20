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
  const slides = document.querySelectorAll('.participants__item');
  const paddingRight = 20;
  const MANUAL_SLIDER__PADDING = 21;
  const pagCounter = document.querySelector('.pagination__counter');
  let p = 0;
  var sliderLoop = true;
  let index = 0;
  const SLIDER_POS = sliderWrapper.clientWidth;
  sliderWrapper.style.WebkitTransform = 'translateX(-' + SLIDER_POS + 'px)';
  var directFlag;
  var sliderBandEnd = false;
  var sliderBandStart = false;
  var sliderBandCenter = true;
  let sliderAnimationId;
  startSliderAnimation();
  let buttonAlreadyPressed = false;
  const moveNext = (el, mov) => new Promise (r => 
    {
    try {
      el.ontransitionstart =_=> {
        console.log('transitionStart');
      };
      el.ontransitionend =_=> {
        console.log('transitionEnd');
        el.ontransitionend = null;
        el.style.transition ='none';
        r();
      }
      el.style.transition = '1s ease-in-out';
      el.style.WebkitTransform = 'translateX(-' + mov + 'px)';
    }catch (error) {
      console.log(error);
    }
    
  });
  console.log(moveNext);
  const delay = ms => new Promise (r => {
    setTimeout(r, ms);
    
  } );
  const testObj = null;

  async function slidLoopTerminate(ms)  {
    
  }
  function mN (el, mov) {
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
    
  }

  testInitObject(sliderWrapper, 'sliderWrapper');
  testInitObject(slides, 'slides');
  
  

  
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click',
  showNextSlide);

  function showPreviousSlide() {
    let distance;
    
    directFlag = 'prev';
    pagCounter.textContent = '3/6';
    sliderLoop = false;
    if (sliderBandCenter) {
      sliderBandCenter = false;
      sliderBandStart = true;
      distance = 0;
      buttonSliderPag('', distance + MANUAL_SLIDER__PADDING, true);
    }
    if (sliderBandEnd) {
      sliderBandCenter = true;
      sliderBandEnd = false;
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, true);
    }
    if (!buttonAlreadyPressed) {
      buttonAlreadyPressed  = true;
      suspendSliderAnimation();
    }
    if (buttonAlreadyPressed) {
      //reset suspend counter;
    }
  }; 
  function showNextSlide() {

    let distance;
    directFlag = 'next';
    
    pagCounter.textContent = '6/6';
    sliderLoop = false;
    if (sliderBandCenter) {
      sliderBandCenter = false;
      sliderBandEnd = true;
      distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, false);
    }
    
    if (sliderBandStart) {
      sliderBandCenter = true;
      sliderBandStart = false;
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, false);
    }
    if (!buttonAlreadyPressed) {
      buttonAlreadyPressed  = true;
      suspendSliderAnimation();
    }
    if (buttonAlreadyPressed) {
      //reset suspend counter;
    }
    
  };
  
  

  function startSliderAnimation() {
    if (!sliderAnimationId)
      sliderAnimationId = setInterval(sliderAnimation, 4000);
  }
  function suspendSliderAnimation() {

    clearInterval(sliderAnimationId);
    sliderAnimationId = null;
    var time = 15, x = setInterval(function () {
      console.log(--time);
      if (time === 0) {
        startSliderAnimation ();
        buttonAlreadyPressed  = false;
        clearInterval(x);
      }
    }, 1000);
    
  }

  function sliderAnimation () {

    let dist = (SLIDER_POS + slides[index].clientWidth) + 20;
    
    sliderWrapper.style.WebkitTransform = 'translateX(-' + dist + 'px)';
    sliderWrapper.style.transition = '1s ease-in-out';
    sliderWrapper.ontransitionend =_=> {
      sliderWrapper.ontransitionend = null;
      sliderWrapper.style.transition ='none';
      sliderWrapper.appendChild(slides[index]);
      sliderWrapper.style.WebkitTransform = 'translateX(-' + SLIDER_POS + 'px)';
      index = ++index % slides.length;
    }
  }
  
  function chunkMove(revert) {
    //slides.lengt
    let slidesChunk = document.querySelectorAll('.participants__item');
    if (revert) {
      for (let i = slides.length-1; i >= 3; i--) {
        
        
        //let clone = slidesChunk[i].cloneNode(true);
        sliderWrapper.insertBefore(slidesChunk[i], sliderWrapper.firstChild);
      }
    }else {
      for (let i =0; i < 3; i++) {
        sliderWrapper.appendChild(slidesChunk[i]);
      }
    }
  }

  async function resumeAutoSlide() {
    while (sliderLoop) {
    
    
      //await delay(4000);
      //await moveNext (sliderWrapper, slides[index].clientWidth + paddingRight);
      
      //sliderWrapper.appendChild(slides[index]);
      //sliderWrapper.style.WebkitTransform = 'translateX(0px)';
      //index = ++index % slides.length;
      
    }
  } 
  function buttonSliderPag(direction, pos, arrayRevert) {
    //+21 px
    
    sliderWrapper.style.transition = '1s ease-in-out';
    sliderWrapper.style.WebkitTransform = "translateX(" + direction + pos + "px)";

    sliderWrapper.ontransitionend =_=> {
      sliderWrapper.ontransitionend = null;
      sliderWrapper.style.transition =
      'none';
      chunkMove(arrayRevert);
      sliderWrapper.style.WebkitTransform = 'translateX('-''+ sliderWrapper.clientWidth +'px)';
    }
  }
  function resetPos (){
    console.log('transform reset');
    sliderWrapper.style.WebkitTransform = 'translateX(0px)';
  }  
  function sliderUpdate (){
  
  }
  
  /*
  while (sliderLoop) {
    
    
    await delay(4000);
    await moveNext (sliderWrapper, slides[index].clientWidth + paddingRight);
    
    sliderWrapper.appendChild(slides[index]);
    sliderWrapper.style.WebkitTransform = 'translateX(0px)';
    index = ++index % slides.length;
    
  }
    */
  
  function testInitObject (obj, objName) {
    if(obj !== null) {
      console.log('Pass: ' + objName + ' ' + obj);
      console.log(obj);
    }else {
      console.log('Not Pass: ' + objName + ' object is empty');
    }
  }
})();




