export default function TabContent() {
  return (
    <>
      <div className="member-content__right">
        <div className="member-content__right-item active" id="info">
          <form className="info" id="info" action>
            <div className="info-group pdt">
              <p>
                Họ và tên<span>*</span>
              </p>
              <input
                className="form-input"
                name="email"
                type="text"
                valua="nguyen van tri"
              />
            </div>
            <div className="info-group">
              <p>
                Số điện thoại<span>*</span>
              </p>
              <input
                className="form-input"
                name="email"
                type="phone"
                valua={"0969473360"}
              />
            </div>
            <div className="info-group">
              <p>
                Email<span>*</span>
              </p>
              <input
                className="form-input"
                name="email"
                type="phone"
                disabled="disabled"
                valua="nguyentri2815@gmail.com"
              />
            </div>
            <div className="info-group">
              <p>
                Facebook<span>*</span>
              </p>
              <input
                className="form-input"
                name="email"
                type="phone"
                placeholder="Facebook url"
                valua="https://www.facebook.com/nguyentri2815/"
              />
            </div>
            <div className="info-group">
              <p>
                Skype<span>*</span>
              </p>
              <input
                className="form-input"
                name="email"
                type="phone"
                valua
                placeholder="Skype url"
              />
            </div>
            <a className="btn-form" href>
              luu lai
            </a>
          </form>
        </div>
        <div className="member-content__right-item" id="my-course">
          <div className="my-course">
            <a href>
              <img src="./images/member/img.jpg" alt="" />
            </a>
            <div className="my-course__info">
              <h3>front-end căn bản</h3>
              <span>Khai giảng ngày 09/09/2019</span>
              <div className="my-course__info-group">
                <p>
                  <i>
                    <img src="./images/member/clock.svg" alt="" />
                  </i>
                  <b>54 giờ</b>
                </p>
                <p>
                  {" "}
                  <b>25 video</b>
                </p>
                <p>
                  <i>
                    <img src="./images/member/user.svg" alt="" />
                  </i>
                  <b>20 học viên</b>
                </p>
              </div>
              <div className="my-course__info-line">
                <div className="rage" />
                <span>12%</span>
              </div>
              <a className="btn btn-trans" href>
                Tiếp tục học
              </a>
            </div>
          </div>
        </div>
        <div className="member-content__right-item" id="project">
          <div className="project">
            <div className="row">
              <div className="col-md-6">
                <div className="box-thumb">
                  <div className="box-thumb__img">
                    <img
                      className="img"
                      src="./images/member/img2.jpg"
                      alt=""
                    />
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
                      <a href>GboxMB</a>
                    </h3>
                    <p>
                      Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                    </p>
                  </div>
                  <div className="box-thumb__author">
                    <div className="author">
                      <div className="author-img">
                        <img src="./images/home/avt.jpg" alt="" />
                      </div>
                      <h4>Trần Nghĩa</h4>
                    </div>
                    <div className="author-btn">
                      <a href>Đăng ký</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box-thumb">
                  <div className="box-thumb__img">
                    <img
                      className="img"
                      src="./images/member/img2.jpg"
                      alt=""
                    />
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
                      <a href>GboxMB</a>
                    </h3>
                    <p>
                      Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                    </p>
                  </div>
                  <div className="box-thumb__author">
                    <div className="author">
                      <div className="author-img">
                        <img src="./images/home/avt.jpg" alt="" />
                      </div>
                      <h4>Trần Nghĩa</h4>
                    </div>
                    <div className="author-btn">
                      <a href>Đăng ký</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-btn">
              <a className="btn" href>
                <img src="./images/member/upload.svg" alt="" />
                <span>tai len</span>
              </a>
            </div>
          </div>
        </div>
        <div className="member-content__right-item" id="pay">
          <ul className="pay">
            <li>
              <h3>Khóa học CFD1-offline</h3>
              <span>09/09/2020</span>
              <span>3.500.000 VND</span>
            </li>
            <li>
              <h3>Khóa học CFD1-offline</h3>
              <span>09/09/2020</span>
              <span>3.500.000 VND</span>
            </li>
            <li>
              <h3>Khóa học CFD1-offline</h3>
              <span>09/09/2020</span>
              <span>3.500.000 VND</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
