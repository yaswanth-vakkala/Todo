import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected!")
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
mongoose.set('strictQuery', false);

export default connectDB;
