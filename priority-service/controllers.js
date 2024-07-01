const { generateId } = require('./utils');

let tasks = [];

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, priority } = req.body;
    const task = { id: generateId(), title, description, priority };
    tasks.push(task);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, priority } = req.body;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    tasks[taskIndex] = { ...tasks[taskIndex], title, description, priority };
    res.json(tasks[taskIndex]);
  } catch (err) {
    next(err);
  }
};
