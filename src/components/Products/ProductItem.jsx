// ProductItem.js

import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import Counter from "../Counter";

const ProductItem = ({ product , setProducts, Products}) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(0); // Ürün miktarını tutar

  const clickhandler = () => {
    setTitle("güncellendi");
    console.log(productName, "güncellendi");
  };

  const deletehandler=()=>{
    console.log("ürün silindi");
    setProducts(Products.filter((item)=> item.id!==product.id));
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <Counter
          counter={counter}
          setCounter={setCounter}
          productPrice={productPrice}
        >
          <span>{counter}</span>
        </Counter>
        <span>Total Price: {counter * productPrice}₺</span> {/* Ürün miktarı ile ürün fiyatını çarpıp toplam fiyatı hesaplar */}
        <br />
        <button onClick={clickhandler}>Güncelle</button>
        <button onClick={deletehandler} className="btn-delete">Sil</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
