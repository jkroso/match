
var assert = require('assert/index')
var match = require('..')

it('strings', function(){
  assert(!match('a', 'b'))
  assert(match('a', 'a'))
})

it('numbers', function(){
  assert(!match(1, 2))
  assert(match(1, 1))
})

it('regexp', function(){
  assert(!match(/a/, /ab/))
  assert(match(/a/, /a/))
  assert(!match('a', /b/))
  assert(match('a', /a/))
})

it('boolean', function(){
  assert(!match(true, false))
  assert(match(true, true))
})

it('functions', function(){
  function add(){ return 1 + 1 }
  assert(match(add, /\+/))
  assert(match(add, function add(){ return 1 + 1 }))
})

describe('objects', function(){
  it('should deeply match', function(){
    assert(!match({a:1,b:2}, {a:2}))
    assert(match({a:1,b:2}, {a:1}))
    assert(match({a:{a:1},b:2}, {a:{a:1}}))
    assert(match({a:'abc'}, {a:/^\w+$/}))
  })
})

describe('arrays', function(){
  it('should allow shorter patterns', function(){
    assert(!match([1,2], [1,2,3]))
    assert(match([1,2], [1]))
  })
})
