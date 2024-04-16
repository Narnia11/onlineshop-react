import { collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../firestore-config"
import { useEffect, useId, useState } from 'react';
import { IProduct } from "../../interfaces";
import "./Admin.css"
import { useNavigate } from "react-router-dom";
import avatar from './imgav/avatar.png'
import ProductPage from "./components/ProductPage";
import ProductCards from "../../globalComponents/header/ProductCards";












export default function ProductView(){
    
    const productCollectionRef= collection(db,"Products")
    const [products, setProducts]= useState<IProduct[]>([])

    
    const getProducts= async()=>{
        const data=await getDocs(productCollectionRef)
        setProducts(
            data.docs.map((doc)=>(
                {...(doc.data() as IProduct), id:doc.id}
            ))
        )
    } 

    useEffect(()=>{
        getProducts()
    },[])

    const handleClick= async(product:IProduct)=>{
        await updateDoc(doc(productCollectionRef,product.id),{liked:!product.liked})
    
       
        getProducts()
     }

    let navigate = useNavigate()

   const productList =  products.map((product)=>(<ProductCards
    product={product}
   key={product.id}
//    handleClick={handleClick}
   productCollectionRef={productCollectionRef}
   getProducts={getProducts}

   ></ProductCards>))



    
    return(

        <>
        
        <div className="grid-container">
        <div className="side">
            <h1>Admin</h1>
            <hr color="#20718A"  />
            <h3>Profile</h3>
            <hr color="#20718A"  />
            <h3>Categories</h3>
            <hr color="#20718A"  />
            <h3 className="thisPage" onClick={()=>navigate("/ProductView")}>View all products</h3>
            <hr color="#20718A"  />
            <h3  onClick={()=>navigate("/AdminPage")}>Add new product</h3>
            <hr color="#20718A"  />
            <h3>show user</h3>
            <hr color="#20718A"  />

            
        </div>
        <div className="maingrid">

            <div className="rubrik">
                <img className="avatar" src={avatar} alt="avatar woman" />
                <h1>All products</h1>
            </div>

            <div className="cardContainer">
              {productList}
             </div>

        </div>
        </div>








     

        </>
    )
}

