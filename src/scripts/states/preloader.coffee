class Preloader
  constructor : (game) ->
    @asset = null
    @ready = false
    @game = game

  preload: ->
    @asset = @add.sprite(320, 240, 'preloader')
    @asset.anchor.setTo(0.5, 0.5)

    @load.onLoadComplete.addOnce(@onLoadComplete, @)
    @load.setPreloadSprite(@asset)
    @load.image('testsprite', 'assets/test.png')

  create: ->
    @asset.cropEnabled = false

  update: ->
    if @ready
      @game.state.start('Menu')

  onLoadComplete: ->
    @ready = true

module.exports = Preloader
