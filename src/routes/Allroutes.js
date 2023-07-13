import { Routes, Route } from "react-router-dom";

import React from "react";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/popular" element={<MovieList />} />
        <Route path="/movie/top" element={<MovieList />} />
        <Route path="/movie/upcoming" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Allroutes;
