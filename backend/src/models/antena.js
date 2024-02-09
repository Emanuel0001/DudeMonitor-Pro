import mongoose from "mongoose";

const antenaSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    ip: { type: String },
    status: { type: String },
    download: { type: String },
  },
  { versionKey: false }
);

const antena = mongoose.model("antenas", antenaSchema);

export default antena;
