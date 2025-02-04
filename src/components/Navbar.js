import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Danny Jean Logo" style={{ height: "50px" }} />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 fw-bold text-uppercase">
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/sale">Sale</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-arrival">New Arrival</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Men
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/men/jean">Jean</Link></li>
                <li><Link className="dropdown-item" to="/men/t-shirt">T-Shirt</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/men/inner-wear">Inner Wear</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex w-50" role="search">
            <input
              className="form-control me-2 w-75"
              type="search"
              placeholder="Tell us what you are looking for"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center ms-3">
            <Link to="/wishlist" className="heart-icon" style={{ fontSize: "30px", color: "#000", transition: "color 0.3s ease, transform 0.3s ease", marginRight: "15px" }}>
              <i className="fa-regular fa-heart" style={{ fontSize: "inherit", color: "inherit" }}></i>
            </Link>
            <Link to="/cart" className="shopping-bag-icon" style={{ fontSize: "30px", color: "#000", transition: "color 0.3s ease, transform 0.3s ease" }}>
              <i className="fas fa-shopping-bag" style={{ fontSize: "inherit", color: "inherit" }}></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
