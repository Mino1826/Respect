import mongoose, { mongo } from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', ()=>{
    console.log("DB connected");
  })

  await mongoose.connect(`${process.env.MONGODB_URI}/respect`)
};

export default connectDB;

