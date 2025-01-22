import React, { useEffect } from "react";

const Category = () => {
  useEffect(() => {
    getCategory();
  }, []);
  return <div>Category</div>;
};

export default Category;
