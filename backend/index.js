import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.js';
import cors from 'cors';

const app = express();
connectDB();
app.use(cors({ origin: true, credentials: true }));
dotenv.config();

//middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server running');
});

app.use('/api/todo', todoRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
