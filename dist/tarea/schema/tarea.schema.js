"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaSchema = void 0;
const mongoose = require("mongoose");
exports.TareaSchema = new mongoose.Schema({
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
//# sourceMappingURL=tarea.schema.js.map