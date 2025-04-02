import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-stars";
import PromoCard from "../components/PromoCard";

const Promotion = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
        <Meta title={"Акції"} />
        <BreadCrumb title=" Акції" />
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card rounded-top-3">
                    <h3 className="filter-title">Категорії</h3>
                    <div>
                      <ul className="ps-0">
                        <li>Товари для собак</li>
                        <li>Товари для котів</li>
                        <li>Товари для риб</li>
                        <li>Товари для рептилій</li>
                        <li>Товари для пернатих</li>
                        <li>Товари для гризунів</li>
                        <li>Ветеринария</li>
                      </ul>
                    </div>
                </div>
                  <div className="filter-card">
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
                  <div className="filter-card rounded-bottom-3">
                      <h3 className="filter-title">Призначення</h3>
                    <div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Корм</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Одяг та взяття</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Смаколики</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Вітаміни</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Посуд</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Догляд та гігієна</label>
                      </div>
                      <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        />
                        <label className="form-check-label" htmlFor="">Іграшки</label>
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
};

export default Promotion;