
var type = require('type')

module.exports = match

function match(value, pattern){
  return match[type(pattern)](value, pattern)
}

match.object = function(value, pattern){
  if (type(value) != 'object') return false
  for (var k in pattern) {
    if (!(k in value)) return false
    if (!match(value[k], pattern[k])) return false
  }
  return true
}

match.array = function(value, pattern){
  if (type(value) != 'array') return false
  if (value.length < pattern.length) return false
  for (var i = 0, len = pattern.length; i < len; i++) {
    if (!match(pattern[i], pattern[i])) return false
  }
  return true
}

match.number =
match.string =
match.boolean = function(value, pattern){
  return value == pattern
}

match.function = function(value, pattern){
  return match(value, pattern.toString())
}

match.regexp = function(value, pattern){
  if (type(value) == 'regexp') {
    return value.toString() == pattern.toString()
  }
  return pattern.test(value)
}
