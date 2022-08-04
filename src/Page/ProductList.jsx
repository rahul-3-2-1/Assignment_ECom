import React, { useState } from "react";
import ProductListing from "../Components/ProductListing/ProductListing";
import Checkout from "../Components/Checkout/Checkout";


function ProductList() {
  const [checkout, setCheckout] = useState(false);
  const [allProducts, setAllProducts] = useState({});
  const [productsPrice,setAllProductsPrice]=useState({});
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [login,setLogin]=useState(false);
  const [no,setNo]=useState("");
  console.log(totalPrice);
  console.log(totalProduct);
  
  return (
    <div>
      {!checkout ? (
        <ProductListing
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          productsPrice={productsPrice}
          setAllProductsPrice={setAllProductsPrice}
          setCheckout={setCheckout}
          setTotalProduct={setTotalProduct}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          totalProduct={totalProduct}
          setLogin={setLogin}
          login={login}
          no={no}
          setNo={setNo}
        />
      ) : (
        <Checkout
         allProducts={allProducts}
        setAllProducts={setAllProducts}
        productsPrice={productsPrice}
        setAllProductsPrice={setAllProductsPrice}
        setCheckout={setCheckout}
        login={login}
        setLogin={setLogin}
        setTotalProduct={setTotalProduct}
        setTotalPrice={setTotalPrice}
        totalPrice={totalPrice}
        totalProduct={totalProduct} />
      )}
    </div>
  );
}

export default ProductList;
