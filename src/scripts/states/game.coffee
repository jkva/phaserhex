Player = require('../entities/player')

class Game
  constructor : ->
    @testentity = null

  create: ->
    x = (@game.width / 2) - 100
    y = (@game.height / 2) - 50

    @testentity = new Player(@game, x, y)
    @testentity.anchor.setTo(0.5, 0.5)

    @input.onDown.add(@onInputDown, @)

  update: ->
    x = @input.position.x
    y = @input.position.y
    cx = @world.centerX
    cy = @world.centerY

    angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI)
    @testentity.angle = angle

    dx = x - cx
    dy = y - cy
    scale = Math.sqrt(dx * dx + dy * dy) / 100

    @testentity.scale.x = scale * 0.6
    @testentity.scale.y = scale * 0.6

  onInputDown: ->
    @game.state.start('Menu')

module.exports = Game