var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser')

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'ttodo_list'
})

connection.connect()
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

// open html file

app.get('/', function(req, res){
     res.sendFile(__dirname + '/index.html');
})

app.get('/todo', function(req, res){
     res.render('index');
})

app.post('/todo', function(req, res){

     var submit = req.body.name;

     var query = "INSERT INTO todo_list (data) VALUES ('" + submit + "')";
     connection.query(query, function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   (err, result){
          if(err) throw err;
     })

    res.redirect('/todo')
})

app.listen(3000);
