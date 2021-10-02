const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const { query } = require('express');




app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/results',(req,res) =>{

    let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=121048688a06fbbb9a824bf8fa797715&query='+query,(error,response,body) => {
        if(error){
            console.log(error);
        }
        let data = JSON.parse(body);
        res.render('movie',{data:data , searchQuery:query});


    })

    
   
})

app.get('/',(req,res) =>{
    res.render('search'); 
});
app.listen(3000,() =>{
    console.log('Server started at port 3000.');
});
