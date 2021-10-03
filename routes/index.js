
const express=require('express');

const router=express.Router();

const FunctionCaller=require('../controllers/Functions');


router.get('/',FunctionCaller.home);

router.use('/addtask',FunctionCaller.addtask);
router.use('/deletetask',FunctionCaller.deletetask);
router.use('/tasks',FunctionCaller.tasks);

module.exports= router;