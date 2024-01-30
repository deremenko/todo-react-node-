const express = require("express");
const router = express.Router();
const { 
  getAllTasks, 
  createOneTask, 
  deleteOneTask, 
  deleteAllTask, 
  editCheckTask, 
  editTextTask
} = require("../controllers/task-controllers.js");

router.get('/tasks', getAllTasks);
router.post('/tasks', createOneTask);
router.delete('/tasks/:id', deleteOneTask);
router.delete('/tasks', deleteAllTask);
router.patch('/tasks/:id/checkbox', editCheckTask);
router.patch('/tasks/:id', editTextTask);

module.exports = router;