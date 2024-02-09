import mongoose from "mongoose";

async function connectDatabase () {
    mongoose.connect(process.env.DB_STRING_CONECTA_BANCO);
    return mongoose.connection;
}

export default connectDatabase;
