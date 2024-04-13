import { Schema, model } from "mongoose";

const slideSchema = new Schema({
  images: {
    url: {
      type: String,
      required: true
    },
    public_id: {
      type: String,
      required: true
    }
  },
  path: {
    type: String,
    required: true
  },
  is_show: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'slides',
  timestamps: true
})

export const Slide = model('slides', slideSchema)