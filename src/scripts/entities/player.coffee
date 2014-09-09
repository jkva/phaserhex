class Player extends Phaser.Sprite
  constructor: (game, x, y) ->
    super(game, x, y, 'testsprite')
    game.add.existing(@)

  update : ->

module.exports = Player
