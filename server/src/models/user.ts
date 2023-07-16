import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: { type: String, required: true },
    password: { type: String, required: true },
  });

  const User = model('User', userSchema);

  export {User};