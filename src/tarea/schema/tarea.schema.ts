import * as mongoose from 'mongoose';

export const TareaSchema = new mongoose.Schema({
  nombre: {
      type: String,
      required: true,
      minlength: 5
  },
  prioridad: {
      type: Number,
      required: true,
      min: 1,
      max: 5
  },
  fecha: {
      type: Date,
      required: true
  }
});