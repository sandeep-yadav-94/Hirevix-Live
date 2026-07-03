import mongoose from "mongoose";


const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/liveclassdb';
        const conn = await mongoose.connect(mongoUri);
        console.log('Mongodb connection established', conn.connection.host);
    } catch (error) {
        console.error('error connecting to database', error.message);
        process.exit(1);
    }
};

export default connectDb;