import React from 'react';
import { Outlet } from 'react-router-dom';
import categoriesArray from '../../categories.json';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = categoriesArray;

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
