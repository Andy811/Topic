var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
	res.sendfile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
		if (err) res.send(404);
	});
  });
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/home', function(request, response) {
	response.sendFile(path.join(__dirname , '/views' , 'homepage.html'));
});
app.get('/checkin', function(request, response) {
	response.sendFile(path.join(__dirname,'/views', 'checkin.html'));
});
app.get('/record', function(request, response) {
	response.sendFile(path.join(__dirname, '/views' , 'record.html'));
});
app.get("/reservation", function(req, res) {
	res.sendfile(__dirname + '/views/reservation.html', function(err) {
		if (err) res.send(404);
	});
  });
