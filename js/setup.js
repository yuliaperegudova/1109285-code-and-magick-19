'use strict';

var setup = document.querySelector('.setup');

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_QUANTITY = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createFragment = function (array) {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }
  return fragment;
};
similarListElement.appendChild(createFragment(wizards));

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupForm = document.querySelector('.setup-wizard-form');
var submitButton = setup.querySelector('.setup-submit');

var onSubmitButtonPress = function (evt) {
  if (evt.key === ENTER_KEY && evt.target === submitButton) {
    setupForm.submit();
  }
}; // не работает, не могу навести фокус на кнопку Сохранить. Что не так?

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onSubmitButtonPress); // как следствие, не работает и эта строка
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
var coatColor = document.querySelector('input[name = coat-color]');
var wizardEyes = document.querySelector('.wizard-eyes');
var eyesColor = document.querySelector('input[name = eyes-color]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.querySelector('input[name = fireball-color]');


var onColorClick = function (array, wizardElement, elementValue) {
  i = getRandomInt(0, array.length);
  elementValue.value = array[i];
  if (wizardElement === wizardFireball) {
    wizardElement.style.backgroundColor = array[i];
  } else {
    wizardElement.style.fill = array[i];
  }
};

var onCoatColorClick = function () {
  onColorClick(WIZARD_COATCOLORS, wizardCoat, coatColor);
};

var onEyesColorClick = function () {
  onColorClick(WIZARD_EYESCOLORS, wizardEyes, eyesColor);
};

var onFireballColorClick = function () {
  onColorClick(FIREBALL_COLORS, wizardFireball, fireballColor);
};

wizardCoat.addEventListener('click', onCoatColorClick);
wizardEyes.addEventListener('click', onEyesColorClick);
wizardFireball.addEventListener('click', onFireballColorClick);
