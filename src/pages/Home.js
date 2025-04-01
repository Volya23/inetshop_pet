import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Promotion from "../components/Promotion";


const Home = () => {
  const settings = {
    dots: true,          // Відображення точок навігації
    infinite: true,      // Безкінечне прокручування
    speed: 1000,        // Швидкість анімації
    fade: true,         // Використання ефекту fade
    slidesToShow: 1,    // Кількість видимих слайдів
    slidesToScroll: 1,  // Скільки слайдів прокручується за раз
    autoplay: true,     // Автоматична прокрутка
    autoplaySpeed: 5000, // Час між слайдами
    arrows: false
  };
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
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
              <div className="carousel-container">
                <Slider {...settings}>
                      <div className="main-banner position-relative min-vw-120">
                        <img
                            src="images/Banner-1.png"
                            className="img-fluid rounded-3"
                            alt="banner adoption"
                        />
                        <div className="main-banner-content position-absolute d-flex flex-column align-items-center w-50 h-100 d-inline-block">
                          <h1 className="">Не пр<img src="images/paw_banner-1.png" className="banner d-inline-block" alt="paw" />ходь повз</h1>
                            <p>Ми можемо їм допомогти</p>
                            <Link className="button-dark">Подарувати дім</Link>
                        </div>
                      </div>
                      <div className="main-banner position-relative min-vw-120">
                        <img
                            src="images/Banner-2.svg"
                            className="img-fluid rounded-3"
                            alt="banner"
                        />
                        <div className="main-banner-content-light d-flex flex-column align-items-end">
                            <h1>У нас є все і навіть більше</h1>
                            <p>Приємних покупок ❤️</p>
                            <Link className="button-light">До покупок</Link>
                          </div>
                        </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-item-center justify-content-between">
                    <div className="d-flex align-items-center gap-15"><img src="images/delivery.svg" alt="services"/>
                      <div><p className="mb-0 fst-italic">Швидка доставка</p></div>
                    </div>
                    <div className="d-flex align-items-center gap-15"><img src="images/24:7_connect.svg" alt="services"/>
                      <div><p className="mb-0 fst-italic">Завжди на звʼязку</p></div>
                    </div>
                    <div className="d-flex align-items-center gap-15"><img src="images/gift.svg" alt="services"/>
                      <div><p className="mb-0 fst-italic">Кожному улюбленцю - подарунок</p></div>
                    </div>
                    <div className="d-flex align-items-center gap-15"><img src="images/discount.svg" alt="services"/>
                      <div><p className="mb-0 fst-italic">Кожен тиждень нові акції</p></div>
                    </div>
                    <div className="d-flex align-items-center gap-15"><img src="images/payments.svg" alt="services"/>
                      <div><p className="mb-0 fst-italic">Доступні ціни</p></div>
                    </div>
               </div>
              </div>
             </div>
           </div>
      </section>
      <section className="new-wrapper py-5 px-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Link className="section-heading fs-2">Новинки</Link>
            </div>
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
      <section className="promotion-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Link className="section-heading fs-2">Акції та знижки</Link>
            </div>
            <div className="row">
              <Promotion />
              <Promotion />
              <Promotion />
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex h-100">
                <div className="brand-logo">
                  <img src="images/logos/01.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/02.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/03.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/04.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/05.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/06.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/08.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/09.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/010.png" alt="brands"/>
                </div>
                <div className="brand-logo">
                  <img src="images/logos/011.png" alt="brands"/>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row mx-3">
            <div className="col-12">
              <h3 className="section-heading">Корисні статті</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;


