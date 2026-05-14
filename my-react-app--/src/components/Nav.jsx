import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav className="navbar">
      <h1 className="logo">Opus Cutlery</h1>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/menu">Menu</Link>
      </div>
    </nav>
    </>
  );
}