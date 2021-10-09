const express=require('express');
const port= process.env.PORT || 8000 ;

const app=express();


app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('assets'));

app.use('/',require('./routes/index'));

const db=require('./config/Database');
const Todo=require('./models/database_schema');

app.use(express.urlencoded());



app.listen(port,function(err){
    if(err)
    {
        console.log("SERVER FOUND AN ERROR");
    }
    console.log("SERVER RUN SUCCESSFULLy");
});