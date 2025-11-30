import { useState } from "react";
import "./requirements.css";

const homes = [
  { name: "2BHK Compact House", budgetMin: 2500000, budgetMax: 3000000, image: "/images/image12bhk.jpeg" },
  { name: "3BHK Family Home", budgetMin: 3500000, budgetMax: 4500000, image: "/images/image23bhk.jpeg" },
  { name: "Modern Duplex", budgetMin: 5000000, budgetMax: 6000000, image: "/images/image3dp.jpeg" },
  { name: "Affordable Single-Floor House", budgetMin: 1500000, budgetMax: 2000000, image: "/images/image4sf.jpeg" },
  { name:"Small Efficient 3BHK House",budgetMin:2500000,budgetMax:3500000,image:"/images/image13bhk.jpeg"},
  { name:"Simple 1000sqft House",budgetMin:1800000,budgetMax:2400000,image:"/images/image1000sqft.jpeg"},
  { name:"Normal 1500sqft House",budgetMin:2000000, budgetMax:3000000,image:"/images/image1500sqft.jpeg"}
];

export default function Requirements() {
  const [form, setForm] = useState({
    propertySize: "",
    location: "",
    mobile: "",
    budget: "",
    other: "",
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budget = parseInt(form.budget);

    // Filter homes within ±500000 of budget
    const filtered = homes.filter(
      h => budget >= (h.budgetMin - 500000) && budget <= (h.budgetMax + 500000)
    );
    setResults(filtered);
  };

  return (
    <div className="requirements-container">
      <div className="requirements-card">
        <h2>Enter Your Property Requirements</h2>

        <form onSubmit={handleSubmit}>
          <label>Property Size</label>
          <input
            type="text"
            name="propertySize"
            placeholder="e.g. 1200 sqft"
            value={form.propertySize}
            onChange={handleChange}
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter your area/city"
            value={form.location}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <label>Budget (in ₹)</label>
          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            value={form.budget}
            onChange={handleChange}
            required
          />

          <label>Other Requirements</label>
          <textarea
            name="other"
            placeholder="Any additional requirements"
            value={form.other}
            onChange={handleChange}
          />

          <button type="submit">Find Homes</button>
        </form>

        {results.length > 0 && (
          <div className="results">
            <h3>Homes Near Your Budget:</h3>
            <div className="gallery">
              {results.map((h, i) => (
                <div className="card" key={i}>
                  <img src={h.image} alt={h.name} />
                  <h4>{h.name}</h4>
                  <p>Budget Range: ₹{h.budgetMin.toLocaleString()} – ₹{h.budgetMax.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {results.length === 0 && form.budget && <p>No homes found near your budget.</p>}
      </div>
    </div>
  );
}
