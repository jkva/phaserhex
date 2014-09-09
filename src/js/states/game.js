var Game, Player;

Player = require('../entities/player');

Game = (function() {
  function Game() {
    this.testentity = null;
  }

  Game.prototype.create = function() {
    var x, y;
    x = (this.game.width / 2) - 100;
    y = (this.game.height / 2) - 50;
    this.testentity = new Player(this.game, x, y);
    this.testentity.anchor.setTo(0.5, 0.5);
    return this.input.onDown.add(this.onInputDown, this);
  };

  Game.prototype.update = function() {
    var angle, cx, cy, dx, dy, scale, x, y;
    x = this.input.position.x;
    y = this.input.position.y;
    cx = this.world.centerX;
    cy = this.world.centerY;
    angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
    this.testentity.angle = angle;
    dx = x - cx;
    dy = y - cy;
    scale = Math.sqrt(dx * dx + dy * dy) / 100;
    this.testentity.scale.x = scale * 0.6;
    return this.testentity.scale.y = scale * 0.6;
  };

  Game.prototype.onInputDown = function() {
    return this.game.state.start('Menu');
  };

  return Game;

})();

module.exports = Game;
