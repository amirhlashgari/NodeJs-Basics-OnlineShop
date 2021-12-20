const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/database');
const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const res = require('express/lib/response');
//TO DO: 1. install mysql2 package
const app = express();
app.set('view engine', 'ejs');       //to define our templating engine to server
app.set('views', 'views');           //to show the location of template files

db.execute('SELECT * FROM products')
    .then(result => {
        console.log("DATABASEEEEEEEE",result);
    })
    .catch(err => {
        console.log("ERRRRRRRRRRRRRRRRRR",err);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

