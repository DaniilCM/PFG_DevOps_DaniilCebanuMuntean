const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const { handleError } = require('./utils');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

// Serve the React application
app.use(express.static(path.join(__dirname, '../web-app/build')));

// Use the task-related routes
app.use('/api/tasks', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  handleError(err, res);
});

const PORT = process.env.TASK_SERVICE_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Task management microservice running on port ${PORT}`);
});
