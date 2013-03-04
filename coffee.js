// this is just a generic browserify bundle plugin to compile coffee-script

var coffee = require('coffee-script');
var through = require('through');

function compile(file) {
	if ( ! /\.coffee$/.test(file)) return through();
	var data = '';

	function write(buf) { 
		data += buf; 
	}

	function end () {
		this.queue(coffee.compile(data));
		this.queue(null);
	}

	return through(write, end);
}

module.exports = compile;

