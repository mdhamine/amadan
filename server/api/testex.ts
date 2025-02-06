import { defineEventHandler, readBody } from 'h3';
import mongoose from 'mongoose';
import testmodel from './test';

export default defineEventHandler(async (event) => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (err) {
    console.error('Connection error:', err);
    return { success: false, message: 'Database connection failed' };
  }

  const request = await readBody(event);
  if (!request || !request.title || !request.desc) {
    return { success: false, message: 'Invalid request body' };
  }

  console.log("Request is:", request);

  try {
    const updatedCard = await testmodel.findOneAndUpdate(
      { title: request.title },
      { desc: request.desc !== undefined ? request.desc : "" },
      { new: true }
    );
    

    console.log("Updated card is:", updatedCard);
    
    if (!updatedCard) {
      return { success: false, message: 'Card not found' };
    }

    return { success: true, updatedCard };
  } catch (error) {
    console.error('Error updating card:', error);
    return { success: false, message: 'Failed to update card' };
  }
});
