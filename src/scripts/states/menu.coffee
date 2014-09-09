class Menu
  constructor: ->
    @text = null

  create: ->
    x = @game.width / 2
    y = @game.height / 2

    style =
      font: "65px Arial"
      fill: "#ffffff"
      align: "center"

    @text = @add.text(x - 300, y - 200, "Press to Start", style)

    @input.onDown.add(@onDown, @)

  update: ->

  onDown: ->
    @game.state.start(playerState.currentLevel)

module.exports = Menu