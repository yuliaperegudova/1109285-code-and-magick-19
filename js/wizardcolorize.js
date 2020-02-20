'use strict';

(function () {

  var wizardCoat = document.querySelector('.wizard-coat');
  var coatColor = document.querySelector('input[name = coat-color]');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var eyesColor = document.querySelector('input[name = eyes-color]');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('input[name = fireball-color]');

  window.colorize(wizardCoat, window.WIZARD_COATCOLORS, coatColor);
  window.colorize(wizardEyes, window.WIZARD_EYESCOLORS, eyesColor);
  window.colorize(fireball, window.FIREBALL_COLORS, fireballColor);
})();
