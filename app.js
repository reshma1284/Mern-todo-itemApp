var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');
// ... other imports
const path = require("path");

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://test:test@ds125938.mlab.com:25938/aufinancex')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

//simple get request from the server
    app.get('/',function(req,res){
        res.send('<h1> this is the home page </h1>');
    });


// Required application specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "todo-mern-app","build")));
//app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "todo-mern-app", "build", "index.html"));
});
// Start the server
app.listen(process.env.PORT || 4200, function(){
  console.log('Server is running on Port: ',port);
});
