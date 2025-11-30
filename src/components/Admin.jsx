import { useState } from "react";
import "./admin.css";

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>User Login</h2>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Area</label>
          <input
            type="text"
            name="area"
            placeholder="Enter Your Area"
            required
            value={formData.area}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  );
}
