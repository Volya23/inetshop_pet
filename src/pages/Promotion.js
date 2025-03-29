import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";


const Promotion = () => {
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
                <div className="col-9"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Promotion;