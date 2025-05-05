import React, { useState } from "react";
import ReactStars from "react-stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);

    const settings_lazy = { 
        dots: false,        // Відображення точок навігації
        infinite: true,      // Безкінечне прокручування
        speed: 1000,        // Швидкість анімації
        lazy: true,         // Використання ефекту fade
        slidesToShow: 5,    // Кількість видимих слайдів
        slidesToScroll: 1,  // Скільки слайдів прокручується за раз
        autoplay: false,     // Автоматична прокрутка
        autoplaySpeed: 5000, // Час між слайдами
        arrows: true
      };

  return (
    <>
    <Meta title={"Назва"} />
    <BreadCrumb title=" Назва товару" />
    <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
        </div>
    </div>
    <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="bg-white p-3">
                        <h4>Опис</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam quo quaerat suscipit laudantium ea ratione voluptate! Vel blanditiis accusantium ullam quos accusamus!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                        <h4 className="mb-2">Відгуки</h4>
                        <div className="d-flex align-items-center gap-10">
                        <ReactStars
                         count={5}
                         size={24}
                         value={3}
                         edit={false}
                         color2={"#ffd700"}
                     />
                        <p className="mb-0">5 відгуків</p>
                        </div>
                        </div>
                        {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">Написати відгук</a>
                      </div>
                    )}
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading"> Наші популярні товари</h3>
                </div>
            </div>
            <div className="row">
                <Slider {...settings_lazy}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

export default SingleProduct;





