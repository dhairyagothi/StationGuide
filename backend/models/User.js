import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: null,  
  },

  comment: {
    type: String,
    trim: true,
    default: '', 
  },
  otp: {
    type: String, // The OTP code
    required: false,
  },
  otpExpiry: {
    type: Date,   // The OTP expiry timestamp
    required: false,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;