const mongoose=require('mongoose');


// mongoose.connect('mongodb://localhost/mydatabase');

mongoose.connect('mongodb+srv://abhiman:mypassword@cluster0.8s4cf.mongodb.net/toDoTaskManager?retryWrites=true&w=majority')


const db=mongoose.connection;


db.on('error',console.error.bind(console,"ERROR FOUND IN DATABASE"));


db.once('open',function(){
    console.log("DATABASE SUCCESSFULLY CONNECTED");
});