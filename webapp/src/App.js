import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #007bff;
  font-size: 3rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 3rem;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
`;

const TaskDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
`;

const PriorityLabel = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;

  ${({ priority }) =>
    priority === 'Low'
      ? 'background-color: #d1e7dd; color: #0f5132;'
      : priority === 'Medium'
      ? 'background-color: #fff3cd; color: #664d03;'
      : priority === 'High'
      ? 'background-color: #f8d7da; color: #842029;'
      : 'display: none;'}
`;

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const Select = styled.select`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish thesis', description: 'Get approval from Jessica to upload the project', priority: 'High' },
    { id: 2, title: 'Implement a REST API', description: 'Create an API with Node.js and Express', priority: 'Medium' },
    { id: 3, title: 'Learn React', description: 'Complete the official tutorial', priority: 'Low' },
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: '',
  });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    const task = { id: tasks.length + 1, ...newTask };
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', priority: '' });
  };

  return (
    <Container>
      <Header>
        <Title>Programming Tasks</Title>
        <Button onClick={handleAddTask}>Add Task</Button>
      </Header>

      <TaskForm>
        <Input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <TextArea
          name="description"
          placeholder="Task Description"
          rows={4}
          value={newTask.description}
          onChange={handleInputChange}
        ></TextArea>
        <Select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
      </TaskForm>

      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <div>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskDescription>{task.description}</TaskDescription>
            </div>
            <PriorityLabel priority={task.priority}>{task.priority || 'No Priority'}</PriorityLabel>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default App;
