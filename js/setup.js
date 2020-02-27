'use strict';
(function () {
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_QUANTITY = 4;

  var setup = document.querySelector('.setup');

  var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  var wizards = [];

  shuffleArray(WIZARD_EYESCOLORS);
  shuffleArray(WIZARD_NAMES);
  shuffleArray(WIZARD_SURNAMES);
  shuffleArray(WIZARD_COATCOLORS);

  for (var i = 0; i <= WIZARD_QUANTITY; i++) {
    wizards.push({name: WIZARD_NAMES[i], coatColor: WIZARD_COATCOLORS[i], eyesColor: WIZARD_EYESCOLORS[i]});
    for (i = 0; i < wizards.length; i++) {
      var fullName = WIZARD_NAMES[i] + ' ' + WIZARD_SURNAMES[i];
      wizards[i].name = fullName;
    }
  }

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var onSuccess = function (wizard) {
    var fragment = document.createDocumentFragment();

    for (i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizard[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.backend.load(onSuccess, onError);

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  window.WIZARD_COATCOLORS = WIZARD_COATCOLORS;
  window.WIZARD_EYESCOLORS = WIZARD_EYESCOLORS;
  window.FIREBALL_COLORS = FIREBALL_COLORS;
})();
