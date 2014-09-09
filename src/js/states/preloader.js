var Preloader;

Preloader = (function() {
  function Preloader(game) {
    this.asset = null;
    this.ready = false;
    this.game = game;
  }

  Preloader.prototype.preload = function() {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    return this.load.image('testsprite', 'assets/test.png');
  };

  Preloader.prototype.create = function() {
    return this.asset.cropEnabled = false;
  };

  Preloader.prototype.update = function() {
    if (this.ready) {
      return this.game.state.start('Menu');
    }
  };

  Preloader.prototype.onLoadComplete = function() {
    return this.ready = true;
  };

  return Preloader;

})();

module.exports = Preloader;
