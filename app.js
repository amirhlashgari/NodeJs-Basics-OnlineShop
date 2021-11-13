const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopData = require('./routes/shop');

const app = express();
app.set('view engine', 'ejs');       //to define our templating engine to server
app.set('views', 'views');           //to show the location of template files

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopData.router);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: "Page Not Found", path: "/404" });
});

app.listen(3000);