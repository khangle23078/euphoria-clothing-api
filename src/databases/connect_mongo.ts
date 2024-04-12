import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string, {
      dbName: 'euphoria-clothing',
    })
    console.log('Connect database success!');
  } catch (error) {
    console.log('Error', error);
  }
}

