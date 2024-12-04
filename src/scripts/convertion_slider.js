"use strict"

var btnPrev = document.querySelector('.convert__btn_prev');
var btnNext = document.querySelector('.convert__btn_next');
var pagCounter = document.querySelectorAll('.convert__pag-dot');

var sliderCurrentElIndex = 0;
var pagDots = 0;
var sliderLength = 7;
//check array slidersPack


//slideChanger(pagDots);

var slidesChunk = document.querySelectorAll('.convertion__item');
var slidesCathed = [];
var slidersPack = [];


sliderConstructor();
sliderInit();
btnPrev.addEventListener('click', () => {
  
  console.log ('btn');
  if (sliderCurrentElIndex > 0) {
    sliderCurrentElIndex = sliderCurrentElIndex - 1;
    
  }
  if (pagDots > 0) {
    pagDots = pagDots - 1;
  }
  slideChanger(sliderCurrentElIndex, 'prev');
  paginationDotsChanger(pagDots);
  
});

btnNext.addEventListener('click', () => {
  
  console.log ('btn');
  if ( sliderCurrentElIndex < slidersPack.length) {
    sliderCurrentElIndex = ++sliderCurrentElIndex % sliderLength;
    pagDots = ++pagDots % (slidersPack.length - 2);
    
  }
  slideChanger(sliderCurrentElIndex, 'next');
  paginationDotsChanger(pagDots);
  
});
function sliderConstructor () {

  slidesCathed.push(slidesChunk[0]);
  slidesCathed.push(slidesChunk[1]);

  slidersPack.push(slidesCathed);

  slidersPack.push(slidesChunk[2]);

  slidesCathed = [slidesChunk[3],slidesChunk[4]];

  slidersPack.push(slidesCathed);

  slidersPack.push(slidesChunk[5]);
  slidersPack.push(slidesChunk[6]);
  slidersPack.push(slidesChunk[7]);
  slidersPack.forEach((el) => {
    console.log(el);
  });
}
function slideChanger(index, direction) {
  console.log('slide changer');

  if (index == 1 && direction == 'prev') {
    slideHide();
    slideDoble(index, direction);
  }
  else if (index == 4 && direction == "prev") {
    slideHide();
    slideDoble(index, direction); 
  }
  else if (index == 0) {
    slideHide();
    slideDoble(index, direction);
  }
  else if (index == 3) {
    slideHide();
    slideDoble(index, direction);
    
  } else {
    slideHide();
    slidersPack[index].classList.add('convertion__item_active');
  }
  
}
function sliderInit() {
  slidersPack[0].forEach((el) => {
    el.classList.add('convertion__item_active');
  })
}
function slideDoble(index, direction) {
  console.log ('slidedoble');
  if (direction == 'next') {
    console.log ('forward');
    slidersPack[index].classList.add('convertion__item_active');
    slidersPack[index + 1].classList.add('convertion__item_active');
    sliderCurrentElIndex++;
    console.log(sliderCurrentElIndex);
  } else if (direction == 'prev') {
    console.log ('backward');
    slidersPack[index].classList.add('convertion__item_active');
    slidersPack[index - 1].classList.add('convertion__item_active');
    sliderCurrentElIndex--;
    console.log(sliderCurrentElIndex);
  }
  
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
function slideHide() {
  slidersPack.forEach((el) => {
    el.classList.remove('convertion__item_active');
  })
}