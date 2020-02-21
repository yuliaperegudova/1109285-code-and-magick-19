'use strict';

window.util = (function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var setupUserName = document.querySelector('.setup-user-name');

  return {
    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEY && evt.target !== setupUserName) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    }
  };
})();
