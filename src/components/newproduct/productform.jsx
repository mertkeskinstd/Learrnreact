import "./productform.css";
import { useState } from "react";


const ProductForm = (props) => {
    // const[productName,setproductName]=useState("");
    // const[productPrice,setproductPrice]=useState("");
    // const[imageurl,setimageurl]=useState("");

    const [productData, setproductData] = useState({
        productName: "",
        productPrice: "",
        imageUrl: "",
    });



    const titleChangeHandler = (event) => {
        // setproductData({
        //     ...productData,
        //     productName:event.target.value,
        // });
        setproductData((prevState) => {
            return { ...prevState, productName: event.target.value };
        });
    };
    const priceChangeHandler = (event) => {
        // setproductData({
        //     ...productData,
        //     productPrice:event.target.value,
        // });
        setproductData((prevState) => {
            return { ...prevState, productPrice: event.target.value };
        });
    };
    const imagesChangeHandler = (event) => {
        // setproductData({
        //     ...productData,
        //     imageUrl:event.target.value,
        // });
        setproductData((prevState) => {
            return { ...prevState, imageUrl: event.target.value };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newProductData = {
            id: props.Products.length + 1,
            productName: productData.productName,
            productPrice: productData.productPrice,
            imageUrl: productData.imageUrl

        };

        props.onSaveProduct(newProductData);
        setproductData({ productName: "", productPrice: 0, imageUrl: "" });


    };


    return (
        <form className="product-form" onSubmit={submitHandler}>
            <div className="product-form-input">
                <label>Ürün Adı </label>
                <input type="text" placeholder="Ürün Adı Giriniz..." value={productData.productName} onChange={titleChangeHandler} />


            </div>
            <div className="product-form-input">
                <label>Ürün Fİyatı </label>
                <input type="number" placeholder="Ürün Fiyatı Giriniz..." value={productData.productPrice} onChange={priceChangeHandler} />

            </div>
            <div className="product-form-input">
                <label>Ürün Görseli </label>
                <input type="text" placeholder="Ürün Görseli Giriniz..." value={productData.imageUrl} onChange={imagesChangeHandler} />
            </div>
            <div className="forms-buttons"> 
                <button className="btn">Ürün Ekle</button>
                <button className="btn cancel" type="button" onClick={() => props.setisOpen(false)} >Vazgeç</button>
            </div>
        </form>
    );
}



export default ProductForm;