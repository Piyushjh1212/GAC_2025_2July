import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    category: {
      type: String,
    },
    tag: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    lessons: {
      type: String,
    },
    instructor: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("Course", courseSchema);

export default Courses;
