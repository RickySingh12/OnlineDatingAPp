const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
// enviroment var for port
const port = process.env.PORT || 3000;
// setup vie engin 
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


app.get('/',(req,res) => {
    res.render('home.handlebars',{
        title: 'home'
    });

});

app.get('/about',(req,res) => {
    res.render('about.handlebars', { title: 'about'});
});

app.get('/contact', (req, res) => {
    res.render('contact.handlebars', {title:'Contact1'});

});
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});