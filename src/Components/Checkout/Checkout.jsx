import React from "react";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cart from "../Cart/Cart";
import "./checkout.css";
function Checkout(props) {
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
  } = props;

  const handleClick=()=>{
    alert("Order Confirmed");
    setAllProducts({});
    setTotalProduct(0);
    setTotalPrice(0);
    setCheckout(false);
  }
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
    <div className="checkoutContainer">
      <div className="heading">
        <div>
          <KeyboardBackspace
            className="backIcon"
            onClick={() => setCheckout(false)}
          />
        </div>
        <p style={{ fontSize: "1.7rem", transform: "translateX(-50%)" }}>
          Checkout
        </p>
      </div>
      <div className="content">
        <p className="hdn">PICK UP</p>
        <p className="line"></p>
        <p>Test</p>
        <p>Daalchini Office Noida Uttar Pradesh</p>
        <p>Order Expires within 30 mins</p>
      </div>
      <div className="content">
        <p className="hdn">CART DETAILS</p>

        <p className="line"></p>
        <Cart
          allProducts={allProducts}
          setAllProducts={allProducts}
          handleUpdate={handleUpdate}
          totalPrice={totalPrice}
          productsPrice={productsPrice}
          checkout
        />
      </div>
      <div className="footer btmNavbar">
        <div onClick={()=>{handleClick()}}>Place Order</div>
        <div>
          <ArrowForwardIcon className="forwardIcon" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
