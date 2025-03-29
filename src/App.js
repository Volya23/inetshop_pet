import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Blog from './pages/Blog';
import NewProducts from './pages/NewProducts';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="blog" element={<Blog />} />
        <Route path="newProducts" element={<NewProducts />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
