var Player,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Player = (function(_super) {
  __extends(Player, _super);

  function Player(game, x, y) {
    Player.__super__.constructor.call(this, game, x, y, 'testsprite');
    game.add.existing(this);
  }

  Player.prototype.update = function() {};

  return Player;

})(Phaser.Sprite);

module.exports = Player;
