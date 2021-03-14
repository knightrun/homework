(function(window, document, undefined){
  'use strict';

  function getViewportSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  function getViewportOffset() {
    return {
      top:  window.pageYOffset || document.documentElement.scrollTop   || document.body.scrollTop || 0,
      left: window.pageXOffset || document.documentElement.scrollLeft  || document.body.scrollLeft || 0
    };
  }

  function init() {
    const btnPopup = document.querySelector('.btn_popup');
    const popupWrap = document.querySelector('.popup_wrap');
    const btnClose = document.querySelector('.btn_close');

    btnPopup.addEventListener('click', function(){
      popupWrap.classList.add('bounce');
    });

    btnClose.addEventListener('click', function(){
      popupWrap.classList.remove('bounce');
    });

    window.addEventListener('scroll', function() {
      const target = document.querySelectorAll('.scrollable');
      let i = 0,
          len = target.length,
          scrolled = getViewportOffset().top;

      for(i; i < len; i++){
        let dataSet = Object.assign({}, target[i].dataset),
            keys = Object.keys(dataSet),
            posY = 0;

        keys.forEach(function(val, index){
          if(scrolled > +val){
            if(index < keys.length - 1){
              let firstKey = +keys[index];
              let secondKey = +keys[index + 1];

              if(scrolled >= firstKey && scrolled <= secondKey){
                let firstVal = +dataSet[keys[index]],
                    secondVal = +dataSet[keys[index + 1]],
                    distance = Math.abs(secondVal - firstVal),
                    ratio = distance/(secondKey - firstKey),
                    direction = secondVal > 0 ? 1 : -1;

                posY = +(firstVal + (direction * (scrolled - firstKey) * ratio)).toFixed(12);
              }
            } else{
              posY = dataSet[val];
            }
          }
        });

        target[i].style.transform = 'translate3d(0px, ' + posY + 'px, 0px)';
      }
    });
  }

  window.addEventListener('load', function() {
    init();
  })

}(window, document))