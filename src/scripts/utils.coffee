Utils =
  containsObject: (obj, list) ->
    for i in [0..list.length]
      return true if list[i] == obj
    false

module.exports = Utils