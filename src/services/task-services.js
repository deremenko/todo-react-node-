const Task = require("../models/task.js");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (newText) => {
  const newTask = new Task({ text: newText });
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

const editText = async (_id, newText) => {
  const editTask = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { text: newText } },
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