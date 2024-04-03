import React from "react"


const AddProduct = ( {setisOpen})=>{
    return (

        <div>
            <button onClick={() => setisOpen(true)}>Yeni Ürün Ekle</button>
        </div>
    )
}



export default AddProduct