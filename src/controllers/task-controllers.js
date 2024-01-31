const { 
  getTasks,
  createTask, 
  deleteTask, 
  deleteTasks, 
  editCheck,
  editText 
} = require("./../services/task-services.js");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send("Failed to get tasks")
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const tasks = await createTask(text);

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send("Failed to create tasks")
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTask(id);

    res.status(200).send(deletedTask);
  } catch (error) {
    res.status(400).send('Failed to delete task.');
  }
};

const deleteAllTask = async (req, res) => {
  try {
    const deletedTasks = await deleteTasks();

    res.status(200).send(deletedTasks);
  } catch (error) {
    res.status(400).send('Failed to delete tasks.');
  }
};

const editCheckBox = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCheck } = req.body;
    const editedTask = await editCheck(id, isCheck);

    res.status(200).send(editedTask);
  } catch (error) {
    res.status(400).send('Failed to update task check status.');
  }
};

const editTextTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const editedTask = await editText(id, text);

    res.status(200).send(editedTask);
  } catch (error) {
    res.status(400).send('Failed to edit task.');
  }
};

module.exports = {
  getAllTasks,
  createOneTask,
  deleteOneTask,
  deleteAllTask,
  editCheckBox,
  editTextTask
};