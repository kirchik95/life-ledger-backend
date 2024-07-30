import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  age: number;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  createdAt: Date;
  birthday: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  middleName: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  birthday: { type: Date, default: '' },
});

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  },
});

UserSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  },
});

export default mongoose.model<UserDocument>('User', UserSchema);
