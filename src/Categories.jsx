import React from "react";

const Categories = ({ categories, filter,sort }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
            <button
              onClick={() => filter(category)}
              className="btn"
              key={category}
            >
              {category}
            </button>
        );
        
      })}
      <button className="btn" onClick={()=>sort()}>Sort Alphabetically</button>
    </div>
  );
};

export default Categories;
