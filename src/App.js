import React, { useState, useEffect } from "react";
import Product from "./Product";
export const data = [
  { name: 'Product A', price: 300 },
  { name: 'Product B', price: 700 },
  { name: 'Product C', price: 400 },
  { name: 'Product D', price: 500 },
  { name: 'Product E', price: 600 },
  { name: 'Product F', price: 800 },
  { name: 'Product G', price: 900 },
  { name: 'Product H', price: 200 }
];


const productPerPage = 3;
let arrayForHoldingProduct = [];

const App = () => {
  const [productToShow, setProductToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedProduct = data.slice(start, end);
    arrayForHoldingProduct = [...arrayForHoldingProduct, ...slicedProduct];
    setProductToShow(arrayForHoldingProduct);
  };

  useEffect(() => {
    loopWithSlice(0, productPerPage);
  }, []);

  const handleShowMoreProduct = () => {
    loopWithSlice(next, next + productPerPage);
    setNext(next + productPerPage);
  };

  return (
    <div>
      <Product product={productToShow}></Product>
        <button onClick={handleShowMoreProduct}>View more</button>
    </div>
  );
};

export default App;


