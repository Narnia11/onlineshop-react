import { useEffect, useState } from "react";
import "../searchView/SearchPage.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore-config"; // import the db instance from your Firebase configuration
import { useLocation } from "react-router-dom";
import { IProduct } from "../../interfaces";
import ProductPage from "../AdminView/components/ProductPage";
import ProductCards from "../../globalComponents/header/ProductCards";

interface Product extends IProduct {
  id: string;
}

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();
  const productCollectionRef = collection(db, "Products");
  const searchTerm = location.state?.term || "";
  const fetchData = async () => {
    setProducts([]);
    const q = query(productCollectionRef, where("category", "==", searchTerm));
    console.log(searchTerm);
    try {
      const querySnapshot = await getDocs(q);
      const products: Product[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Product)
      );
      setProducts(products);
    } catch (e) {
      console.error("Error retrieving documents: ", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  console.log("Hej show Result ");

  return (
    <>
      <div className="searchResult">
        {products.length === 0 ? (
          <div className="alert"> No Results</div>
        ) : (
          products.map((prduct) => (
            <ProductCards
              key={prduct.id}
              product={prduct}
              productCollectionRef={productCollectionRef}
              getProducts={fetchData}
            />
          ))
        )}
      </div>
    </>
  );
};

export default SearchPage;
