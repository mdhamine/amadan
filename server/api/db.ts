import { defineEventHandler, readBody } from 'h3'
import mongoose from "mongoose";
import OrderModel from './schemaorder';

export default defineEventHandler(async (event) => {
  

try {
    await mongoose.connect(process.env.MONGO_URL as string);
    } catch (err) {
    console.error('connection error:', err);
    }

    const request = await readBody(event);

  

    if (!request.name || !request.phone || !request.state || !request.product) {
        return { success: false, message: "All fields are required." };
      }
    
      try {
        const check = await OrderModel.find({ phone: request.phone });
        console.log("this is", check);
        if (check.length > 0) { 
          const add = await OrderModel.findOneAndUpdate({ phone: request.phone }, { $push: { product: request.product } },{ new: true });
          console.log('Updated Order:', add);
          return {success: true};
        } else {
          const data = new OrderModel({
            name: request.name,
            phone: request.phone,
            state: request.state,
            product: request.product,
            total: request.total,
            image: request.image,
          });
          
          console.log("pic is",data.image);
          await data.save();
        
          return { success: true, data: { order: data } };
        }
      } catch (error) {
        console.error(error);
      }
      
    
      
  }
  
);
