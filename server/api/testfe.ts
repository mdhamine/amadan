import { defineEventHandler } from 'h3';
import mongoose from 'mongoose';
import testmodel from './test';

export default defineEventHandler(async () => {

  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (err) {
    console.error('connection error:', err);
    return { success: false, message: 'Database connection failed' };
  }

 
  try {
    const cards = await testmodel.find();
    return { success: true, data: cards };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to fetch cards' };
  }
});
