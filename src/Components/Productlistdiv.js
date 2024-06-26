import "../Stylesheets/ProductList.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Productlistdiv({ product }) {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div key={product.Id} className="product-card">
      <Link to={`/productdetails?id=${product.Id}`} className="listlink">
        <img src={product.imgurl1} alt={product.name} className="product-imageing" />
      </Link>
      <div className="product-details">
        <Link to={`/productdetails?id=${product.Id}` } className="listlink" >
          <div className="product-namelist">{product.name}</div>
        </Link>
        <Link to={`/productdetails?id=${product.Id}`} className="listlink">
          <div className="product-packaging">{product.Packaging}</div>
        </Link>
        <Link to={`/productdetails?id=${product.Id}`} className="listlink">
          <div className="product-mrp">&#8377; {product.MRP}</div>
        </Link>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

Productlistdiv.propTypes = {
  product: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgurl1: PropTypes.string.isRequired,
    Packaging: PropTypes.string,
    MRP: PropTypes.number.isRequired,
  }).isRequired,
};

Productlistdiv.defaultProps = {
  product: {
    Id: 0,
    name: "",
    imgurl1: "",
    Packaging: "",
    MRP: 0,
  },
};

export default Productlistdiv;
