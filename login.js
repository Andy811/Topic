var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var username_test = "123";//測試用
var password_test = "123"; //測試用

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123',
	database : 'loginjs'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.get('/home', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/homepage.html'));
});
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/login.html'));
});


app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	/*if (username && password) {
			connection.query('SELECT * FROM logindata WHERE id = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Userid and/or Password!');
			}			
			response.end();
		});
	} */

	if(username==username_test&&password==password_test){
		request.session.loggedin = true;
		request.session.username = username;
		response.redirect('/home');
	}
	else if (results.length > 0) {
		response.send('Incorrect Userid and/or Password!');
	}	
	else {
		response.send('Please enter Userid and Password!');
		response.end();
	}

});

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
	res.sendfile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
		if (err) res.send(404);
	});
  });

app.listen(3001,function () {
	console.log("已啟動在http://localhost:3001/")
})

