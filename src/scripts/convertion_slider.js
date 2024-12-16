"use strict"

var btnPrev = document.querySelector('.convert__btn_prev');
var btnNext = document.querySelector('.convert__btn_next');
var pagCounter = document.querySelectorAll('.convert__pag-dot');

var sliderCurrentElIndex = 0;



var slidesChunk = sliderConstructor(document.querySelectorAll('.convertion__item'));
var slidesCatche = [];
var slidersPack = slidesChunk;



sliderInit();

disabledPrevButton();

btnPrev.addEventListener('click', () => {
  enabledButton(btnNext);
  console.log ('btn');
  
  if (sliderCurrentElIndex >= 0) {
    sliderCurrentElIndex = sliderCurrentElIndex - 1;
    slideChanger(sliderCurrentElIndex);
    paginationDotsChanger(sliderCurrentElIndex);
  
  }
  
  if (sliderCurrentElIndex == 0) {
    btnPrev.setAttribute("disabled", "");
  }
  disabledPrevButton();
  
});

btnNext.addEventListener('click', () => {
  
  enabledButton(btnPrev);
  sliderCurrentElIndex = ++sliderCurrentElIndex % slidersPack.length;

    
  slideChanger(sliderCurrentElIndex);
  paginationDotsChanger(sliderCurrentElIndex);
  
  if (sliderCurrentElIndex == slidersPack.length - 1) {
    disabledButton(btnNext)
  }
  
});

function disabledPrevButton() {
  if (sliderCurrentElIndex == 0) {
    disabledButton(btnPrev);
  }
}

function disabledButton(el) {
  el.setAttribute("disabled", "");
  el.classList.remove("btns-pagination_hover");
}
function enabledButton(el) {
  el.removeAttribute("disabled");
  el.classList.add("btns-pagination_hover");
}

function sliderConstructor(arr) {

  let tempChunk = Array.from(arr);
  let attrChunk = [];
  let attrName;
  for(let i =0; i < tempChunk.length; i++ ) {
    if(tempChunk[i].getAttribute('data-slid') != 'none' && 
    tempChunk[i].getAttribute('data-slid') != attrName) {
      attrName = tempChunk[i].getAttribute('data-slid');
      let chunk = tempChunk.filter(function (item) {
        return item.getAttribute('data-slid') == attrName;
      } );
      attrChunk .push(chunk);
      
      
    } else if (tempChunk[i].getAttribute('data-slid') != attrName) {
      attrChunk .push(tempChunk[i]);
    }
  }
  
  return attrChunk;
  
}

function slideChanger(index) {
  console.log(index);
  if(index >= 0){
    slideShow(index);
  } 
    
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
  if (index >= 0) {
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
  
}
