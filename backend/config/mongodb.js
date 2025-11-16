import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is missing');

  mongoose.set('strictQuery', true);
  mongoose.connection.on('connected', () => console.log('✅ MongoDB connected'));
  mongoose.connection.on('error', (e) => console.error('Mongo error:', e));

  await mongoose.connect(`${uri}/respect`); // همون DB فعلی تو
};

export default connectDB;



// import mongoose, { mongo } from 'mongoose';

// const connectDB = async () => {
//   mongoose.connection.on('connected', ()=>{
//     console.log("DB connected");
//   })

//   await mongoose.connect(`${process.env.MONGODB_URI}/respect`)
// };

// export default connectDB;

