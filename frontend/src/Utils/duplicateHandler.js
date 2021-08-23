export const cartDuplicateHandler=(arr)=> {
  let productsArray = [];
  arr.map((item) => productsArray.push(item?.productId._id));
  return productsArray;
}
export const wishlistDuplicateHandler=(arr)=> {
  let productsArray = [];
  arr.map((item) => productsArray.push(item?.productId._id));
  return productsArray;
}
