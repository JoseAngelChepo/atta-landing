var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/', function (req, res) {
	res.render('index');
})

app.listen(8080, function(err) {
	if (err) return  console.log('Error'), process.exit(1);
	console.log('Success');
})
