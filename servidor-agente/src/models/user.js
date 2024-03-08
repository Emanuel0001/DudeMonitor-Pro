import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  email: { type: String },
  name: { type: String },
},
{ versionKey: false });

const user = mongoose.model("users", userSchema);

export { user, userSchema };
