import PropertyList from "./PropertyList";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Smart Enhancements</h1>
      <p>
        This platform provides ideas and tools to increase the value of Indian
        middle-class residential properties.
      </p>

      <div className="gallery">
        <div className="card">
          <img src="/images/image3dp.jpeg" alt="House" />
          <h3>2BHK House with 3D Paint</h3>
          <p>Expected Budget: ₹25L–30L</p>
        </div>

        <div className="card">
          <img src="/images/image4sf.jpeg" alt="home" />
          <h3>3BHK House with Garden</h3>
          <p>Expected Budget: ₹35L–45L</p>
        </div>

        <div className="card">
          <img src="/images/image12bhk.jpeg" alt="villa" />
          <h3>4BHK Villa</h3>
          <p>Expected Budget: ₹50L–60L</p>
        </div>

        <div className="card">
          <img src="/images/image13bhk.jpeg" alt="apartment" />
          <h3>1BHK Apartment</h3>
          <p>Expected Budget: ₹15L–20L</p>
        </div>
        <div className="card">
          <img src="/images/image23bhk.jpeg" alt="apartment" />
          <h3>small efficient 3BHK</h3>
          <p>Expected Budget: ₹25L–35L</p>
        </div>
        <div className="card">
          <img src="/images/image1000sqft.jpeg" alt="apartment" />
          <h3>simple modern house</h3>
          <p>Expected Budget: ₹16L–25L</p>
        </div>
        <div className="card">
          <img src="/images/image1500sqft.jpeg" alt="apartment" />
          <h3>middle class living house</h3>
          <p>Expected Budget: ₹13L–19L</p>
        </div>
      </div>

      {/* Auto-generated List */}
      <PropertyList />
    </div>
  );
}
