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
const SLIDER_ITEM_GAP = 20;
const SLIDER_POS = sliderWrapper.clientWidth + SLIDER_ITEM_GAP;
console.log('slider pos', SLIDER_POS);
sliderWrapper.style.WebkitTransform = 'translateX(-' + SLIDER_POS + 'px)';
var directFlag;

let sliderAnimationId;
startSliderAnimation();
let buttonAlreadyPressed = false;
const SLIDER_STATE = {
  sliderBandEnd: false,
  sliderBandStart: false,
  sliderBandCenter: false,
}
SLIDER_STATE.sliderBandCenter = true;

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

const delay = ms => new Promise (r => {
  setTimeout(r, ms);
  
} );
const testObj = null;

window.addEventListener('resize', function(enent){
  console.log('window size: ', sliderWrapper.clientWidth);
}, true);

async function slidLoopTerminate(ms)  {
  
}
function mN (el, mov) {
  el.ontransitionstart =_=> {
    
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
  let prevSliderPad = 50;
  directFlag = 'prev';
  
  sliderLoop = false;
  
  switch(true) {
    case SLIDER_STATE.sliderBandCenter:
      SLIDER_STATE.sliderBandCenter = false;
      SLIDER_STATE.sliderBandEnd = true;
      distance = 0;
      buttonSliderPag('', distance + MANUAL_SLIDER__PADDING, true);
      pagCounter.textContent = '3/6';
      break;
    case SLIDER_STATE.sliderBandStart:
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('', distance + MANUAL_SLIDER__PADDING, true);
      pagCounter.textContent = '3/6';
      break;
    case SLIDER_STATE.sliderBandEnd:
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandEnd = false;
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, true);
      pagCounter.textContent = '6/6';
      break;    
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
  
  
  sliderLoop = false;
  
  if (!buttonAlreadyPressed) {
    buttonAlreadyPressed  = true;
    suspendSliderAnimation();
  }
  if (buttonAlreadyPressed) {
    //reset suspend counter;
  }
  
  switch(true) {
    case SLIDER_STATE.sliderBandCenter:
      
      SLIDER_STATE.sliderBandCenter = false;
      SLIDER_STATE.sliderBandEnd = true;
      distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, false);
      pagCounter.textContent = '3/6';
      break;
    case SLIDER_STATE.sliderBandStart:
       
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandStart = false;
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, false);
      pagCounter.textContent = '3/6';
      break;  
    case SLIDER_STATE.sliderBandEnd:
      
      distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + MANUAL_SLIDER__PADDING, false);
      pagCounter.textContent = '6/6';
      break;
    default:
      
      break;    
  }
};



function startSliderAnimation() {
  if (!sliderAnimationId)
    sliderAnimationId = setInterval(sliderAnimation, 4000);
}
function suspendSliderAnimation() {

  clearInterval(sliderAnimationId);
  sliderAnimationId = null;
  var time = 3, x = setInterval(function () {
    console.log(--time);
    if (time === 0) {
      startSliderAnimation ();
      buttonAlreadyPressed  = false;
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandStart = false;
      SLIDER_STATE.sliderBandEnd =false;
      clearInterval(x);
    }
  }, 1000);
  
}

function sliderAnimation () {

  let dist = (SLIDER_POS + slides[index].clientWidth) + SLIDER_ITEM_GAP;
  console.log('anim slider dist', dist);
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
    for (let i = slides.length-1; i >= 6; i--) {
      //let clone = slidesChunk[i].cloneNode(true);
      //console.log(i);
      
      
      sliderWrapper.insertBefore(slidesChunk[i], sliderWrapper.firstChild);
    }
  }else {
    for (let i = 0; i < 3; i++) {
      
      sliderWrapper.appendChild(slidesChunk[i]);
    }
  }
}

async function resumeAutoSlide() {
  while (sliderLoop) {
  
  
    //await delay(4000);https://yandex.ru/images/search?text=remote%20job&parent-reqid=1732174508754095-5313789214326914908-balancer-l7leveler-kubr-yp-sas-195-BAL&from=tabbar
    //await moveNext (sliderWrapper, slides[index].clientWidth + paddingRight);
    
    //sliderWrapper.appendChild(slides[index]);
    //sliderWrapper.style.WebkitTransform = 'translateX(0px)';
    //index = ++index % slides.length;
    
  }
} 
function buttonSliderPag(direction, pos, arrayRevert) {
  //+21 px
  
  console.log();
  if (!arrayRevert) {
    pos = pos + SLIDER_ITEM_GAP;
    console.log(pos);
    sliderWrapper.style.transition = '1s ease-in-out';
    sliderWrapper.style.WebkitTransform = "translateX(" + direction + pos + "px)";
  }else {
    pos = pos - SLIDER_ITEM_GAP;
    console.log(pos);
    sliderWrapper.style.transition = '1s ease-in-out';
    sliderWrapper.style.WebkitTransform = "translateX(-" + direction + pos + "px)";
  }
  

  sliderWrapper.ontransitionend =_=> {
    
    sliderWrapper.ontransitionend = null;
    sliderWrapper.style.transition =
    'none';
    chunkMove(arrayRevert);
    console.log (sliderWrapper.clientWidth);
    let p =sliderWrapper.clientWidth + SLIDER_ITEM_GAP;
    sliderWrapper.style.WebkitTransform = 'translateX(-'+ p  +'px)';
  }
}
function resetPos (){
  
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





