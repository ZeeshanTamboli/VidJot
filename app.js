const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

//Connect to Mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
  useMongoClient: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

//Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//INDEX ROUTE
app.get('/', (req, res) => {
  const title = 'Welcome'
  res.render('index', {
    title: title
  });
});

//ABOUT ROUTE
app.get('/about', (req, res) => {
  res.render('about');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});