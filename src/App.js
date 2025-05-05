import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';

import Promotion from './pages/Promotion';
import SingleProduct from './pages/SingleProduct';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Adoption from './pages/Adoption';

import CompareProduct from './pages/CompareProduct';
import Favorite from './pages/Favorite';
import Payment from './pages/Payment';
import ReturnProduct from './pages/ReturnProduct';

import Signon from './pages/registration/Signon';
import Forgotpassword from './pages/registration/Forgotpassword';
import Signin from './pages/registration/Signin';

import Dog from './pages/category/dog_pages/Dog';
import DogFood from './pages/category/dog_pages/DogFood';
import DogTreat from './pages/category/dog_pages/DogTreat';
import DogVet from './pages/category/dog_pages/DogVet';
import DogToys from './pages/category/dog_pages/DogToys';
import DogClothes from './pages/category/dog_pages/DogClothes';
import DogToilet from './pages/category/dog_pages/DogToilet';
import DogDish from './pages/category/dog_pages/DogDish';
import DogCare from './pages/category/dog_pages/DogCare';
import DogComfort from './pages/category/dog_pages/DogComfort';
import DogSmth from './pages/category/dog_pages/DogSometh';

import Cat from './pages/category/cat_pages/Cat';
import CatFood from './pages/category/cat_pages/CatFood';

import Finfish from './pages/category/finfish_pages/Finfish';

import Bird from './pages/category/bird_pages/Bird';

import Reptile from './pages/category/reptile_pages/Reptile';

import Rodent from './pages/category/rodent_pages/Rodent';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="promotion" element={<Promotion />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<SingleNews />} />
        <Route path="adoption" element={<Adoption />} />

        <Route path="compare-product" element={<CompareProduct />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="payment" element={<Payment />} />
        <Route path="return-product" element={<ReturnProduct />} />
        
        <Route path="signon" element={<Signon />} />
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="signin" element={<Signin />} />

        <Route path="dog" element={<Dog />} />
        <Route path="dog-food" element={<DogFood/>} />
        <Route path="dog-treat" element={<DogTreat/>} />
        <Route path="dog-vet" element={<DogVet/>} />
        <Route path="dog-toys" element={<DogToys/>} />
        <Route path="dog-clothes" element={<DogClothes/>} />
        <Route path="dog-toilet" element={<DogToilet/>} />
        <Route path="dog-dish" element={<DogDish/>} />
        <Route path="dog-care" element={<DogCare/>} />
        <Route path="dog-comfort" element={<DogComfort/>} />
        <Route path="dog-smth" element={<DogSmth/>} />

        <Route path="cat" element={<Cat />} />
        <Route path="cat-food" element={<CatFood/>} />

        <Route path="finfish" element={<Finfish />} />

        <Route path="bird" element={<Bird />} />
        
        <Route path="reptile" element={<Reptile />} />
        
        <Route path="rodent" element={<Rodent />} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
