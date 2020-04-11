import React, { useContext } from "react";
import { getCurrencyFormat } from "../../lib/utils";

// components
import CategoryBadges from "./CategoryBadges";
import { OrderContext } from "../contexts/OrderContext";
import { CartAction } from "../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useContext(OrderContext);
  return (
    <div className="d-flex">
      <div className="card m-3 bg-dark shadow-sm">
        <div className="overlay">
          <img
            className="card-img-top img-fluid"
            alt={product.name}
            src={product.imageUrl}
          />
          <div className="card-description">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="card-footer px-4 px-md-3">
          <div className="d-flex mb-3">
            <CategoryBadges product={product} />
          </div>
          <div className="d-flex flex-md-wrap align-items-center">
            <div className="h5 font-weight-bold mb-0 mr-1">
              {getCurrencyFormat(product.price)}
            </div>
            <button
              className="btn btn-primary ml-auto"
              onClick={() => dispatch(CartAction.ADD, { product, quantity: 1 })}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;