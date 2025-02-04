import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>Danny Jean</h5>
            <p>Elevate your denim style with premium quality jeans.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">New Arrivals</a></li>
              <li><a href="#" className="text-light text-decoration-none">Men's Collection</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-light mx-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light mx-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light mx-2"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} Danny Jean. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
