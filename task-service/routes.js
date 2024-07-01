const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask } = require('./controllers');

router.post('/', createTask);
router.get('/', getTasks);
router.patch('/:id', updateTask);

module.exports = router;
