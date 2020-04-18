const path = require('path');
const express = require('express');
const hbs = require('hbs');
const localCovidFunction = require('./api_functions/local_covidsituation');
const globalCovidFunction = require('./api_functions/global_covidsituation');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars and view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{
    res.render('index');
});

app.get('/local', (req,res)=>{
    res.render('local');
});

app.get('/global', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    globalCovidFunction(req.query.address,(error,data)=>{
        if(error){
            return res.send('Provide a valid location')
        }
        res.send({data})
    })
});

app.get('/help', (req,res)=>{
    res.render('help');
});


// *******ERROR HANDLERS******** //
app.get('/local/*', (req,res)=>{
    res.render('404',{
        errorMassage: 'This article not found.'
    });
});

app.get('/global/*', (req,res)=>{
    res.render('404',{
        errorMassage: 'This article not found.'
    });
});

app.get('/help/*', (req,res)=>{
    res.render('404',{
        errorMassage: 'This article not found.'
    });
});

app.get('*', (req,res)=>{
    res.render('404',{
        errorMassage: 'This page not found.'
    });
});

// ******Listen to the server****** //
app.listen(3000,()=>{
    console.log('Connected to the port 3000')
})