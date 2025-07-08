import Courses from "../Modals/CourseModle";


// Add multiple courses
export const AddCourseController = async (req, res) => {
  try {
    await Courses.insertMany(req.body); // expects array of courses
    res.status(200).json({ message: "Courses added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all courses or filter by category
export const getCoursesController = async (req, res) => {
  const category = req.query.category;
  try {
    const courses = category
      ? await Courses.find({ category })
      : await Courses.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
