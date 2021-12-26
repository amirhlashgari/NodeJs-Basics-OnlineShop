const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database');
const errorController = require('./controllers/error');
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

const app = express();
app.set('view engine', 'ejs');       //to define our templating engine to server
app.set('views', 'views');           //to show the location of template files

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
});