function categoriesCollector(products) {
  let categories = {};
  for (let i = 0; i < products.length; i++) {
    if (!categories[products[i].categoryId._id]) {
      categories[products[i].categoryId._id] = {
        _id: products[i].categoryId._id,
        category_name: products[i].categoryId.category_name,
        items: 1,
      };
    } else {
      categories[products[i].categoryId._id].items =
        categories[products[i].categoryId._id].items + 1;
    }
  }
  return categories;
}

function brandsCollector(products) {
  let brands = {};
  for (let i = 0; i < products.length; i++) {
    if (!brands[products[i].brandId._id]) {
      brands[products[i].brandId._id] = {
        _id: products[i].brandId._id,
        brand_name: products[i].brandId.brand_name,
        items: 1,
      };
    } else {
      brands[products[i].brandId._id].items =
        brands[products[i].brandId._id].items + 1;
    }
  }
  return brands;
}

function getAll(entity) {
  let arr = [];
  entity.map((item) => arr.push(item._id));
  return arr;
}

module.exports = {
  categoriesCollector,
  brandsCollector,
  getAll,
};
