
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"

import { db } from "../../firestore-config"

import "../likedProductView/LikedProduct.css"

import { IProduct } from "../../interfaces"

import { useEffect, useState } from "react"

import ProductPage from "../AdminView/components/ProductPage"

import "../AdminView/Admin.css"
import placeholder from "../../views/AdminView/imgav/istockphoto-1222357475-612x612.jpg"
import "./Basket.css"
import { useParams } from "react-router-dom"





export default function BasketPage(){

  const productCollectionRef= collection(db,"Products")

 const [products, setProducts]= useState<IProduct[]>([])
 //let [total, setTotal]=useState<number>(0)





 const getProducts= async()=>{

 const purchasedProducts=query(productCollectionRef,where("purchased", "==", true))

 const data=await getDocs(purchasedProducts)

setProducts(

 data.docs.map((doc)=>(

 {...(doc.data() as IProduct), id:doc.id}
 
 )))

 }

 let total:number=  products.reduce( function (acc, obj) { return acc+ +obj.price; }, 0);
let tootal=total+99

console.log()

useEffect(()=>{

 getProducts()

},[])


const handleClick= async(product:IProduct)=>{
  await updateDoc(doc(productCollectionRef,product.id),{purchased:!product.purchased})

  getProducts()
}

const useNum=products.length

 return(
 
 <>

<h1 className="title"> Shopping Page</h1>

<div className="basketMain">
 
  <div className="cardsContainer" >

      { products.map((product)=>(
          <div key={product.id} className="productCards">
            <div className="info">
            <div><img src={placeholder} alt={product.name} /> {product.name}</div>
            <div>{product.price} kr</div>
            </div>

            <div className="butContainer">
              <button>Save for later</button>
              <button onClick={()=>{handleClick(product)}}>Remove</button>
            </div>

          </div>
      )) }

  </div>


 
  <div className="summaryContainer">
    <h1>Summary</h1>
    <div >
       <span>Item</span> 
       <span>{products.length}</span>
    </div>
    <div>
      <span> Delivery & Handling</span> 
      <span>99 kr</span>
      </div>
      <br />
      <hr />
      <div>
      <span>Total</span> 
      <span>{tootal}</span>
      </div>

  </div>


</div>

 </>
 )

}





