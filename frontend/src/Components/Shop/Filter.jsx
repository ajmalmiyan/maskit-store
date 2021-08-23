import React from "react";
import { Paragraph, SubHeadingTwo } from "../../Components/Global/Typography";
import Slider from "@material-ui/core/Slider";
import {
  FilterWrapper,
  Section,
  SectionHead,
  SectionItemHolder,
  SectionItem,
  SectionSearch,
  SliderInfo,
  ClearALL,
} from "./Styles";
export const Filter = ({
  brands,
  categories,
  minPrice,
  maxPrice,
  setPriceLimit,
  onCategoryChangeHandler,
  onBrandChangeHandler,
  priceLimit,
  categoriesArray,
  brandsArray,
  onCategoryClearHandler,
  onBrandClearHandler,
}) => {
  let [forSearchBrands, setForSearchBrands] = React.useState([]);
  let [forSearchCategories, setForSearchCategories] = React.useState([]);
  let [tempValue, setTempValue] = React.useState(priceLimit);

  let onCategorySearchHandler = (e) => {
    if (!e.target.value.trim()) {
      return setForSearchCategories(categories);
    }
    let arr = categories.filter((item) =>
      item.category_name
        .substr(e.target.value)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setForSearchCategories(arr);
  };

  let onBrandSearchHandler = (e) => {
    if (!e.target.value.trim()) {
      return setForSearchBrands(brands);
    }
    let arr = brands.filter((item) =>
      item.brand_name
        .substr(e.target.value)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setForSearchBrands(arr);
  };

  React.useEffect(() => {
    setForSearchCategories(categories);
    setForSearchBrands(brands);
  }, [categories, brands]);

  return (
    <FilterWrapper>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Refine By</SubHeadingTwo>
        </SectionHead>
      </Section>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Price</SubHeadingTwo>
        </SectionHead>
        <SectionItem>
          <Slider
            min={minPrice}
            max={maxPrice}
            value={tempValue}
            onChange={(e, newValue) => setTempValue(newValue)}
            onChangeCommitted={(e, newValue) => setPriceLimit(newValue)}
            valueLabelDisplay="auto"
          />
        </SectionItem>
        <SliderInfo>
          <div>
            <Paragraph>₹ {priceLimit[0]}</Paragraph>
          </div>
          <div>
            <Paragraph>₹ {priceLimit[1]}</Paragraph>
          </div>
        </SliderInfo>
      </Section>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Category</SubHeadingTwo>
          <div>
            <ClearALL
              onClick={onCategoryClearHandler}
              visibility={categoriesArray.length !== 0 ? "visible" : "hidden"}
            >
              Clear all
            </ClearALL>
          </div>
        </SectionHead>
        <SectionSearch>
          <input
            onChange={onCategorySearchHandler}
            placeholder="Search categories"
          />
        </SectionSearch>
        <SectionItemHolder>
          {forSearchCategories?.map((item, index) => (
            <SectionItem>
              <div key={item._id}>
                <label>
                  <input
                    className="categories"
                    onChange={onCategoryChangeHandler}
                    type="checkbox"
                    name={item._id}
                  ></input>
                  {item.category_name}
                </label>
              </div>
            </SectionItem>
          ))}
        </SectionItemHolder>
      </Section>
      <Section>
        <SectionHead>
          <SubHeadingTwo>Brands</SubHeadingTwo>
          <div>
            <ClearALL
              onClick={onBrandClearHandler}
              visibility={brandsArray.length !== 0 ? "visible" : "hidden"}
            >
              Clear all
            </ClearALL>
          </div>
        </SectionHead>

        <SectionSearch>
          <input onChange={onBrandSearchHandler} placeholder="Search brands" />
        </SectionSearch>
        <SectionItemHolder>
          {forSearchBrands?.map((item, index) => (
            <SectionItem>
              <div key={item._id}>
                <label>
                  <input
                    className="brands"
                    onChange={onBrandChangeHandler}
                    name={item._id}
                    type="checkbox"
                  ></input>
                  {item.brand_name}
                </label>
              </div>
            </SectionItem>
          ))}
        </SectionItemHolder>
      </Section>
    </FilterWrapper>
  );
};
