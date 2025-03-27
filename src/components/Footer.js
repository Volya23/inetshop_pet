import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTiktok, BsTelegram } from "react-icons/bs";



const Footer = () => {
  return (
    <>
    <footer className="py-4">
    <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <h4 className="mb-4">Про магазин</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="py-2 mb-1">Компанія</Link>
              <Link className="py-2 mb-1">Постачальникам</Link>
              <Link className="py-2 mb-1">Благодійність</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4">Інформація</h4>
            <div className="footer-link d-flex flex-column text-black">
              <Link className="py-2 mb-1">Оплата та доставка</Link>
              <Link className="py-2 mb-1">Повернення</Link>
              <Link className="py-2 mb-1">Бренди</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4">Контакти</h4>
            <div className="footer-link d-flex flex-column">
              <a href="tel:+37 (099)456678" className="mt-3 d-block mb-1">+37 (099)456678</a>
              <a href="mailto:gav@gmail.com" className="mt-2 d-block mb-0">gav@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a href="/">
                  <BsFacebook />
                </a>
                <a href="/">
                  <BsTiktok />
                </a>
                <a href="/">
                  <BsInstagram />
                </a>
                <a href="/">
                  <BsTelegram />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4">Приймаємо</h4>
            <div className="cash_icons d-flex align-items-center gap-30 mt-4">
                  <img className="mono" src="images/mono.svg" alt="mono"/>
                </div>
            <div className="cash_icons d-flex align-items-center gap-30 mt-4">
                  <img src="images/visa.svg" alt="visa"/>
                  <img src="images/mastercard.svg" alt="master"/>
                </div>
                <div className="cash_icons d-flex align-items-center gap-30 mt-4">
                  <img src="images/apple_pay.svg" alt="apple-pay"/>
                  <img src="images/google_pay.svg" alt="google-pay"/>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <Link className="d-flex justify-content-center"><img src="images/logo-1.png" alt="Hürrem" /></Link>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} Hürrem. Всі права захищені.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Footer;