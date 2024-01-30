const express = require("express");
const router = express.Router();
const { 
  getAllTasks, 
  createOneTask, 
  deleteOneTask, 
  deleteAllTask, 
  editCheckBox, 
  editTextTask
} = require("../controllers/task-controllers.js");

router.get('/tasks', getAllTasks);
router.post('/tasks', createOneTask);
router.delete('/tasks/:id', deleteOneTask);
router.delete('/tasks', deleteAllTask);
router.patch('/tasks/:id/checkbox', editCheckBox);
router.patch('/tasks/:id', editTextTask);

module.exports = router;