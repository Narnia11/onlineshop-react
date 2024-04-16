import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../../firestore-config";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./productListPage.css"
import ProductCards from "../../globalComponents/header/ProductCards";


export default function ProductListPage() {

  const [products, setProducts] = useState<IProduct[]>([])
  const productCollectionRef = collection(db, "Products")

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

  const handleClick = async (product: IProduct) => {
    await updateDoc(doc(productCollectionRef, product.id), { liked: !product.liked })
    getProducts()
  }

  return (
    <>
      <div className="allProdContainer">
        <h1>All Products</h1>
        <div className="filterProduct">
          <div className="filterItem default">All</div>
          <div className="filterItem ">Women</div>
          <div className="filterItem">Men</div>
          <div className="filterItem">Formal</div>
          <div className="filterItem">Causal</div>
          <div className="filterItem">Brands</div>
          <div className="filterItem">Beauty</div>
          <div className="filterItem">Sport</div>
        </div>
        <div className="productListContainer">
          {
            products.map((product) => (
              <div className="productListItem" key={product.id}>
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
