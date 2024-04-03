import { useState } from "react";
import ProductForm from "./productform";
import AddProduct from "./AddProduct";





const NewProduct = ({ Products, setProducts }) => {

    const [isOpen, setisOpen] = useState(false);

    const onSaveProduct = (newProductData) => {
        setProducts([...Products, newProductData])
    }


    return (

        <div className="new-product-wrapper">
            {isOpen ? (  
            
            <ProductForm onSaveProduct={onSaveProduct}  Products={Products} setisOpen={setisOpen}/>
            ):(   
            <AddProduct  setisOpen={setisOpen}  />

            )}
        </div>

    );
}



export default NewProduct;