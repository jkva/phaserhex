var Boot;

Boot = (function() {
  function Boot() {}

  Boot.prototype.preload = function() {
    return this.load.image('preloader', 'assets/preloader.gif');
  };

  Boot.prototype.create = function() {
    this.game.input.maxPointers = 1;
    if (this.game.device.desktop) {
      this.game.stage.scale.pageAlignHorizontally = true;
    } else {
      this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
      this.game.stage.scale.minWidth = 480;
      this.game.stage.scale.minHeight = 260;
      this.game.stage.scale.maxWidth = 640;
      this.game.stage.scale.maxHeight = 480;
      this.game.stage.scale.forceLandscape = true;
      this.game.stage.scale.pageAlignHorizontally = true;
      this.game.stage.scale.setScreenSize(true);
    }
    return this.game.state.start('Preloader');
  };

  return Boot;

})();

module.exports = Boot;
