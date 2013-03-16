## browserify v2 middleware for express 

Basically just brings back the features that were originally in browserify v1

This is how you use it in an Express project.

```javascript
var browser_express = require('browserify-express');
var bundle = browserify_express({
	entry: __dirname + '/app/js/entry.js',
	watch: __dirname + '/app/js/',
	mount: '/js/myapp.js',
	verbose: true,
	minify: true,
	bundle_opts: { debug: true } // enable inline sourcemap on js files 
});

app.use(bundle);
```

In this example: 

* watch for changes to files in the directory defined in `watch`, this can also just watch a single file. 
* make the bundle accessible at '/js/myapp.js'
* minify the bundle using uglify-js2
* print messages to the console to show re-bundling and times
* pass opts.debug to browserify.bundle

### using coffee-script

This is supported by default however all your require()'s must include the .coffee extensions, it will not pick it up by default.


e.g. require('../views/pop.coffee')



