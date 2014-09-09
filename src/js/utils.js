var Utils;

Utils = {
  containsObject: function(obj, list) {
    var i, _i, _ref;
    for (i = _i = 0, _ref = list.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      if (list[i] === obj) {
        return true;
      }
    }
    return false;
  }
};

module.exports = Utils;
