const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs'); //al utilizar hbs se debe crear una carpeta con nombre views
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use( express.static('public') );

app.get( '/' , (req, res ) => {

    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Rodolfo'
    }) // el archivo home.hbs

})

app.get( '/generic' , (req, res ) => {

    res.render('generic', {
        titulo: 'Curso de Node',
        nombre: 'Rodolfo'
    }) // el archivo generic.hbs

})

app.get( '/elements' , (req, res ) => {

    res.render('elements', {
        titulo: 'Curso de Node',
        nombre: 'Rodolfo'
    }) // el archivo elements.hbs

})



// app.get( '/generic' , (req, res ) => {
    
//     res.sendFile( __dirname + '/public/generic.html')
//     // res.end(); //al parecer con send file no hay que hacer el res.end()

// })

// app.get( '/elements' , (req, res ) => {
    
//     res.sendFile( __dirname + '/public/elements.html')
//     // res.end(); //al parecer con send file no hay que hacer el res.end()

// })


app.get('*' , (req, res) => {

    res.render('404', {
        titulo: 'Curso de Node',
        nombre: 'Rodolfo',
    })

})

app.listen( port, () => {
    console.log(`App corriendo en http://localhost:${ port }`);
});

