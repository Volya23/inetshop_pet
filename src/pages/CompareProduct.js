import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";


const CompareProduct = () => {
  return (
    <>
      <Meta title={"Порівняння"} />
      <BreadCrumb title=" Порівняння" />

      <div className="compare-product-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn-close" aria-label="Close"></button>
              </div>
                <div className="product-card-image">
                    <img
                        src="images/product/1.1.png"
                        className="img-fluid"
                        alt="product"
                    />
                </div>
                <div className="compare-product-details">
                    <h5 className="title">
                        Spiky. Сухий корм для дорослих собак з яловичиною. 10кг
                    </h5>
                    <h6 className="price mb-3">310 грн</h6>
                    <div>
                        <div className="product-detail">
                            <h5>Бренд:</h5>
                            <p>Spiky</p>
                        </div>
                        <div className="product-detail">
                            <h5>Бренд:</h5>
                            <p>Spiky</p>
                        </div>
                        <div className="product-detail">
                            <h5>Бренд:</h5>
                            <p>Spiky</p>
                        </div>
                        <div className="product-detail">
                            <h5>Бренд:</h5>
                            <p>Spiky</p>
                        </div>
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

export default CompareProduct;