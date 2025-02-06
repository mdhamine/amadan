import { defineEventHandler, getQuery, readBody } from 'h3';
import TaskProgress from '/TaskProgress';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI || 'your_mongodb_connection_string';
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI);
}

// Fetch all task progress
export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === 'GET') {
    return await TaskProgress.find({}).sort({ day: 1 });
  } else if (method === 'POST') {
    const body = await readBody(event);
    const { day, tasks } = body;

    let existingEntry = await TaskProgress.findOne({ day });
    if (existingEntry) {
      existingEntry.tasks = tasks;
      await existingEntry.save();
    } else {
      existingEntry = new TaskProgress({ day, tasks });
      await existingEntry.save();
    }

    return { success: true, data: existingEntry };
  }
});
