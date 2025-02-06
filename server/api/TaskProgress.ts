import mongoose from 'mongoose';

const TaskProgressSchema = new mongoose.Schema({
  day: { type: Number, required: true, unique: true }, // Stores 1 to 30
  tasks: {
    type: Map,
    of: Boolean, // Each task is either true (completed) or false
    default: {},
  },
});

export default mongoose.models.TaskProgress || mongoose.model('TaskProgress', TaskProgressSchema);
