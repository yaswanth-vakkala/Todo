import express from 'express';
import {
  getAllTodo,
  CreateTodo,
  UpdateTodo,
  deleteTodo,
} from '../controllers/todo.js';

const router = express.Router();

router.get('/', getAllTodo);

router.post('/', CreateTodo);

router.put('/:id', UpdateTodo);

router.delete('/:id', deleteTodo);

export default router;
