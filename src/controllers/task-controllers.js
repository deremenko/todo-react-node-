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
  } catch (e) {
    res.status(400).send("Failed to get tasks")
  }
};

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const tasks = await createTask(text);

    res.status(200).send(tasks);
  } catch (e) {
    res.status(400).send("Failed to create tasks")
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTask(id);

    if (deletedTask) {
      res.status(200).send(deletedTask);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (e) {
    console.error('Failed to delete task:', e);
    res.status(400).send('Internal Server Error');
  }
};

const deleteAllTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTasks = await deleteTasks(id);

    res.status(200).send(deletedTasks);
  } catch (e) {
    console.error('Failed to delete tasks:', e);
    res.status(400).send('Internal Server Error');
  }
};

const editCheckTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCheck } = req.body;
    const editedTaskCheck = await editCheck(id, isCheck);

    res.status(200).send(editedTaskCheck);
  } catch (e) {
    console.error('Failed to checks tasks:', e);
    res.status(400).send('Internal Server Error');
  }
};

const editTextTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const editedTask = await editText(id, text);

    res.status(200).send(editedTask);
  } catch (e) {
    console.error('Failed to edit tasks:', e);
    res.status(400).send('Internal Server Error');
  }
};

module.exports = {
  getAllTasks,
  createOneTask,
  deleteOneTask,
  deleteAllTask,
  editCheckTask,
  editTextTask
};