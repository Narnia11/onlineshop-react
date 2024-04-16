import BrandsCart from "./components/brandsCart/BrandsCart";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero2/Hero2";
import NewProducts from "./components/newProduct/NewProducts";
import Ads from "./components/ads/Ads";
import PopularCategory from "./components/popularCategory";
import { useParams } from "react-router-dom";

export default function LandingPage() {

  // let{useNum}=useParams()
  return (
    <>
      <Hero></Hero>
      <PopularCategory></PopularCategory>
      <Ads></Ads>
      <Hero2></Hero2>
      {/* <p>{useNum}</p> */}
      {/* <BrandsCart></BrandsCart> */}
      <NewProducts></NewProducts>
    </>
  );
}
