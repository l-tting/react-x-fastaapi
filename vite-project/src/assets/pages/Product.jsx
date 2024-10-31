import { useEffect, useState } from "react"
import axios from "axios"


const Product = () => {
    const url = import.meta.env.VITE_PRODUCTS_URL
   const[productData,setProductData] =useState([])
   const fetchProducts = async ()=>{
    try{
        const response = await axios.get(url)
        console.log(response)
        setProductData(response.data.products)
    }
    catch (e){
        console.log("error fetching products:", e)
    }
   }
  useEffect(()=>{
    fetchProducts()
  },[])
   
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Product Name</td>
                    <td>Buying Price</td>
                    <td>Selling Price</td>
                    <td>Stock Quantity</td>
                </tr>
            </thead>
            <tbody>
                {productData.map(product=>(
                     <tr>
                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>{product.buying_price}</td>
                     <td>{product.selling_price}</td>
                     <td>{product.stock_quantity}</td>
                     </tr>

                ))}
               
            </tbody>
        </table>
      
    </div>
  )
}

export default Product
