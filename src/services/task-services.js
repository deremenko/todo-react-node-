const Task = require("../models/task.js");

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (text) => {
  const newTask = new Task({ text: text });
  const savedTask = await newTask.save();

  return savedTask;
};

const deleteTask = async (id) => {
  const deletedTask = await Task.findOneAndDelete(id);
  return deletedTask; 
};

const deleteTasks = async () => {
  const deleteTasks = await Task.deleteMany();
  return deleteTasks; 
};

const editCheck = async (_id, isCheck) => {
  const editCheck = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { isCheck } },
    { new: true }
  );

  return editCheck;
};

const editText = async (_id, text) => {
  const editTask = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { text } },
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