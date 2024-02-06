import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  category: { _id: string, name: string }
  creator: { _id: string, firstName: string, lastName: string }
  price: string;
  isFree: boolean;
  imageUrl: string;
  eventURL: string;
  eventName: string;
  eventKey: string;
  eventEmail: string;
  eventFon:string;
  createdAt: Date;
  eventDescription: string;
  eventDate: string;
  startDateTime: Date;
  endDateTime: Date;
  eventAdress: string;
  eventFotoURL: string;
  eventWebsite: string;
}


const EventSchema = new Schema({ 
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  imageUrl: { type: String, required: true },
  eventURL: {
      type: String,
  },
  eventName: {
      type: String,
      required: [true, 'Name is required!'],
    },

  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  eventKey: {
      type: String,
      required: [true, 'Description is required!'],
  },
  eventEmail: {
      type: String,
      required: [true, 'Email is required!'],
  },
  eventFon: {
    type: String,
    required: [false, 'Email is required!'],
},
  createdAt: {
      type: Date,
      default: Date.now,
  },
  eventDescription: {
      type: String,
      required: [true, 'Description is required!'],
  },
  eventDate: {
      type: String,
      required: [false, 'Date is required!'],
  },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  eventAdress: {
      type: String,
      required: [false, 'Time is required!'],
  },
  eventFotoURL: {
      type: String,
      required: [false, 'Foto is not required!'],
  },
  eventWebsite: {
      type: String,
      required: [false, 'Foto is not required!'],
  },
  });

const Event = models.Event || model('Event', EventSchema);

export default Event;