import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Favorite = () => {
  return (
    <>
      <Meta title={"Улюбленні"} />
      <BreadCrumb title=" Улюбленні" />

    <div className="favorite-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2">
          <div className="favorite-card position-relative">
                <img
                    src="images/close.svg"
                    className="position-absolute cross img-fluid"
                    alt="cross"
                />
                <div className="favorite-card-image">
                <img
                        src="images/product/2.png"
                        className="img-fluid w-100"
                        alt="product"
                    />
                </div>
                <div className="py-3 px-3 align-items-center">
                    <h6 className="brand">AD - Spiky</h6>
                    <h5 className="title">Сухий корм для собак з яловичиною 10 кг</h5>
                    <h6 className="price">310 грн</h6>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Favorite;