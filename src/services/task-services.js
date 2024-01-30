const Task = require("../models/task.js");
const { validateTaskText } = require("./../middlewares/validateTaskText.js");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (text) => {
  const correctText = validateTaskText(text)
  const newTask = new Task({ text: correctText });
  const savedTask = await newTask.save();

  return savedTask;
};

const deleteTask = async (id) => {
  const deletedTask  = await Task.findOneAndDelete(id);
  return deletedTask ; 
};

const deleteTasks = async () => {
  const deletedTasks  = await Task.deleteMany();
  return deletedTasks ; 
};

const editCheck = async (_id, isCheck) => {
  const editTask  = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { isCheck } },
    { new: true }
  );

  return editTask ;
};

const editText = async (_id, text) => {
  const correctText = validateTaskText(text)
  const editTask = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { text: correctText } },
    { new: true }
  );

  return editTask;
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  editCheck,
  editText,
}