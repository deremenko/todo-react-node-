const express = require("express");
const router = express.Router();
const { validationText } = require("../middlewares/task-validation.js");
const { 
  getAllTasks, 
  createOneTask, 
  deleteOneTask, 
  deleteAllTask, 
  editCheckBox, 
  editTextTask
} = require("../controllers/task-controllers.js");

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.delete('/tasks/:id', deleteOneTask);
router.delete('/tasks', deleteAllTask);
router.patch('/tasks/:id/checkbox', editCheckBox);
router.patch('/tasks/:id', validationText, editTextTask);

module.exports = router;