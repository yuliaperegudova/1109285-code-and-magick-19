'use strict';

(function () {

  var getRandomColor = function (colorsArray) {
    return colorsArray[Math.floor(colorsArray.length * Math.random())];
  };

  window.colorize = function (element, colorsArray, elementValue) {
    element.addEventListener('click', function () {
      var color = getRandomColor(colorsArray);
      elementValue.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
