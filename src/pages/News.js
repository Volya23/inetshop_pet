import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import NewsCard from "../components/NewsCard";

const News = () => {
  return (
    <>
      <Meta title={"Новини"} />
      <BreadCrumb title=" Новини" />
      <div className="news-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                  <NewsCard />
                </div>
                <div className="col-4">
                  <NewsCard />
                </div>
                <div className="col-4">
                  <NewsCard />
                </div>
            </div>
        </div>
      </div>
    </>
  )
};

export default News;
              