class Boot
  preload: ->
    @load.image('preloader', 'assets/preloader.gif')

  create: ->
    @game.input.maxPointers = 1

    if (@game.device.desktop)
      @game.stage.scale.pageAlignHorizontally = true
    else
      @game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL
      @game.stage.scale.minWidth =  480
      @game.stage.scale.minHeight = 260
      @game.stage.scale.maxWidth = 640
      @game.stage.scale.maxHeight = 480
      @game.stage.scale.forceLandscape = true
      @game.stage.scale.pageAlignHorizontally = true
      @game.stage.scale.setScreenSize(true)

    @game.state.start('Preloader')

module.exports = Boot
