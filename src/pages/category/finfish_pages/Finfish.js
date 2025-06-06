import React from 'react'
import BreadCrumb from "../../../components/BreadCrumb";
import Meta from "../../../components/Meta";
import { Link } from 'react-router-dom';

const Finfish = () => {
  return (
    <>
    <Meta title={"Риби"} />
    <BreadCrumb title=" Товари для риб" />

    <section className="category-wrapper-1 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="d-flex justify-content-center">
                        <img
                            src="images/fish_page.jpg"
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
              <Link className="section-heading fs-2">Товари для риб</Link>
              <Link className="button-dark">Дивитись все</Link>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center gap-10">
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_tank.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Акваріуми</h3></Link>
            </div>
            <div className="category-card">
              <div className="card-image">
                  <img src="images/category/fish_food.jpg" className="img-fluid" alt="food"/>
              </div>
                <Link><h3>Корм</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_soil.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Ґрунт</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_chemistry.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Хімія</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_decoration.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Декорації</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_equipment.jpg" className="img-fluid" alt="food"/>
            </div>
                <Link><h3>Обладнення</h3></Link>
            </div>
            <div className="category-card">
            <div className="card-image">
                <img src="images/category/fish_product.jpg" className="img-fluid" alt="food"/>
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

export default Finfish