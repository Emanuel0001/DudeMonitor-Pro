import mongoose from "mongoose";
import { userSchema } from "./user.js";

const antenaSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    ip: { type: String },
    status: { type: String },
    download: { type: String },
    user: userSchema
  },
  { versionKey: false }
);

const antena = mongoose.model("antenas", antenaSchema);

export default antena;
