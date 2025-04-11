import React from "react";
import Meta from "../components/Meta";

const Adoption = () => {
  return (
    <>
    <Meta title={"Блог"} />
      
      <div className="adopt-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
                <div className="main-banner position-relative min-vw-120">
                            <img
                                src="images/Banner-1.png"
                                className="img-fluid rounded-3"
                                alt="banner adoption"
                            />
                            <div className="main-banner-content position-absolute d-flex flex-column align-items-center w-50 h-100 d-inline-block">
                            <h1 className="">Не пр<img src="images/paw_banner-1.png" className="banner d-inline-block" alt="paw" />ходь повз</h1>
                                <p>Ми можемо їм допомогти</p>
                            </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adoption;