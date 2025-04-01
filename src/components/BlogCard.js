import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog/frame-1.png" className="img-fluid w-100" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">1 Лют, 2023</p>
                <h5 className="title">Хто такий померанський шпіц? Як визначити померанського шпіца</h5>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quam quis temporibus quo? Reiciendis architecto, doloremque iusto sapiente iure blanditiis earum ut accusamus sed, rerum sint? Perferendis veritatis corporis rerum laboriosam. Debitis, illo et vitae provident quis est libero perspiciatis ipsa nulla porro enim doloremque!</p>
                <Link to="/" className="button-dark">Читати</Link>
            </div>
        </div>
  )
}

export default BlogCard;