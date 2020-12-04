import { Link, Route } from "react-router-dom";

export default function CourseCard({title,desc,img,id="16"}) {
  return (
    <>
      <div className="box-thumb">
        <div className="box-thumb__img">
          <img className="img" src={img} alt="" />
          <div className="box-thumb__overlay">
            <div className="box-thumb__overlay-icon">
              <ul>
                <li>
                  <img src="./images/home/user.png" alt="" />
                  <span>12</span>
                </li>
                <li>
                  <img src="./images/home/heart.png" alt="" />
                  <span>100</span>
                </li>
              </ul>
            </div>
            <a className="box-thumb__viewmore" href>
              <img src="./images/home/viewmore.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="box-thumb__content">
          <h3>
            <a href>{title}</a>
          </h3>
          <p>{desc}</p>
        </div>
        <div className="box-thumb__author">
          <div className="author">
            <div className="author-img">
              <img src="./images/home/avt.jpg" alt="" />
            </div>
            <h4>Trần Nghĩa</h4>
          </div>
          <div className="author-btn">
            <Link to={`/dang-ky/${id}`}> Đăng ký</Link>
            {/* <a href></a> */}
          </div>
        </div>
      </div>
    </>
  );
}
