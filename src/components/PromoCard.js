import ReactStars from "react-stars";
import React from "react";
import { Link, useLocation } from "react-router-dom";

 const PromoCard = (props)  => {
    const { grid } = props;
    console.log("Grid received in ProductCard:", grid);
    let location = useLocation();

     return (
        <>
         <div className={` ${location.pathname === "/promotion" ? `gr-${grid}` : "col-3"}`}>
         <Link className="product-card position-relative">
             <div className="wishlist-icon position-absolute">
                 <Link>
                     <img src="images/favorite.svg" alt="addcard" />
                 </Link>
             </div>
                 <div className="product-image">
                    <img src="images/product/1.png" className="img-fluid" alt="product" />
                    <img src="images/product/1.1.png" className="img-fluid" alt="product" />
                 </div>
                 <div className="product-details">
                     <h6 className="brand">AD - Spiky зі смаком яловичини</h6>
                     <h5 className="product-title">Сухий корм Spiky для собак з яловичиною 10 кг</h5>
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dignissimos consequuntur explicabo vel rerum suscipit possimus, beatae asperiores debitis a illum recusandae odio nobis cum!
                    </p>
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
                 </div>
                 <div className="action-bar position-absolute">
                     <div className="d-flex flex-column gap-10">
                         <Link>
                         <img src="images/compare.svg" alt="addcard" />
                         </Link>
                         <Link>
                         <img src="images/eye.svg" alt="addcard" />
                         </Link>
                         <Link>
                         <img src="images/buying.svg" alt="addcard" />
                         </Link>
                     </div>
                 </div>
         </Link>
         </div>
         <div className={` ${location.pathname === "/promotion" ? `gr-${grid}` : "col-3"}`}>
         <Link className="product-card position-relative">
             <div className="wishlist-icon position-absolute">
                 <Link>
                     <img src="images/favorite.svg" alt="addcard" />
                 </Link>
             </div>
                 <div className="product-image">
                    <img src="images/product/1.png" className="img-fluid" alt="product" />
                    <img src="images/product/1.1.png" className="img-fluid" alt="product" />
                 </div>
                 <div className="product-details">
                     <h6 className="brand">AD - Spiky зі смаком яловичини</h6>
                     <h5 className="product-title">Сухий корм Spiky для собак з яловичиною 10 кг</h5>
                     <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dignissimos consequuntur explicabo vel rerum suscipit possimus, beatae asperiores debitis a illum recusandae odio nobis cum!
                    </p>
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
                 </div>
                 <div className="action-bar position-absolute">
                     <div className="d-flex flex-column gap-10">
                         <Link>
                         <img src="images/compare.svg" alt="addcard" />
                         </Link>
                         <Link>
                         <img src="images/eye.svg" alt="addcard" />
                         </Link>
                         <Link>
                         <img src="images/buying.svg" alt="addcard" />
                         </Link>
                     </div>
                 </div>
         </Link>
         </div>
        </>
   )
 }
 
 export default PromoCard;