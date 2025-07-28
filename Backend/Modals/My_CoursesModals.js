import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  // 🔁 Add your actual course fields here
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  // ... other fields
}, {
  timestamps: true,
});

// ✅ Fix OverwriteModelError
const Courses = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Courses;
