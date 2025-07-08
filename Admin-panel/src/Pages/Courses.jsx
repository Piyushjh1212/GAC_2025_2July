import React, { useState } from "react";
import "../styles/CourseForm.css";

export default function CourseForm() {
  const [course, setCourse] = useState({
    title: "",
    subtitle: "",
    category: "",
    tag: "",
    price: "",
    oldPrice: "",
    rating: 0,
    reviews: 0,
    lessons: "",
    instructor: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const tagOptions = ["Intermediate", "Advance", "Free"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/v1/add-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("Course submitted successfully!");
        setCourse({
          title: "",
          subtitle: "",
          category: "",
          tag: "",
          price: "",
          oldPrice: "",
          rating: 0,
          reviews: 0,
          lessons: "",
          instructor: "",
          image: "",
        });
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="course-container">
      <h2>Add New Course</h2>

      <form className="course-form" onSubmit={handleSubmit}>
        {[
          "title",
          "subtitle",
          "category",
          "tag",
          "price",
          "oldPrice",
          "rating",
          "reviews",
          "lessons",
          "instructor",
          "image",
        ].map((field) => (
          <div key={field} className="form-group">
            <label>{field}</label>
            {field === "tag" ? (
              <select
                name="tag"
                value={course.tag}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Easy">Easy</option>
                {tagOptions.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field === "rating" || field === "reviews" ? "number" : "text"}
                name={field}
                value={course[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required={["title", "price"].includes(field)}
                className="form-input"
              />
            )}
          </div>
        ))}

        {error && <div className="error-text">{error}</div>}
        {success && <div className="success-text">{success}</div>}

        <button type="submit" className="submit-btn">
          Submit Course
        </button>
      </form>
    </div>
  );
}
