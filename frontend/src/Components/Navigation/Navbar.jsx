import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../Redux/Auth/action";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { getSearchHandler } from "../../Redux/Products/action";
import {SearchCard} from "./SearchCard";
import {
  getCartHandler,
  getWishlistHandler,
} from "../../Redux/CartWish/action";
import {NavbarFix,NavbarWrapper,Navigation,Logo,SearchHolder,NavButton,NavItem,ActionsHolder,HamburgerMenu,SearchResults,DropDownWrapper,DropDown,} from './Styles'
// import { HistoryTwoTone } from "@material-ui/icons";


export const Navbar=()=> {
  const [search, setSearch] = React.useState("");
  const [searchModal, setSearchModal] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);
// eslint-disable-next-line 
  const [menuState, setMenuState] = React.useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userData = useSelector((state) => state.authReducer.userData);
  const cartArray = useSelector((state) => state.cartWishReducer.cart);
  const wishlistArray = useSelector((state) => state.cartWishReducer.wishlist);
  const timer = React.useRef();
  const history = useHistory();
  const handleOpenWishList = () =>{
    history.push("/wishlist")
  }
  const handleOpenCart = ()=>{
    history.push("/cart")
  }
  let searchSuggestions = useSelector(
    (state) => state.productReducer.searchSuggestions
  );

  const logoutHandler=()=> {
    dispatch(handleLogout());
  }

  React.useEffect(() => {
    if (isAuth) {
      dispatch(getCartHandler(userData._id));
      dispatch(getWishlistHandler(userData._id));
    }
    // eslint-disable-next-line 
  }, [isAuth]);

  React.useEffect(() => {
    setSuggestions(searchSuggestions);
  }, [searchSuggestions]);

  const onQuerySearchHandler=()=> {
    if (search.trim() === "") {
      setSuggestions([]);
      setSearchModal(false);
      return;
    }
    setSearchModal(true);
    dispatch(getSearchHandler(search));
  }

  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onQuerySearchHandler();
    }, 500);
    // eslint-disable-next-line 
  }, [search]);

  return (
    <NavbarFix>
    <NavbarWrapper>
      <Navigation>
        <Logo>
          <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
        </Logo>
        <SearchHolder status={search}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search mask here!"
          />
          {searchModal ? (
            <i onClick={() => setSearch("")} className="fas fa-times"></i>
          ) : (
            <i className="fas fa-search"></i>
          )}

          {searchModal && (
            <SearchResults>
              {suggestions?.map((item) => (
                <SearchCard
                  setSearchModal={setSearchModal}
                  setSearch={setSearch}
                  key={item._id}
                  {...item}
                />
              ))}
            </SearchResults>
          )}
        </SearchHolder>
        <ActionsHolder margin={isAuth ? "20px" : "5px"}>
          <div>
            <Link to="/shop">
              <NavItem>SHOP</NavItem>
            </Link>
          </div>

          <div>
            {isAuth && (
              <Badge badgeContent={wishlistArray.length} color="error">
                <FavoriteBorderIcon
                  onClick={handleOpenWishList}
                  fontSize="default"
                />
              </Badge>
            )}
          </div>
          <div>
            {isAuth && (
              <Badge badgeContent={cartArray.length} color="error">
                <ShoppingCartOutlinedIcon
                  onClick={handleOpenCart}
                  fontSize="default"
                />
              </Badge>
            )}
          </div>
          <div>
            {isAuth ? (
              <DropDownWrapper>
                <div>
                  <div>{userData?.first_name}</div>
                  <div>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                <DropDown>
                  <Link to="/profile">
                    <div>
                      <span> Profile </span>
                    </div>
                  </Link>
                  <Link to="/">
                    <div onClick={logoutHandler}>
                      <span> Logout </span>
                    </div>
                  </Link>
                </DropDown>
              </DropDownWrapper>
            ) : (
              <Link to="/auth/login">
                <NavButton>
                  <span> Login </span>
                </NavButton>
              </Link>
            )}
          </div>
        </ActionsHolder>
        <HamburgerMenu onClick={() => setMenuState(true)}>
          <MenuOutlinedIcon fontSize="large" />
        </HamburgerMenu>
      </Navigation>
    </NavbarWrapper>
    </NavbarFix>
  );
}