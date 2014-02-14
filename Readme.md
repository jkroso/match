
# match

  match a pattern against a value

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add jkroso/match`
- [component](//github.com/component/component#installing-packages): `component install jkroso/match`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install jkroso/match`

then in your app:

```js
var match = require('match')
```

## API

### match(value, pattern)

```js
var value = {a:1, b:'hi', c:{d: /rgx/}}
match(value, {a:1}) // => true
match(value, {b:/^\w+$/}) // => true
match(value, {c:{d: /rgx/}}) // => true
```
