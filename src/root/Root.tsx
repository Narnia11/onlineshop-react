import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../globalComponents/header/Footer";
import Header from "../globalComponents/header/Header";
import LandingPage from "../views/landingView/LandingPage";
import CategoryPage from "../views/categoryView/CaategoryPage";
import ProductPage from "../views/productView/ProductPage";
import SearchPage from "../views/searchView/SearchPage";
import Error from "../views/errorView/Error";
import BasketPage from "../views/basketView/BasketPage";
import AdmingPage from "../views/AdminView/AdminPage";
import ProductView from "../views/AdminView/ProductView";
import ContactPage from "../views/contactView/ContactPage";
import ProductListPage from "../views/productListView/ProductListPage";
import LikedProducts from "../views/likedProductView/LikedProducts";

export default function Root() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/landing" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/category"
            element={<CategoryPage></CategoryPage>}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
          <Route path="/AdminPage" element={<AdmingPage></AdmingPage>}></Route>
          <Route
            path="/ProductView"
            element={<ProductView></ProductView>}
          ></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route
            path="/productList"
            element={<ProductListPage></ProductListPage>}
          ></Route>
          <Route
            path="/Favourites Products"
            element={<LikedProducts></LikedProducts>}
          ></Route>

          {/* <Route path="*" element={<Error></Error>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
