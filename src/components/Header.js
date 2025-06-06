import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
              <Link to="/payment" className="header-top-strip-link text-black fs-5">Оплата та доставка</Link>
          </div>
          <div className="col-6">
            <div className="dropdown d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-light btn-secondary dropdown-toggle bg-transparent border-0 gap-15 text-black d-flex align-items-center fs-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                      <img src="images/account.svg" alt="account"/>
                      <span className="me-6 d-inline-block">Кабінет</span>
              </button>
                <ul className="dropdown-menu"
                    area-aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/signon">Реєстрація</a></li>
                    <li><a className="dropdown-item" href="/signin">Вхід</a></li>
                    </ul>
          </div>
          </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link to="/">
                  <img className="logo" src="images/Group 3.svg" alt="Hürrem" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-5">
          <div className="input-group">
            <input
            type="text"
            className="form-control py-2"
            placeholder="Пошук по магазину..."
            aria-label="Пошук по магазину..."
            aria-describedby="basic-addon2"
            />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6"/>
              </span>
          </div>
          </div>
          <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-around">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-black">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">Порівняння</p>
                  </Link>
                </div>
                <div>
                  <Link to="/favorite" className="d-flex align-items-center gap-10 text-black">
                    <img src="images/favorite.svg" alt="favorite" />
                    <p className="mb-0">Улюблені</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-black">
                    <img src="images/basket.svg" alt="basket" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0"> 500 грн</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center ps-5 gap-30">
              <div>
                <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="images/menu.svg" alt=""/>
                      <span className="me-6 d-inline-block">Категориї</span>
                    </button>
                    <ul
                    className="dropdown-menu"
                    area-aria-labelledby="dropdownMenuButton1"
                    >
                      <li><a className="dropdown-item" href="/dog">Товари для собак</a>
                      </li>
                      <li><a className="dropdown-item" href="/cat">Товари для котів</a></li>
                      <li><a className="dropdown-item" href="/rodent">Товари для гризунів</a></li>
                      <li><a className="dropdown-item" href="/bird">Товари для пернатих</a></li>
                      <li><a className="dropdown-item" href="/reptile">Товари для рептилій</a></li>
                      <li><a className="dropdown-item" href="/finfish">Товари для риб</a></li>
                    </ul>
                 </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Головна</NavLink>
                  <NavLink to="/promotion">Акції</NavLink>
                  <NavLink to="/news">Новини</NavLink>
                  <NavLink to="/blog">Блог</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;





