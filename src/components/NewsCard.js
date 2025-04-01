import React from "react";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <>
    <div className="news-card">
            <div className="card-image">
                <img src="images/news/13.png" className="img-fluid w-100" alt="news"/>
            </div>
            <div className="news-content">
                <p className="date">1 Січ, 2024</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quam quis temporibus quo? Reiciendis architecto, doloremque iusto sapiente iure blanditiis earum ut accusamus sed, rerum sint?</p>
                <Link to="/" className="button-dark">Читати далі</Link>
            </div>
        </div>
        <div className="news-card">
                <div className="card-image">
                    <img src="images/news/14.png" className="img-fluid w-100" alt="news"/>
                </div>
            <div className="news-content">
                <p className="date">1 Бер, 2024</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quam quis temporibus quo? Reiciendis architecto, doloremque iusto sapiente iure blanditiis earum ut accusamus sed, rerum sint?</p>
                <Link to="/" className="button-dark">Читати далі</Link>
            </div>
        </div>
    </>
  )
}

export default NewsCard;