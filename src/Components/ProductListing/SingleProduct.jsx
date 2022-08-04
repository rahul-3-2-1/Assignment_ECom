import React from "react";
import Button from "../Button/Button";

function SingleProduct(props) {
  const { img, name, description, price, defaultPrice } = props.data;
  const { allProducts, setAllProducts, handleUpdate } = props;

  return (
    <div className="productContainer">
      <div className="aboutProduct">
        <div className="imgContainer">
          <img src={img} alt="sample" />
        </div>
        <div className="schild">
          <div className="productDetails">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="price">
            <p>
              ₹ {price} &ensp;
              <span>₹ {defaultPrice}</span>
            </p>
            <div className="btns">
              {allProducts[name] && allProducts[name] !== 0 ? (
                <Button
                  price={price}
                  count={allProducts[name]}
                  handleUpdate={handleUpdate}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  name={name}
                />
              ) : (
                <button
                  onClick={() => handleUpdate(name, "add", price)}
                  className="btn"
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
