import React, { useEffect, useState } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "../Styles/Course.css";


const CourseSection = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [Courses, SetCourses] = useState([]);

  const categories = ["All", "Data Science", "Development", "Business", "Life Style"];

  const filteredCourses =
    selectedCategory === "All"
      ? Courses
      : Courses.filter((course) => course.category === selectedCategory);
    

  const HandleEnrollCourse = (course) => {
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    window.location.href = "/Course-Checkout"
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_API_URL + "/api/v1/Get-Courses");
        const data = await response.json();
        SetCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="course-section">
      <h2>
        Discover <br />
        World's Best <span>Courses</span>
      </h2>

      <div className="course-categories">
        {categories.map((cat) => (
          <span
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "All" ? `[${Courses.length}] View All` : cat}
          </span>
        ))}
      </div>

      <div className="course-card-container">
        {filteredCourses.map((course) => (
          <div key={course._id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />

            <div className="course-info">
              <span className="course-category">{course.category}</span>
              <div className="course-rating">
                <FaStar color="#ffc107" size={14} />
                <span>
                  {course.rating} ({course.reviews})
                </span>
              </div>
              <h3 className="course-title">{course.subtitle}</h3>
              <div className="course-price">
                {course.price !== "FREE" ? (
                  <>
                    <span>{course.price}</span>
                    Hours
                  </>
                ) : (
                  <span style={{ color: "#007bff", fontWeight: "bold" }}>FREE</span>
                )}
              </div>
            </div>

            <div className="course-footer">
              <span className="instructor">{course.instructor}</span>
              <span className="view-details" onClick={() => HandleEnrollCourse(course)}>
                Enroll Now <FaArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
