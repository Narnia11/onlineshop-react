import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firestore-config"
import "./LikedProduct.css"
import { IProduct } from "../../interfaces"
import { useEffect, useState } from "react"
import ProductPage from "../AdminView/components/ProductPage"
import "../AdminView/Admin.css"
import ProductCards from "../../globalComponents/header/ProductCards"



export default function LikedProducts(){
    const productCollectionRef= collection(db,"Products")
    const [products, setProducts]= useState<IProduct[]>([])

    
    const getProducts= async()=>{
        const LikedProducts=query(productCollectionRef,where("liked", "==", true))
        const data=await getDocs(LikedProducts)
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
    
   const productList =  products.map((product)=>(<ProductCards
    product={product}
   key={product.id}
//    handleClick={handleClick}
productCollectionRef={productCollectionRef}
getProducts={getProducts}


   ></ProductCards>))



    return(
        <>
        <div className="likedMain">
            <div className="filter">
            <h1 className="title"> Favorites</h1>

              
            <select name="category">
                <option value="Category">Category</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Accesories">Accesories</option>
                <option value="Bags">Bags</option>
                <option value="Shoes">Shoes</option>
            </select>
            

                <select name="status" >
                    <option value="Status">Status</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Campaigns">Campaigns</option>
                    <option value="Purchased">Purchased</option>
                </select>
          
             <button className="filterBut">All Filters</button>
            </div>


        <div className="listContainer">
        {productList}
        </div>


        </div>

        </>
    )
}