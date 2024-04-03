import ProductItem from "./ProductItem";

import "./Products.css";
import NewProduct from "../newproduct/newproduct";
import { useState } from "react";

const Products = () => {
  const [Products, setProducts] = useState([]);

  console.log(Products);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} Products={Products} />
      <h1>Products</h1>
      <div className="products">

        {Products.length === 0 ? <p>hiç ürün yok</p> : Products.map((product) => (
          <ProductItem key={product.id} product={product} setProducts={setProducts} Products={Products} />
        ))}


        </div>
    </div>
      );
};

      export default Products;
