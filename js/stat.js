var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 25;
var TEXT_WIDTH = 50;
var BAR_WIDHT = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDHT + BAR_GAP)*i, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + FONT_GAP);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDHT + BAR_GAP)*i, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP, BAR_WIDHT, -((BAR_HEIGHT * times[i]) / maxTime));
  };

  ctx.fillStyle = '#000';
  ctx.fillText ('Ура вы победили!', 150, 50);

};
