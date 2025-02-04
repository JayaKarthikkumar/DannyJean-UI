import React from "react";
import Footer from "../components/Footer"; 

// Product Data (You can import this from another file if necessary)
const products = [
  {
    name: "Holborne Regular Fit Mid Waist Straight Leg Jeans",
    oldPrice: 3799,
    newPrice: 1899,
    discount: 50,
    image: "/JN1.webp",
  },
  {
    name: "Holborne Regular Fit Mid Waist Straight Leg Jeans",
    oldPrice: 3599,
    newPrice: 1799,
    discount: 50,
    image: "/JN2.webp",
  },
  {
    name: "Holborne Black Mid Rise Straight Fit Jeans",
    oldPrice: 3599,
    newPrice: 2519,
    discount: 30,
    image: "/JN3.webp",
  },
  {
    name: "Holborne Jet Black Mid Rise Straight Fit Jeans",
    oldPrice: 2799,
    newPrice: 1959,
    discount: 30,
    image: "/JN1.webp",
  },
  {
    name: "Holborne Green Tinted Mid Rise Straight Fit Jeans",
    oldPrice: 3299,
    newPrice: 1649,
    discount: 50,
    image: "/JN3.webp",
  },
  {
    name: "Holborne Dark Blue Mid Rise Straight Fit Jeans",
    oldPrice: 2999,
    newPrice: 2099,
    discount: 30,
    image: "/JN1.webp",
  },
  {
    name: "Holborne Grey Mid Rise Straight Fit Jeans",
    oldPrice: 2999,
    newPrice: 2099,
    discount: 30,
    image: "/JN2.webp",
  },
  {
    name: "Track Straight Fit Jeans",
    oldPrice: 6999,
    newPrice: 3499,
    discount: 50,
    image: "/JN3.webp",
  },
];

const Men = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Men's Collection</h1>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <span className="fw-bold text-danger me-2">₹{product.newPrice}</span>
                  <span className="text-decoration-line-through text-muted">₹{product.oldPrice}</span>
                </p>
                <span className="badge bg-danger rounded-pill p-2">{product.discount}% OFF</span>
              </div>
              <div className="card-footer d-flex justify-content">
                <button className="btn btn-outline-primary w-50"> Cart</button>
                <button className="btn btn-danger w-50 ms-3">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
         <Footer />
      </div>
    </div>
  );
};

export default Men;

