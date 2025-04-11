import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';

import Promotion from './pages/Promotion';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import News from './pages/News';
import SingleNews from './pages/SingleNews';

import CompareProduct from './pages/CompareProduct';
import Favorite from './pages/Favorite';
import Payment from './pages/Payment';
import ReturnProduct from './pages/ReturnProduct';

import Signon from './pages/registration/Signon';
import Forgotpassword from './pages/registration/Forgotpassword';
import Signin from './pages/registration/Signin';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="promotion" element={<Promotion />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<SingleNews />} />

        <Route path="compare-product" element={<CompareProduct />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="payment" element={<Payment />} />
        <Route path="return-product" element={<ReturnProduct />} />
        
        <Route path="signon" element={<Signon />} />
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
