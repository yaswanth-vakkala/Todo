import Todo from '../models/Todo.js';

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(404);
    res.json({ message: 'Todo not found', error: err.message });
  }
};

const CreateTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json({ message: 'Todo added successfully', savedTodo });
  } catch (err) {
    res.status(400);
    res.json({ message: 'Failed to add todo', error: err.message });
  }
};

const UpdateTodo = async (req, res) => {
  const todoId = req.params.id;
  const body = req.body;
  try {
    await Todo.findByIdAndUpdate(todoId, body);
    res.status(200).json({ message: 'updated successfully' });
  } catch (err) {
    res.status(400);
    res.json({ message: "Todo can't be updated", error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  try {
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(404);
    res.json({ message: "Todo's not found", error: err.message });
  }
};

export { getAllTodo, CreateTodo, UpdateTodo, deleteTodo };
