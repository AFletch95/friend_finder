// api routing
module.exports = function(app){
  // import data file
  const Friends = require('../data/friends.js');
  // get
app.get('/api/friends',function(req,res){
  return res.json(Friends);
})
  //post
  app.post('/api/friends',function(req,res){
    Friends.push(req.body);
  })
}