import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Blog from './pages/Blog';
import News from './pages/News';
import CompareProduct from './pages/CompareProduct';
import Favorite from './pages/Favorite';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/compare-product" element={<CompareProduct />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
