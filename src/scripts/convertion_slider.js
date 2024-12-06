"use strict"

var btnPrev = document.querySelector('.convert__btn_prev');
var btnNext = document.querySelector('.convert__btn_next');
var pagCounter = document.querySelectorAll('.convert__pag-dot');

var sliderCurrentElIndex = 0;



var slidesChunk = document.querySelectorAll('.convertion__item');
var slidesCatche = [];
var slidersPack = [];


sliderConstructor();
sliderInit();
btnPrev.addEventListener('click', () => {
  
  console.log ('btn');
  if (sliderCurrentElIndex > 0) {
    sliderCurrentElIndex = sliderCurrentElIndex - 1;
    slideChanger(sliderCurrentElIndex);
    paginationDotsChanger(sliderCurrentElIndex);
  }
  
});

btnNext.addEventListener('click', () => {
  
  if ( sliderCurrentElIndex < slidersPack.length) {
    sliderCurrentElIndex = ++sliderCurrentElIndex % slidersPack.length;
    
    slideChanger(sliderCurrentElIndex);
    paginationDotsChanger(sliderCurrentElIndex);
  }
  
});
function sliderConstructor () {

  /*
  let attrChunk = [];
  for(let i =0; i < slidesChunk.length; i++ ) {
    if(slidesChunk[i].getAttribute('data-slid') != 'none') {
      attrChunk.push(slidesChunk[i]);
      
    }
    slidersPack.push(slidesChunk[i]);
  }
  console.log(attrChunk);
  */

  
  slidesCatche = [slidesChunk[0],slidesChunk[1]];

  slidersPack.push(slidesCatche);

  slidersPack.push(slidesChunk[2]);

  slidesCatche = [slidesChunk[3],slidesChunk[4]];

  slidersPack.push(slidesCatche);

  slidersPack.push(slidesChunk[5]);
  slidersPack.push(slidesChunk[6]);
  
  
  
}

function slideChanger(index) {
  
  slideShow(index);
}
function slideShow(index) {
  slideHide();
  
  if (!Array.isArray(slidersPack[index])) {
    slidersPack[index].classList.add('convertion__item_active');
  } else {
    slidersPack[index].forEach((el) => {
      el.classList.add('convertion__item_active');
    })
  }
  
}
function slideHide() {
  slidersPack.forEach((el) => {
    if (Array.isArray(el)) {
      el.forEach((sub_el) => {
        sub_el.classList.remove('convertion__item_active');
      })
    }else {
      el.classList.remove('convertion__item_active');
    }
    
  })
}

function sliderInit() {
  slidersPack[0].forEach((el) => {
    el.classList.add('convertion__item_active');
  })
}

function paginationDotsChanger(index) {
  pagCounter.forEach((el, index) => {
    el.classList.remove('convert__pag-dot--active');
  })
  try {
    pagCounter[index].classList.add('convert__pag-dot--active');
  }
   catch(err){
    console.log(err);
   }
}
