# dweetioLite
Lightweight dweetio.io NPM module (Just public make/get)

` npm i dweetiolite `

# Use
```javascript
var dweet = require('dweetiolite')
```

Make a dweet:
```javascript
dweet.make('Hello World', 'my-thing-name', function(res){
	console.log(res) //response from dweet.io
})
```

Get all dweets for a thing name:
```javascript
dweet.get('my-thing-name', function(res){
	console.log(res) //all available dweets for my-thing-name
})
```

You can also omit the callback function in either function and it will output results with `console.log()`
```javascript
dweet.make('Hello World', 'my-thing-name')
dweet.get('my-thing-name')
```

**it will except anything for the first two arguments, they will be converted to strings**