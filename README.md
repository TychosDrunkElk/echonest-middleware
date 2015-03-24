Echonest Middleware
====================

Installation
--------------------
Get [an API key](http://developer.echonest.com/docs/v4/#keys).

```
npm install echonest-middleware
```

Example Usage
---------------------
```js
var express = require("express");
var echonestMiddleware = require("echonest-middleware");

var app = express();

    app.use("/api/echonest", echonestMiddleware(process.env.ECHONEST_API_KEY))
```
