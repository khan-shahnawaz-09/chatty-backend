import mongoose from "mongoose";
const authSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

export const authModel = mongoose.model("User", authSchema);
