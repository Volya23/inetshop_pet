import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Favorite = () => {
  return (
    <>
      <Meta title={"Улюбленні"} />
      <BreadCrumb title=" Улюбленні" />

      <div className="favorite-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
             <div className="favorite-product-card position-relative">
                <button type="button" className="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                  <img
                    src="images/product/2.png"
                    className="img-fluid"
                    alt="product"
                  />
                      <div className="align-items-center">
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