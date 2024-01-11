import mongoose from "mongoose";
import { randomUUID } from "crypto";
<<<<<<< HEAD
=======

>>>>>>> 8177dd45bae56c956ec7e4abe43d049f7dcf5c09
const chatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
<<<<<<< HEAD
=======

>>>>>>> 8177dd45bae56c956ec7e4abe43d049f7dcf5c09
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});

<<<<<<< HEAD
export default mongoose.model("User", userSchema);
=======
export default mongoose.model("User", userSchema);
>>>>>>> 8177dd45bae56c956ec7e4abe43d049f7dcf5c09
