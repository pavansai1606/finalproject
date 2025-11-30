import { useState } from "react";
import "./feedback.css";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Submitted Successfully!");
    console.log("Feedback:", formData);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <h2>Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Comment</label>
          <textarea
            name="comment"
            placeholder="Write your feedback here..."
            required
            value={formData.comment}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
