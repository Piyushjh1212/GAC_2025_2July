import React, { useEffect, useState } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "../Styles/Course.css";

// const courses = [
//   {
//     id: 1,
//     tag: "Best Seller",
//     title: "Extream HTML and CSS ",
//     subtitle: "HTML and CSS",
//     category: "Development",
//     price: "47.00",
//     oldPrice: "$75.5",
//     rating: 4.9,
//     reviews: 25,
//     lessons: "12 Lessons",
//     instructor: "Liza Daniel",
//     image: "https://image.shutterstock.com/image-photo/happy-relaxed-young-woman-sitting-260nw-2228645295.jpg",
//   },
//   {
//     id: 2,
//     tag: "Best Seller",
//     title: "Javascript",
//     subtitle: "Master Javascript",
//     category: "Development",
//     price: "49.00",
//     oldPrice: "$71.5",
//     rating: 4.9,
//     reviews: 28,
//     lessons: "11 Lessons",
//     instructor: "Mark Hanry",
//     image: "https://image.shutterstock.com/image-photo/happy-relaxed-young-woman-sitting-260nw-2228645295.jpg",
//   },
//   {
//     id: 3,
//     tag: "Best Seller",
//     title: "Professional Email Writing",
//     subtitle: "Write Better Emails: Tactics for Smarter Communication",
//     category: "Business",
//     price: "FREE",
//     oldPrice: "",
//     rating: 4.8,
//     reviews: 34,
//     lessons: "13 Lessons",
//     instructor: "Junior Lucy",
//     image: "https://gratisography.com/wp-content/uploads/2025/03/gratisography-cruising-cat-800x525.jpg",
//   },
// ];

const CourseSection = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [Courses, SetCourses] = useState([]);

  const categories = ["All", "Data Science", "Development", "Business", "Life Style"];

  const filteredCourses =
    selectedCategory === "All"
      ? Courses
      : Courses.filter((course) => course.category === selectedCategory);
    

  const HandleEnrollCourse = () => {
    window.location.href = "/Course-Checkout"
  }

  useEffect(()=> {
    const fetchCourses = async () =>{
      try {
        const response = await fetch("");
        const data = await response.json();
        SetCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

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
          <div key={course.id} className="course-card">
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
              <span className="view-details" onClick={HandleEnrollCourse}>
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
