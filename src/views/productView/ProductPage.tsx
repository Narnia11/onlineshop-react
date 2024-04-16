import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
/* import FacebookIcon from "@mui/icons-material/Facebook"; */
import "./ProductPage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firestore-config";
import { IProduct } from "../../interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { green } from "@mui/material/colors";
import { boolean } from "yargs";

export default function ProductPage() {
  const { id } = useParams();

  const url = "http://localhost:3000/product/" + id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [imgSrc, setImgSrc] = useState("");
  let [liked, setLiked] = useState<boolean>();
  let [purchased, setPurchased] = useState<boolean>();

  const productCollectionRef = collection(db, "Products");
  const docRef = doc(productCollectionRef, id);

  useEffect(() => {
    const getProduct = async () => {
      const data = await getDoc(docRef);
      if (data.exists()) {
        console.log("Data:", data.data());

        const name = data.data().name;
        const price = data.data().price;
        const imgSrc = data.data().imgSrc;
        const liked = data.data().liked;
        const purchased = data.data().purchased;

        setName(name);
        setPrice(price);
        setImgSrc(imgSrc);
        setLiked(liked);
        setPurchased(purchased);
      } else {
        console.log("No such document!");
      }
    };

    getProduct();
  }, []);

  const handleClick = () => {
    liked = !liked;
    updateDoc(docRef, { liked });
    setLiked(liked);
    console.log(liked);
  };

  const handleAdd = async () => {
    purchased = true;
    updateDoc(docRef, { purchased });
    setPurchased(purchased);
    alert("Product added to the basket.");
  };

  return (
    <>
      <div className="product-container">
        {/* <div className="product-info__img">
          <img src={imgSrc} alt="" />
        </div> */}
        <div className="product-info__img">
          {/* <img src={imgSrc} alt="" /> */}
        </div>
        <div className="product-info__container">
          <>
            <h2>{name}</h2>
            <h4>Price: {price} kr</h4>
          </>

          <div className="pick-color">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="shop-product">
            <button onClick={() => handleAdd()}>Buy</button>
            <div>
              <FavoriteIcon
                onClick={() => handleClick()}
                style={{ color: liked === true ? "red" : "gray" }}
              ></FavoriteIcon>
            </div>
          </div>
          <div className="share-product">
            <p>Share with :</p>

            <div>
              <FacebookShareButton url={url}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <div>
              <TwitterShareButton url={url} title={"title"}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            {/*  <div><InstagramIcon></InstagramIcon></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
function getProduct() {
  throw new Error("Function not implemented.");
}
