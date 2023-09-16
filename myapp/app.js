const express = require('express');


//setup express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//static files

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

//middlewares - function that access to request and response
//const middlewares = (req, res,) => {

//}

//public middlewares
//app.use(function (req, res, next) {
    //console.log(req.url);
    //console.log(req.method);

 //   next();
//});

//private middlewares
const public_middleware =  (req, res, next) => {
    console.log(req.url);
    console.log(public_middleware);
    
    next();
}

const private_middleware = (req, res, next) => {
    console.log(req.url);
    console.log(private_middleware);

    next();
}


//app.use(public_middleware);



//route
//http://localhost:5000/
//METHOD:GET, GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    //console.log('this is root page!');
   // res.send('<h1>This is the root page!</h1>');
   res.render('index.ejs', {page: 'HOME PAGE OF GOMYCODE'});
});
//http://localhost:5000/contact
app.get('/contact', (req, res) => {
   // res.send('<h1>This is a contact page</h1>');
   res.render('contact.ejs', {page: 'Contact Page'});
});

//http://localhost:5000/our-service
app.get('/services',  private_middleware,(req, res) => {
    //res.send('<h1>This is the service page!</h>');
    res.render('services.ejs', {page: 'Services Page'});
});




//listener 
const PORT = 5000;

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));