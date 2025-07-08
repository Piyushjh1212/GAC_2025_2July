import express from "express";
import { AddCourseController, getCoursesController } from "../Controllers/CourseControlles";


const CourseRoutes = express.Router();

// Save course data
CourseRoutes.post("/add-courses", AddCourseController)

// Get all courses or filter by category
CourseRoutes.get("/Get-Courses", getCoursesController)


export default CourseRoutes;
