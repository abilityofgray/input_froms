console.log('init corousel');
const sliderWrapper = document.querySelector('.participants__list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.participants__item');

const MANUAL_SLIDER__PADDING = 21; //21
const pagCounter = document.querySelector('.pagination__counter');
let p = 0;
var sliderLoop = true;
let index = 0;
//20px at default gap at start but in lower window size change to 10
let sliderItemGap = 0;



 

let sliderPos;


let startPos;
var directFlag;
let counterReseter;
let sliderAnimationId;


sliderInitPosition();
//startSliderAnimation();

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
  
  sliderInitPosition();
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
  
  if (!buttonAlreadyPressed) {
    buttonAlreadyPressed  = true;
    //suspendSliderAnimation();
  }
  if (buttonAlreadyPressed) {
    //reset suspend counter;
  }
  
  if (!counterReseter) {
    counterReseter = true;
    pagCounter.textContent = '6/6';
  } else {
    counterReseter = false;
    pagCounter.textContent = '3/6';
  }
  /* 
  switch(true) {
    case SLIDER_STATE.sliderBandCenter:
      
      SLIDER_STATE.sliderBandCenter = false;
      SLIDER_STATE.sliderBandStart = true;
      distance = 0;
      buttonSliderPag('', distance + sliderItemGap, true);
      
      break;
    case SLIDER_STATE.sliderBandStart:
      
      distance = 0;
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandStart = false;
      buttonSliderPag('', distance + sliderItemGap, true);
      
      break;
    case SLIDER_STATE.sliderBandEnd:
      
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandEnd = false;
      distance = sliderWrapper.clientWidth - sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + sliderItemGap, true);
      
      break;    
  }
  */
  distance = 0;
  buttonSliderPag('', distance + sliderItemGap, true);

 
  
};

function sliderInitPosition() {
  
  sliderItemGap = 0;
  sliderPos = sliderWrapper.clientWidth + sliderItemGap;

  sliderWrapper.style.WebkitTransform = 'translateX(-' + sliderPos + 'px)';

}
function showNextSlide() {
  
  let distance;
  directFlag = 'next';
  
  
  sliderLoop = false;
  
  if (!buttonAlreadyPressed) {
    buttonAlreadyPressed  = true;
    
    //suspendSliderAnimation();
  }
  if (buttonAlreadyPressed) {
    //reset suspend counter;
    
  }
  
  if (!counterReseter) {
    counterReseter = true;
    pagCounter.textContent = '6/6';
  } else {
    counterReseter = false;
    pagCounter.textContent = '3/6';
  }
  
  /*  
  switch(true) {
    case SLIDER_STATE.sliderBandCenter:
      
      SLIDER_STATE.sliderBandCenter = false;
      SLIDER_STATE.sliderBandEnd = true;
      distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + sliderItemGap, false);
      
      break;
    case SLIDER_STATE.sliderBandStart:
      
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandStart = false;
      distance = sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + sliderItemGap, false);
      
      break;  
    case SLIDER_STATE.sliderBandEnd:
      
      SLIDER_STATE.sliderBandCenter = true;
      SLIDER_STATE.sliderBandEnd = false;
      distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
      buttonSliderPag('-', distance + sliderItemGap, false);
      
      break;
    default:
      
      break;    
  }
  */
  distance = sliderWrapper.clientWidth + sliderWrapper.clientWidth;
  buttonSliderPag('', distance + sliderItemGap, false);    
  
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
      //SLIDER_STATE.sliderBandCenter = true;
      //SLIDER_STATE.sliderBandStart = false;
      //SLIDER_STATE.sliderBandEnd =false;
      clearInterval(x);
    }
  }, 1000);
  
}

function sliderAnimation () {
 
  //hovever slider item gap is 0 need update sliderItemGap on fly
  let dist;

  if (sliderWrapper.clientWidth < 1199) {
    sliderItemGap = 10;
  } else  {
    sliderItemGap = 20;
  }
  
  //calc offeset
  if (sliderWrapper.clientWidth > 320 && sliderWrapper.clientWidth < 767) {
    dist = (sliderWrapper.clientWidth + slides[index].clientWidth) + sliderItemGap - 4;
  } else {
    let w = sliderWrapper.clientWidth - (slides[index].clientWidth * 3 );
    console.log(w / 2);
    sliderItemGap = (w / 2) - 3;
    if (sliderWrapper.clientWidth < 1199) {
      sliderItemGap = sliderItemGap - 3;
    } else if (sliderWrapper.clientWidth > 1199 && sliderWrapper.clientWidth > 1100)  {
      sliderItemGap = sliderItemGap - 4;
    } else if (sliderWrapper.clientWidth < 1099 && sliderWrapper.clientWidth > 910)  {
      sliderItemGap = sliderItemGap - 2;
    } 
    sliderPos = sliderWrapper.clientWidth;
    dist = (sliderWrapper.clientWidth + slides[index].clientWidth) + sliderItemGap;
  }
  
  
  sliderWrapper.style.WebkitTransform = 'translateX(-' + dist + 'px)';
  sliderWrapper.style.transition = '1s ease-in-out';
  sliderWrapper.ontransitionend =_=> {
    sliderWrapper.ontransitionend = null;
    sliderWrapper.style.transition ='none';
    sliderWrapper.appendChild(slides[index]);
    //sliderPos  = 965;
    sliderWrapper.style.WebkitTransform = 'translateX(-' + sliderPos + 'px)';
    index = ++index % slides.length;
  }
}

function TEST_chunkMove(el){
  //console.log(el);
}
function TEST_ARRAY_chunkMove (ar) {
  //console.log(ar.children[1].innerText);
}

function slidesSorting() {
  let chunk = document.querySelectorAll('.participants__item');
  console.log(chunk);
  let a1 = [chunk[0],chunk[1], chunk[2] ];
  let a2 = [chunk[3],chunk[4], chunk[5] ];
  let a3 = [chunk[6],chunk[7], chunk[8] ];
  let outArr = [];

  
  for (let i = 0; i < chunk.length-1; i++) {

    
  }
  outArr.push(a1);
  outArr.push(a2);
  //outArr.push(a3);
  return  Array.from(outArr);
}
let l = 0;
let f = slidesSorting();
f.forEach(el => {
  el.forEach( p => {
    console.log(p.children[1].innerText);
  })
})

f[l].forEach(el => {
  //console.log(el.children[1].innerText);
  //sliderWrapper.appendChild(el);
}) 



function chunkMove(revert) {
  //slides.lengt
  TEST_chunkMove(revert);
  let slidesChunk = document.querySelectorAll('.participants__item');
  console.log(slidesChunk);
  console.log ('index in', l);
  console.log ('%ccurent item order', 'color: green');
  console.table(slidesChunk.forEach(el => {
    console.table(el.children[1].innerText);
    //console.table(el);
  }))
  if (sliderWrapper.clientWidth > 320 && sliderWrapper.clientWidth < 767) {
    if (revert) {
      let dist;
      dist = (sliderWrapper.clientWidth + slides[index].clientWidth) + sliderItemGap - 4;
      sliderWrapper.insertBefore(slides[index], sliderWrapper.firstChild);
      index === 0 ? index = slides.length - 1 : index = index - 1;

    } else {

      let dist;
      dist = (sliderWrapper.clientWidth + slides[index].clientWidth) + sliderItemGap - 4;
      sliderWrapper.appendChild(slides[index]);
      index = ++index % slides.length;
       
    }
  } else {


    if (revert) {
      l === 0 ? l = f.length - 1 : l = l - 1;
      console.log ('%cinsert before this items', 'color: green');
      for (let i = f[l].length - 1; i >= 0; i--) {
        console.log(f[l][i].children[1].innerText);
        sliderWrapper.insertBefore(f[l][i], sliderWrapper.firstChild);
      }
      
    } else {
      l = ++l % f.length;
      console.log ('%cinsert next this items', 'color: green');
      f[l].forEach(el => {
        console.log(el.children[1].innerText);
        sliderWrapper.appendChild(el);
      })
       
    }

    console.log ('%cout item order', 'color: green');
    console.table(slidesChunk.forEach(el => {
    console.table(el.children[1].innerText);
    //console.table(el);
  }))
  }

  console.log ('index out', l);
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
  pos = pos + sliderItemGap;
  sliderWrapper.style.transition = '1s ease-in-out';
  sliderWrapper.style.WebkitTransform = "translateX(-" + direction + pos + "px)";
  
  sliderWrapper.ontransitionend =_=> {
    
    sliderWrapper.ontransitionend = null;
    sliderWrapper.style.transition =
    'none';
    chunkMove(arrayRevert);
    
    let p =sliderWrapper.clientWidth + sliderItemGap;
    sliderWrapper.style.WebkitTransform = 'translateX(-'+ p +'px)';

  }
}
function resetPos (){
  
  sliderWrapper.style.WebkitTransform = 'translateX(0px)';
}  
function sliderUpdate (){

}

function testInitObject (obj, objName) {
  if(obj !== null) {
    console.log('Pass: ' + objName + ' ' + obj);
    console.log(obj);
  }else {
    console.log('Not Pass: ' + objName + ' object is empty');
  }
}
function TEST_sliderPos(slidePos) {
  let posName = sliderPos;
  console.log()
}





