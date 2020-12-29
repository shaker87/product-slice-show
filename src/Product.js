import React from "react";
const Product = ({ product }) => {return (
    <ul>
      {product.map((pd, index) => (
        <li key={index}>
            {pd.name}
            <p>Price: {pd.price}</p>
        </li>
      ))}
    </ul>
  );
};
export default Product;