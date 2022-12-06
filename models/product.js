const Joi=require('joi');
const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    categories: { type: Array },
    weight: { type: Number },
    title: {
      type: {
        ua: { type: String },
        ru: {type: String}
      },
    },
    calories: { type: Number },
    groupBloodNotAllowed: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true },
);


// const productSchema = new Schema({
//   _id: {
//     type: Object,
//   },
//   categories: {
//     type: Array,
//   },
//   weight: {
//     type: Number,
//     default: 100,
//   },
//   title: {
//     type: Object,
//   },
//   calories: {
//     type: Number,
//   },
//   groupBloodNotAllowed: {
//     1: Boolean,
//     2: Boolean,
//     3: Boolean,
//     4: Boolean,
//   },
// });

const inputData = Joi.object({
  height: Joi.number().required(),
  age: Joi.number().required(),
  currentWeight: Joi.number().required(),
  desiredWeight: Joi.number().required(),
  bloodType: Joi.number().required(),
});

const Product = model("Product", productSchema);

module.exports = { Product, inputData };