import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";

const CategoryBtnContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("전국 랭킹");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <CategoryBtn
        isSelect={selectedCategory === "전국 랭킹" ? "selected" : "notSelected"}
        text="전국 랭킹"
        onClick={() => handleCategoryClick("전국 랭킹")}
        size="col-3"
        height="60px"
        fontSize="1.7rem"
      />
      <CategoryBtn
        isSelect={selectedCategory === "지역 랭킹" ? "selected" : "notSelected"}
        text="지역 랭킹"
        onClick={() => handleCategoryClick("지역 랭킹")}
        size="col-3"
        height="60px"
        fontSize="1.7rem"
      />
    </>
  );
};

export default CategoryBtnContainer;
