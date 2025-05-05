import React from 'react';
import BreadCrumb from "../../../components/BreadCrumb";
import Meta from "../../../components/Meta";
import { Link } from 'react-router-dom';

const Dog = () => {
  return (
    <>
    <Meta title={"Собаки"} />
    <BreadCrumb title=" Товари для собак" />

    <section className="category-wrapper-1 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="d-flex justify-content-center">
                        <img
                            src="images/banner_dog_page.jpg"
                            className="img-fluid rounded-4"
                            alt="banner dog"
                        />
              </div>
            </div>
          </div>
        </section>
        <section className="food-wrapper py-4 px-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between">
              <Link className="section-heading fs-2">Товари для собак</Link>
              <Link className="button-dark">Дивитись все</Link>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center gap-10">
            <Link to="/dog-food" className="category-card">
              <div className="card-image">
                  <img src="images/category/dog_food.jpg" className="img-fluid" alt="food"/>
              </div>
                <h3>Корм</h3>
            </Link>
            <Link to="/dog-treat" className="category-card">
            <div className="card-image">
                <img src="images/category/treats_dog_food.jpg" className="img-fluid" alt="food"/>
            </div>
                <h3>Ласощи</h3>
            </Link>
            <Link to="/dog-vet" className="category-card">
            <div className="card-image">
                <img src="images/category/vet_dog.jpg" className="img-fluid" alt="food"/>
            </div>
                <h3>Ветпрепарати</h3>
            </Link>
            <Link to="/dog-toys" className="category-card">
            <div className="card-image">
                <img src="images/category/dog_toys.png" className="img-fluid" alt="food"/>
            </div>
                <h3>Іграшки</h3>
            </Link>
            <Link to="/dog-clothes" className="category-card">
            <div className="card-image">
                <img src="images/category/dog_clothes.png" className="img-fluid" alt="food"/>
            </div>
                <h3>Одяг та амуніція</h3>
            </Link>
            <Link to="/dog-toilet" className="category-card">
            <div className="card-image">
                <img src="images/category/dog_toilet.jpg" className="img-fluid" alt="food"/>
            </div>
                <h3>Туалет</h3>
            </Link>
            <Link to="/dog-dish" className="category-card">
            <div className="card-image">
                <img src="images/category/bowl_dog.png" className="img-fluid" alt="food"/>
            </div>
                <h3>Посуд</h3>
            </Link>
            <Link to="/dog-care" className="category-card">
            <div className="card-image">
                <img src="images/category/care_dog.png" className="img-fluid" alt="food"/>
            </div>
                <h3>Догляд</h3>
            </Link>
            <Link to="/dog-comfort" className="category-card">
            <div className="card-image">
                <img src="images/category/dog_comfort.png" className="img-fluid" alt="food"/>
            </div>
                <h3>Комфорт</h3>
            </Link>
            <Link to="/dog-smth" className="category-card">
            <div className="card-image">
                <img src="images/category/products_dogs.jpg" className="img-fluid" alt="food"/>
            </div>
                <h3>Інше</h3>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dog;