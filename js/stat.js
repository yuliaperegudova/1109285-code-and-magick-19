/* eslint-disable strict */
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_GAP = 35;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var maxTime = getMaxElement(times);

  var getColor = function () {
    if (names[i] === 'Вы') {
      var color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsl(' + '240' + ',' + Math.floor(Math.random() * 100) + '%, ' + '50' + '%)';
    }
    return color;
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + FONT_GAP);
    ctx.fillStyle = getColor();
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, -((BAR_HEIGHT * Math.floor(times[i])) / maxTime));
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP - ((BAR_HEIGHT * Math.floor(times[i])) / maxTime));
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};

