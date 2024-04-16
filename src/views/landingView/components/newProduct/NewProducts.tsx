import { useEffect, useState } from "react";
import { IProduct } from "../../../../interfaces";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../../../../firestore-config";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { log } from "console";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './NewProduct.css'
import ProductCards from "../../../../globalComponents/header/ProductCards";
export default function NewProducts() {

  const [products, setProducts] = useState<IProduct[]>([])
  const productCollectionRef= collection(db,"Products")

  const getProducts = async () => {
    const q = query(productCollectionRef, orderBy("date", "desc"));
    const data = await getDocs(q)
    const res = data.docs.map((doc) => ({
      ...(doc.data() as IProduct),
      id: doc.id,
     
    }));
  
    console.log(res)
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);




  return (
    <>

      <div className="new-container">
        <h1 className="new-title">New Products</h1>
        <div className="new-category">
          <div className="new-category__item new-active">Women</div>
          <div className="new-category__item">Men</div>
          <div className="new-category__item">Formal</div>
          <div className="new-category__item">Causal</div>
          <div className="new-category__item">Brands</div>
          <div className="new-category__item">Beauty</div>
          <div className="new-category__item">Sport</div>
        </div>
        <div className="new-item__container">

          {

          products.slice(0,7).map((product)=>(
            
            
          <div className="new-item"  key={product.id}>
             <ProductCards
    product={product}
    key={product.id}
    productCollectionRef={productCollectionRef}
    getProducts={getProducts}
   ></ProductCards>       
          </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
