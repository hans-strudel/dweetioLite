var https = require('https')

exports.make = function(d, n, c){
	if (arguments.length < 1) throw new Error("Arguments Required")
	d = d || ''
	d = (typeof d == 'string') ? d : d.toString()
	n = n || ''
	n = (typeof n == 'string') ? n : n.toString()
	c = c || ''
	c = (typeof c == 'function') ? c : (e) => { console.log(e) }
	var s
	o = {
		host: "www.dweet.io",
		path: "/dweet/for/" + encodeURIComponent(n) + "?data=" + encodeURIComponent(d),
		method: "GET",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
	var r = https.request(o, (e) => {
		e.setEncoding("utf8")
		e.on("data", (b) => {
			s = b
		})
		e.on("end", () => {
			c(s)
			r.end()
		})
	})
	r.on("error", (e) => {
		console.log(e.message)
	})
	r.write('POST')
}
exports.get = function(n, c){
	if (arguments.length < 1) throw new Error("Arguments Required")
	n = n || ''
	n = (typeof n == 'string') ? n : n.toString()
	c = c || ''
	c = (typeof c == 'function') ? c : (e) => { console.log(e) }
	var s
	o = {
		host: "www.dweet.io",
		path: "/get/dweets/for/" + encodeURIComponent(n),
		method: "GET",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
	var r = https.request(o, (e) => {
		e.setEncoding("utf8")
		e.on("data", (b) => {
			s = b
		})
		e.on("end", () => {
			c(s)
			r.end()
		})
	})
	r.on("error", (e) => {
		console.log(e.message)
	})
	r.write('GET')
}