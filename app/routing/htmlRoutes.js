// html routing

module.exports = function(app){
  const path = require('path');
  // homepage
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../public/home.htm'));
  })
    // survey
  app.get('/survey',function(req,res){
    res.sendFile(path.join(__dirname,'../public/survey.htm'));
  })
  app.get('/api/friends',function(req,res){
    res.sendFile(path.join(__dirname,'../data/friends.js'));
  })
    // anything else, reroute to home
  app.get('*',function(req,res){
    res.redirect('/');
  })

}