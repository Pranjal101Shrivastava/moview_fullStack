import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';

import Home from "./pages/home/home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from "./pages/explore/Explore"
import pageNotFound from "./pages/404/pageNotFound"


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);
  
  const apiTesting = () =>{
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res));
      });
  };


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
