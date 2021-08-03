(function () {
    'use strict';
    //   调整视口字体大小
    setRemUnit();

    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        var docEl = document.documentElement;
        var ratio = 18.75;
        var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;

        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})();
