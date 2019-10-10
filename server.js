const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extenedd: true}));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// html routing
  // homepage
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/app/public/home.htm'));
})
  // survey
app.get('/survey',function(req,res){
  res.sendFile(path.join(__dirname,'/app/public/survey.htm'));
})
app.get('/api/friends',function(req,res){
  res.sendFile(path.join(__dirname,'./app/data/friends.js'));
})
  // anything else, reroute to home
app.get('*',function(req,res){
  res.redirect('/');
})


// api routing
  // import data file
const Friends = require('./app/data/friends.js');
  // get
app.get('/api/friends',function(req,res){
  return res.json(Friends);
})
  //post
  app.post('/api/friends',function(req,res){
    Friends.push(req.body);
  })