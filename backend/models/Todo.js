import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
  },
  description: {
    type: 'String',
  },
});

export default mongoose.model('Todo', TodoSchema);
