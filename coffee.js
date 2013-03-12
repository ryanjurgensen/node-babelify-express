// this is just a generic browserify bundle plugin to compile coffee-script

var coffee = require('coffee-script');
var through = require('through');

function compile(coffee_opts) {
	function coffee_compile(file) {
		if ( ! /\.coffee$/.test(file)) return through();
		var data = '';

		function write(buf) { 
			data += buf; 
		}

		function end () {
			this.queue(coffee.compile(data, coffee_opts));
			this.queue(null);
		}

		return through(write, end);
	}
	return coffee_compile;
}

module.exports = compile;

