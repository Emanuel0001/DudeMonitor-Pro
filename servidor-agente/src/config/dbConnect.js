import mongoose from "mongoose";

async function connectDatabase () {
    const url = process.env.DB_STRING_CONECTA_BANCO
    mongoose.connect(url);
    return mongoose.connection;
}

export default connectDatabase;
