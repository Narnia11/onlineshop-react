import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  let navigate = useNavigate();

  const [showHeader, setFirstHeader] = useState(true);
  const changeHeader = () => {
    console.log(showHeader);
    console.log(setFirstHeader(!showHeader));
    nav();
  };
  const nav = () => {
    if (showHeader) {
      navigate("/AdminPage");
    } else {
      navigate("/landing");
    }
  };

  // Search function
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate("/search", { state: { term: searchTerm } });
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      {showHeader ? (
        <header>
          <div className="top-header">30% OFF MENSWEAR + EXTRA 10% OFF</div>
          <div className="logo container">
            {/* <div className="contact-header" onClick={() => navigate("/contact")}>Contact us</div> */}
            <h1 onClick={() => navigate("/landing")}>Cool Fashion</h1>
            <div className="top-icons">
              <div>
                <PersonIcon onClick={changeHeader}></PersonIcon>
              </div>
              <div>
                <FavoriteBorderIcon
                  onClick={() => navigate("/Favourites Products")}
                ></FavoriteBorderIcon>
              </div>
              <div onClick={() => navigate("/basket")}>
                <ShoppingBagIcon></ShoppingBagIcon>
              </div>
            </div>
          </div>
          <div className="navbar dropdown">
            <ul className="navbar-menu">
              <div className="dropdownNewBtn">
                <li className="dropbtn">New</li>
                <div className="dropdown-content">
                  <h4 className="dropdown-title">Shop by category</h4>
                  <div className="dropdown info">
                    <li onClick={() => navigate("/category")}>Shop all new</li>
                    <li>New in women's bottom</li>
                    <li>New in men's bottom</li>
                    <li>New Graphics</li>
                    <li>New Women's top</li>
                  </div>
                </div>
              </div>
              <li>Women</li>
              <li>Men</li>
              <li>Home & lifestyle</li>
              <li>Brands</li>
              <li>Vintage & Renewal</li>
              <li>Sale & Offers</li>
              <li onClick={() => navigate("/productList")}>All Products</li>
            </ul>
            <div className="search">
              <input
                type="search"
                placeholder="search"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleSearchClick}
              />
            </div>
          </div>
        </header>
      ) : (
        <div className="logOutBtn ">
          <button onClick={changeHeader}>Log out</button>
        </div>
      )}
    </>
  );
}
