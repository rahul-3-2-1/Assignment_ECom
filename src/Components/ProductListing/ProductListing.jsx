import React, { useState } from "react";
import { Products } from "../SampleData/data";
import SingleProduct from "./SingleProduct";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Login from "../Login/Login";
import "./ProductList.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Cart from "../Cart/Cart";
function ProductListing(props) {
  const {
    allProducts,
    setAllProducts,
    productsPrice,
    setAllProductsPrice,
    setCheckout,
    totalProduct,
    setTotalPrice,
    totalPrice,
    setTotalProduct,
    login,
    setLogin,
    setNo,
    no,
  } = props;

  const [type, setType] = useState("");

  const handleUpdate = (name, type, price) => {
    if (allProducts[name]) {
      if (type === "del") {
        if (allProducts[name] === 1) {
          delete allProducts[name];
          setAllProducts({ ...allProducts });
        } else
          setAllProducts({ ...allProducts, [name]: allProducts[name] - 1 });

        setTotalProduct(totalProduct - 1);
        setTotalPrice(totalPrice - parseInt(price));
      } else {
        setAllProducts({ ...allProducts, [name]: allProducts[name] + 1 });
        setTotalProduct(totalProduct + 1);
        setTotalPrice(totalPrice + parseInt(price));
      }
    } else {
      setAllProducts({ ...allProducts, [name]: 1 });
      setTotalProduct(totalProduct + 1);
      setTotalPrice(totalPrice + parseInt(price));
    }
    setAllProductsPrice({ ...productsPrice, [name]: price });
  };

  return (
    <div className="productListContainer">
      <h2 className="heading">Products List</h2>
      <div className="productsList">
        {Products.map((item, id) => {
          return (
            <>
              <SingleProduct
                handleUpdate={handleUpdate}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                data={item}
                key={id}
              />
              <p className="line"></p>
            </>
          );
        })}
      </div>
      <div className={`${type === "cart" || type === "login" ? "cover" : ""}`}>
        <div className="btmDiv">
          {type === "cart" && (
            <Cart
              setCart={setType}
              allProducts={allProducts}
              setAllProducts={allProducts}
              handleUpdate={handleUpdate}
              totalPrice={totalPrice}
              productsPrice={productsPrice}
            />
          )}
          {type === "login" && (
            <Login
              setType={setType}
              setLogin={setLogin}
              setCheckout={setCheckout}
              setNo={setNo}
            />
          )}
          <div className="btmNavbar">
            <div className="cart">
              <p>
                {`${totalProduct} item(s)`}{" "}
                <span>
                  {type === "cart" ? (
                    <KeyboardArrowDownIcon onClick={() => setType("")} />
                  ) : (
                    <KeyboardArrowUpIcon onClick={() => setType("cart")} />
                  )}
                </span>
              </p>
              <p>Total Rs. {totalPrice}</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {!login&&setType("login")}}
              className="nav"
            >
              {`${login ? no : "Login"}`}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                login ? setCheckout(true) : setType("login");
              }}
              className="nav"
            >
              Checkout &ensp; <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductListing.defaultProps = {};
export default ProductListing;
