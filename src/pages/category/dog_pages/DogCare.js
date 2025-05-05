import React, { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Meta from "../../../components/Meta";
import ReactStars from "react-stars";
import PromoCard from "../../../components/PromoCard";

const DogCare = () => {
    const [grid, setGrid] = useState(4);
  return (
    <>
    <Meta title={"Собаки"} />
    <BreadCrumb title=" Догляд для собак" />

    <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card rounded-top-3">
                      <h3 className="filter-title">Бренд</h3>
                    <div>
                      <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">Royal Canin (27)</label>
                      </div>
                      <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">Acana (7)</label>
                      </div>
                        <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">Farmina (3)</label>
                      </div>
                      <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">Hill's (3)</label>
                      </div>
                      <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">1st Choice (1)</label>
                      </div>
                      <div className="form-check">
                          <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                          />
                          <label className="form-check-label" htmlFor="">Amity (0)</label>
                      </div>
                    </div>
                </div>
                  <div className="filter-card">
                      <h3 className="filter-title">Вид</h3>
                    <div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Засоби для купання</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Сухі засоби</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Обладнення</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Інструменти</label>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card">
                      <h3 className="filter-title">Форма випуску</h3>
                    <div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Шампунь</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Гель</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Паста</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Спрей</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Порошок</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Бальзам</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Кондиціонер</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Серветки</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Крем</label>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card">
                      <h3 className="filter-title">Призначення</h3>
                    <div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Для цуценят</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Для обʼєму</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Для блиску</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Глибоке очищення</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Гіпоалергенний</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Для довгої шерсті</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Легке розчісування</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Проти лупи</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Лікувальна дія</label>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card">
                      <h3 className="filter-title">Країна виробник</h3>
                    <div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Україна</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Сербія</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Італія</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Польща</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Канада</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Іспанія</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Угорщина</label>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card rounded-bottom-3">
                        <h5 className="filter-title">Ціна</h5>
                      <div className="d-flex align-items-center gap-10">
                        <div className="form-floating mb-3">
                          <input
                              type="email"
                              className="form-control"
                              id="floatingInputFrom"
                              placeholder="Від"
                          />
                            <label htmlFor="floatingInput">Від</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputTo"
                                placeholder="До"
                            />
                              <label htmlFor="floatingInput">До</label>
                        </div>
                      </div>
                  </div>
                  <div className="filter-card rounded-3 mt-4">
                        <h3 className="filter-title">Випадкові товари</h3>
                      <div className="random-products mb-3 d-flex">
                        <div className="w-50">
                          <img
                              src="images/product/2.png"
                              className="img-fluid"
                              alt="kitty_food"
                          />
                        </div>
                        <div className="w-50">
                          <h5 className="text-center mt-5">Royal Canin до 12 місяців</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              value={4.5}
                              edit={false}
                              color2={"#ffd700"}
                            />
                            <b><span>299 грн</span> &nbsp; <strike>345 грн</strike></b>
                        </div>
                      </div>
                      <div className="random-products d-flex">
                        <div className="w-50">
                          <img
                               src="images/product/2.png"
                              className="img-fluid"
                              alt="kitty_food"
                          />
                        </div>
                        <div className="w-50">
                          <h5 className="text-center mt-5">Royal Canin до 12 місяців</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              value={4.5}
                              edit={false}
                              color2={"#ffd700"}
                            />
                            <b><span>299 грн</span> &nbsp; <strike>345 грн</strike></b>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="col-9">
                  <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 d-block">Сортування:</p>
                        <select name="" className="form-control form-select" id="">
                          <option value="manual" selected="selected">за замовчуванням</option>
                          <option value="best-selling">популярні</option>
                          <option value="title-ascending">за назвою</option>
                          <option value="price-ascending">спочатку дешевше</option>
                          <option value="price-descending">спочатку дорожче</option>
                          <option value="created-ascending">спочатку нові</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img 
                        onClick={() => { setGrid(3); console.log("Grid set to 3"); }}
                        src="images/4-v.svg" 
                        className="d-block img-fluid" 
                        alt="grid" 
                      />
                      <img
                        onClick={() => { setGrid(4);}}
                        src="images/3-v.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img 
                        onClick={() => { setGrid(6);}}
                        src="images/2-v.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img 
                        onClick={() => { setGrid(12);}}
                        src="images/3-h.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                    </div>
                    <div className="products-list pb-5">
                      <div className="d-flex gap-10 flex-wrap">
                        <PromoCard key={grid} grid={grid} />
                      </div>
                </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default DogCare;