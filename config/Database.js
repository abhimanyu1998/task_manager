const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/mydatabase');

const db=mongoose.connection;


db.on('error',console.error.bind(console,"ERROR FOUND IN DATABASE"));


db.once('open',function(){
    console.log("DATABASE SUCCESSFULLY CONNECTED");
});