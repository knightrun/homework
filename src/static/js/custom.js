let viewportSize, viewportOffset;

function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function getViewportOffset() {
  return {
    top:  window.pageYOffset || document.documentElement.scrollTop   || document.body.scrollTop,
    left: window.pageXOffset || document.documentElement.scrollLeft  || document.body.scrollLeft
  };
}

function addEvent() {
  const btnPopup = document.querySelector('.btn_popup');
  const popupWrap = document.querySelector('.popup_wrap');
  const btnClose = document.querySelector('.btn_close');

  btnPopup.addEventListener('click', function(){
    popupWrap.classList.add('bounce')
  });

  btnClose.addEventListener('click', function(){
    popupWrap.classList.remove('bounce')
  });

  window.addEventListener('load', function() {
    viewportSize = viewportOffset = null;
  });

  window.addEventListener('load', function() {

  });
}

function onLoad() {
  addEvent();
}

window.addEventListener('load', function() {
  onLoad();
})