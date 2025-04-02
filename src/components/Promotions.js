import React from "react"
import ReactStars from "react-stars";
import { Link } from "react-router-dom";


const Promotions = () => {
  return (
    <div className="col-4">
        <div className="promotion-card d-flex align-items-center p-4">
            <div className="promo-image">
                <img src="images/product/1.png" alt="dogFood" />
            </div>
            <div className="promotion-content ms-3">
                <h5 className="brand">AD - Spiky<br/>зі смаком яловичини</h5>
                <h6 className="title">Сухий корм Spiky для собак з яловичиною<br/>10 кг</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        color2={"#ffd700"}
                    />
                    <p className="price">
                        <span className="red-p">299 грн</span> &nbsp; <strike>345 грн</strike>
                    </p>
                <div className="discount-till d-flex align-items-center">
                    <p className="mb-0 me-2">
                        <b>5</b>днів
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="timing badge rounded-circle bg-danger">1</span> : 
                        <span className="timing badge rounded-circle bg-danger">15</span> : 
                        <span className="timing badge rounded-circle bg-danger">49</span>
                    </div>
                  </div>
                    <p className="mt-3">Кількість: 5</p>
                    <div className="progress">
                        <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: "25%"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100">
                        </div>
                    </div>
                <Link className="button-dark mt-3">Купити</Link>
            </div>
        </div>
    </div>
  )
}

export default Promotions;


