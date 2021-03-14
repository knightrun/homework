(function (window, document, undefined) {
  'use strict';

  function getViewportSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  function getViewportOffset() {
    return {
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
  }

  function coinParallax() {
    const target = document.querySelectorAll('.scrollable');
    let i = 0,
      len = target.length,
      scrolled = getViewportOffset().top;

    for (i; i < len; i++) {
      let dataSet = Object.assign({}, target[i].dataset),
        keys = Object.keys(dataSet),
        posY = 0;

      keys.forEach(function (val, index) {
        if (scrolled > +val) {
          if (index < keys.length - 1) {
            let firstKey = +keys[index];
            let secondKey = +keys[index + 1];

            if (scrolled >= firstKey && scrolled <= secondKey) {
              let firstVal = +dataSet[keys[index]],
                secondVal = +dataSet[keys[index + 1]],
                distance = Math.abs(secondVal - firstVal),
                ratio = distance / (secondKey - firstKey),
                direction = secondVal > 0 ? 1 : -1;

              posY = +(firstVal + (direction * (scrolled - firstKey) * ratio)).toFixed(12);
            }
          } else {
            posY = dataSet[val];
          }
        }
      });

      target[i].style.transform = 'translate3d(0px, ' + posY + 'px, 0px)';
    }
  }

  function snsInView() {
    const snsWrap = document.querySelector('.sns_wrap');
    let viewPort = getViewportSize(),
      snsTop = snsWrap.getBoundingClientRect().top;

    if (snsTop > 0 && snsTop <= viewPort.height - 250) {
      if (!snsWrap.classList.contains('blank-in') && !snsWrap.classList.contains('blank-out-in') && !snsWrap.classList.contains('blank-out')) {
        snsWrap.classList.add('blank-in');
      }

      if (!snsWrap.classList.contains('blank-in') && !snsWrap.classList.contains('blank-out-in') && snsWrap.classList.contains('blank-out')) {
        snsWrap.classList.remove('blank-out');
        snsWrap.classList.add('blank-out-in');
      }
    } else {
      if (snsWrap.classList.contains('blank-in') && !snsWrap.classList.contains('blank-out')) {
        snsWrap.classList.remove('blank-in');
        snsWrap.classList.add('blank-out');
      }

      if (snsWrap.classList.contains('blank-out-in') && !snsWrap.classList.contains('blank-out')) {
        snsWrap.classList.remove('blank-out-in');
        snsWrap.classList.add('blank-out');
      }
    }
  }

  function init() {
    const btnPopup = document.querySelector('.btn_popup');
    const popupWrap = document.querySelector('.popup_wrap');
    const btnClose = document.querySelector('.btn_close');

    btnPopup.addEventListener('click', function () {
      popupWrap.classList.add('bounce');
    });

    btnClose.addEventListener('click', function () {
      popupWrap.classList.remove('bounce');
    });

    window.addEventListener('scroll', function () {
      coinParallax();
      snsInView();
    });

    coinParallax();
    snsInView();
  }

  window.addEventListener('load', function () {
    setTimeout(function(){
      init();
    }, 1000);
  })

}(window, document))