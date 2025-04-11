import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";




const SingleNews = () => {
  return (
    <>
    <Meta title={"Новина"} />
    <BreadCrumb title=" Назва новини" />

    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-news-card">
                <h3 className="title text-center mb-4">Хто такий померанський шпіц?</h3>
                <img src="/images/news/13.png" className="img-fluid w-100" alt="news"/>
                <p className="text-center mt-3"><b>Померанський шпіц (пом, мініатюрний шпіц)</b> - собака з породи шпіців, найменший її представник. <br/></p>

<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, porro?<br/></p>
<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed!<br/></p>
<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed!<br/></p>
<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed!<br/></p>
<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed!<br/></p>
<p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo commodi voluptatem ipsam praesentium id libero eum. Laborum dolorum eos hic, ab accusantium adipisci est voluptatum impedit unde, numquam aspernatur et. Dolorem optio eius quasi molestiae saepe voluptate odio, laborum animi quae nam mollitia ab. Tempore ipsum illum optio, adipisci, excepturi modi at est amet inventore quo cum repellat ab culpa ex enim, eum sed!<br/></p>

<Link to="/news" className="d-flex align-items-center text-black justify-content-end gap-10"><HiOutlineArrowLeft />Назад до новин</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>

  )
}

export default SingleNews;