import React from "react";
import { Filter } from "./Filter";
import { useHistory } from "react-router-dom";
import {
  getProductsHandler,
  getCategoriesHandler,
  getBrandsHandler,
} from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { Paragraph } from "../../Components/Global/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  getCartHandler,
  postCartHandler,
  getWishlistHandler,
  postWishlistHandler,
  deleteWishlistHandler,
} from "../../Redux/CartWish/action";
import {PageWrapper,Container,ShopContainer,SortingField,ShopItems,PaginationWapper} from './Styles'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const productsTotal = useSelector(
    (state) => state.productReducer.productsTotal
  );
  const brands = useSelector((state) => state.productReducer.brands);
  const categories = useSelector((state) => state.productReducer.categories);
  const minPrice = useSelector((state) => state.productReducer.minPrice);
  const maxPrice = useSelector((state) => state.productReducer.maxPrice);
  const userData = useSelector((state) => state.authReducer.userData);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const wishlistArray = useSelector((state) => state.cartWishReducer.wishlist);
  const productsInCart = useSelector(
    (state) => state.cartWishReducer.uniqueCart
  );
  const productsInWishlist = useSelector(
    (state) => state.cartWishReducer.uniqueWishlist
  );
  const [priceLimit, setPriceLimit] = React.useState([0, 1000000000000]);
  const [brandsArray, setBrandsArray] = React.useState([]);
  const [categoriesArray, setCategoriesArray] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortSelection, setSortSelection] = React.useState(0);

  const history = useHistory();

  React.useEffect(() => {
    setAllProducts(products);
  }, [products]);

  React.useEffect(() => {
    setPriceLimit([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const onCategoryChangeHandler = (e) => {
    let arr = [];
    let categoryClass = document.getElementsByClassName("categories");
    for (let i = 0; i < categoryClass.length; i++) {
      if (categoryClass[i].checked) {
        arr.push(categoryClass[i].name);
      }
    }
    setCategoriesArray(arr);
  };

  const onBrandChangeHandler = (e) => {
    let arr = [];
    let brandClass = document.getElementsByClassName("brands");
    for (let i = 0; i < brandClass.length; i++) {
      if (brandClass[i].checked) {
        arr.push(brandClass[i].name);
      }
    }
    setBrandsArray(arr);
  };

  const onBrandClearHandler = (e) => {
    setBrandsArray([]);
    let brandClass = document.getElementsByClassName("brands");
    for (let i = 0; i < brandClass.length; i++) {
      brandClass[i].checked = false;
    }
  };

  const onCategoryClearHandler = (e) => {
    setCategoriesArray([]);
    let categoryClass = document.getElementsByClassName("categories");
    for (let i = 0; i < categoryClass.length; i++) {
      categoryClass[i].checked = false;
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [brandsArray, categoriesArray]);

  const getProducts = () => {
    let payload = {
      priceLimit,
      categoriesArray,
      brandsArray,
    };
    dispatch(getProductsHandler(payload, currentPage, sortSelection));
  };

  React.useEffect(() => {
    getProducts();
    // eslint-disable-next-line 
  }, [priceLimit, categoriesArray, brandsArray, currentPage, sortSelection]);

  React.useEffect(() => {
    getProducts();
    dispatch(getCategoriesHandler());
    dispatch(getBrandsHandler());
    // eslint-disable-next-line 
  }, []);

  const addToCartHandler = (productId) => {
    if (!isAuth) {
      return history.push("/auth/login");
    }
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postCartHandler(payload)).then((res) =>
      dispatch(getCartHandler(userData._id))
    );
  };
  const addToWishlistHandler = (productId) => {
    if (!isAuth) {
      return history.push("/auth/login");
    }
    let payload = {
      userId: userData?._id,
      productId,
    };
    dispatch(postWishlistHandler(payload)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  };
  const removeFromWishlistHandler = (productId) => {
    let wishlistSolo = wishlistArray.find(
      (item) => item.productId._id === productId
    );

    dispatch(deleteWishlistHandler(wishlistSolo?._id)).then((res) =>
      dispatch(getWishlistHandler(userData._id))
    );
  };
  const onCheckoutHandler = () => {
    history.push("/checkout");
  };

  return (
    <>
      <PageWrapper>
        <Container>
          <Filter
            minPrice={minPrice}
            maxPrice={maxPrice}
            brands={brands}
            categories={categories}
            setPriceLimit={setPriceLimit}
            priceLimit={priceLimit}
            onCategoryChangeHandler={onCategoryChangeHandler}
            onBrandChangeHandler={onBrandChangeHandler}
            categoriesArray={categoriesArray}
            brandsArray={brandsArray}
            setCategoriesArray={setCategoriesArray}
            setBrandsArray={setBrandsArray}
            onBrandClearHandler={onBrandClearHandler}
            onCategoryClearHandler={onCategoryClearHandler}
          ></Filter>
          <ShopContainer>
            <SortingField>
              <div>
                <Paragraph>
                  {productsTotal} {productsTotal === 1 ? "Product" : "Products"}
                </Paragraph>
              </div>
              <div>
                <select
                  value={sortSelection}
                  onChange={(e) => setSortSelection(e.target.value)}
                  name="price"
                  id="price"
                >
                  <option value={0}>Relevance</option>
                  <option value={-1}>High to low</option>
                  <option value={1}>Low to high</option>
                </select>
              </div>
            </SortingField>
            <ShopItems>
              {allProducts?.map((item) => (
                <ProductCard
                  onCheckoutHandler={onCheckoutHandler}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                  productsInCart={productsInCart}
                  addToWishlistHandler={addToWishlistHandler}
                  productsInWishlist={productsInWishlist}
                  key={item._id}
                  {...item}
                ></ProductCard>
              ))}
            </ShopItems>
            <PaginationWapper>
              <div className={classes.root}>
                <Pagination
                  count={Math.ceil(productsTotal / 9)}
                  variant="outlined"
                  shape="rounded"
                  page={currentPage}
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </div>
            </PaginationWapper>
          </ShopContainer>
        </Container>
      </PageWrapper>
    </>
  );
};
