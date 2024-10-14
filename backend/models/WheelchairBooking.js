// wheelchairBooking.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const wheelchairBookingSchema = new Schema({
  station: {
    type: Schema.Types.ObjectId,
    ref: 'Station',
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  wheelchairType: {
    type: String,
    enum: ['manual', 'electric', 'standard'],
    default: 'manual',
  },
}, {
  timestamps: true,
});

const WheelchairBooking = mongoose.models.WheelchairBooking || mongoose.model('WheelchairBooking', wheelchairBookingSchema);
export default WheelchairBooking;
