var Menu;

Menu = (function() {
  function Menu() {
    this.text = null;
  }

  Menu.prototype.create = function() {
    var style, x, y;
    x = this.game.width / 2;
    y = this.game.height / 2;
    style = {
      font: "65px Arial",
      fill: "#ffffff",
      align: "center"
    };
    this.text = this.add.text(x - 300, y - 200, "Press to Start", style);
    return this.input.onDown.add(this.onDown, this);
  };

  Menu.prototype.update = function() {};

  Menu.prototype.onDown = function() {
    return this.game.state.start(playerState.currentLevel);
  };

  return Menu;

})();

module.exports = Menu;
