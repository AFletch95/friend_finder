const express = require('express');
const app = express();

const htmlRoutes = require('./app/routing/htmlRoutes.js')
const apiRoutes = require('./app/routing/apiRoutes.js')
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//adding html routes to app
htmlRoutes(app);
apiRoutes(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
