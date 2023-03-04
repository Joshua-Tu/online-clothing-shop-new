import React from "react";
import categoriesArray from "./categories.json";
import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = categoriesArray;

  return <Directory categories={categories} />;
};

export default App;
