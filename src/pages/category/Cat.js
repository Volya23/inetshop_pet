import React from 'react'
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import { Link } from 'react-router-dom';

const Cat = () => {
    return (
        <>
        <Meta title={"Коти"} />
        <BreadCrumb title=" Товари для котів" />

    <section className="category-wrapper-1 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="d-flex justify-content-center">
                        <img
                            src="images/banner_cat_page.jpg"
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
              <Link className="section-heading fs-2">Товари для котів</Link>
              <Link className="button-dark">Дивитись все</Link>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center gap-10">
            <div className="category-card">
              <div className="card-image">
                  <img src="images/category/cat_food.jpg" className="img-fluid" alt="food"/>
              </div>
                <Link><h3>Корм</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_treat.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Ласощи</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_vet.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Ветпрепарати</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_toys.png" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Іграшки</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_clothes.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Одяг та амуніція</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_wc.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Туалет</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_bowls.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Посуд</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_care.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Догляд</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_place.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Комфорт</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/cat_products.png" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Інше</h3></Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cat