import React, { useState } from "react";

import meals from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(meals.map((item) => item.category))];
// {de create rute pt fiecare meal in parte,de create searchBar, }
const App = () => {
  const [meal, setMeal] = useState(meals);
  const [categories, setCategories] = useState(allCategories);

  const sortAlphabetically = () => {
    const sortedMeals = [...meal].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMeal(sortedMeals);
  };

  const filterCategories = (category) => {
    if (category === "all") {
      setMeal(meals);
      return;
    }
    const newItems = meals.filter((item) => item.category === category);
    setMeal(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories
          categories={categories}
          filter={filterCategories}
          sort={sortAlphabetically}
        />
        <Menu items={meal} />
      </section>
    </main>
  );
};
export default App;
