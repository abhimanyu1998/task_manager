const mongoose=require('mongoose');



// This is the schema of the database which decide the structure of the database
// i)task
// ii)task type
// iii) task date
const Todo_Schema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    tasktype:{
        type:String,
        required:true
    },
    taskdate:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Todo',Todo_Schema);

module.exports=Todo;