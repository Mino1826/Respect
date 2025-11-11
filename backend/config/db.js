import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is not set');
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      dbName: process.env.MONGO_DB || undefined,
    });
    // eslint-disable-next-line no-console
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Mongo connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;


