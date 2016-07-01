//Initializing variables
var express 		= require('express');
var app         	= express();
var compression     = require('compression');
var http	 		= require('http');
var parser 			= require('body-parser');

//Uses of app
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/views", express.static(__dirname + '/views'));

// compress all requests 
app.use(compression()); 

//Use for the views
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//passing the app
var routes  = require('./config/routes')(app);		

//Creation of Server
http.createServer(app).listen(8080,function() {	
	console.log("Connected & Listen with port 8080");
});												




// var connection = mysql.createConnection({
// 	//properties....
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'sampleDB'
// });
// connection.connect(function(error){
// 	if(!!error) {
// 		console.log('Error');
// 	} else {
// 		console.log('Connected');
// 	}
// });
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());



// var routes = require('./config/routes')(app);


// app.get('/signup', function(req, resp) {
// 	resp.sendFile('./client/templates/signup.html', { root: __dirname });
// 	console.log('Signup');

// });

// app.post('/signup',function(req,resp){
// 	var user = {User_ID: 0, Firstname:req.body.firstname, Lastname:req.body.lastname,
// 				Username:req.body.emailaddress, Password:req.body.password};

// 	resp.send(user);
// 	connection.query('INSERT INTO users SET ?', user, function(err, result){
// 		if(!!error)	{
// 			console.log('Error in the insert query');
// 		} else {
// 			console.log('Success insert');
// 		}
// 	})


// });

// app.get('/login', function(req, resp) {
// 	resp.sendFile('./client/templates/login.html', { root: __dirname });
// 	console.log('Login');

// });

// app.get('/', function(req, resp) {
// 	connection.query("Select * from users", function (error,rows,fields){
// 		if(!!error)	{
// 			console.log('Error in the select query');
// 		} else {
// 			//resp.json(rows);
			
// 		}
// 	});
// 	// resp.send('Home Page');
// 	resp.sendFile('./client/templates/home.html', { root: __dirname });
// 	console.log('Home');

// });



// var server = app.listen(port, function() {
// 	console.log('Server running at http://localhost:' + server.address().port);
// });