import React from "react";
import "../components/popularPhoto/placeholder.png";
import { common } from "@mui/material/colors";
import "../components/popularCategory.css";

function PopularCategory() {
  let textArray = [
    "Dresses",
    "Tops",
    "Bottoms",
    "Jumpsuits",
    "Beachwear",
    "Denim",
    "Wedding",
    "Bags",
    "Shoes",
    "Maternity",
    "Activewear",
    "Accessories",
    "Baeuty & health",
    "Jewerly",
    "Underwear",
    "Sleepwear",
    "Knitewear",
    " Waches",
    "Hoodies",
    "Outerwear",
  ];

  let images = Array.from({ length: 20 }).map((_, index) => (
    <div className="photoPopular" key={index}>
      <img src={require("../components/popularPhoto/placeholder.png")} />
      <div className="title">
        <p> {textArray[index]}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="PopularCategory">
        <h2>Popular Category</h2>

        <div className="popularSubject">{images}</div>
      </div>
    </>
  );
}

export default PopularCategory;
