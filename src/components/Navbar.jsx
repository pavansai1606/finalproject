import { Link } from "react-router-dom";
import "./navbar.css";


export default function Navbar() {
return (
<nav className="navbar">
<h2>Vite Project</h2>
<div>
<Link to="/">Home</Link>
<Link to="/Feedback">Feedback</Link>
<Link to="/requirements">Requirements</Link>
<Link to="/admin">Login/Signup</Link>
</div>
</nav>
);
}