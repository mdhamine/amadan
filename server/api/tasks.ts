import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'your_db_name';

export default defineEventHandler(async (event) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('tasks');

  if (event.req.method === 'GET') {
    return await collection.findOne({ type: 'tasks' }) || { days: Array(30).fill(Array(15).fill(false)) };
  } else if (event.req.method === 'POST') {
    const body = await readBody(event);
    await collection.updateOne({ type: 'tasks' }, { $set: { days: body.days } }, { upsert: true });
    return { success: true };
  }
});
