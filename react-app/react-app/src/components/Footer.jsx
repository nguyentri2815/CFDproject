export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>
                  Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên
                  khác biệt.
                </h3>
                <div className="adress">
                  <p>Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh</p>
                  <a href>(+84) 98 9596 913</a>
                </div>
                <div className="sosical">
                  <a href>
                    <img src="./images/home/facebook.svg" alt="" />
                  </a>
                  <a href>
                    <img src="./images/home/email.svg" alt="" />
                  </a>
                  <a href>
                    <img src="./images/home/skype.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mgl-auto">
                <ul className="footer-top__list">
                  <li>
                    <a href>trang chủ</a>
                  </li>
                  <li>
                    <a href>khóa học</a>
                  </li>
                  <li>
                    <a href>thanh toán</a>
                  </li>
                  <li>
                    <a href>điều kiện</a>
                  </li>
                </ul>
              </div>
              <div className="back-to-top" id="back-to-top">
                <div className="line" />
                <span>CUỘNG LÊN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="container">
            <div className="footer-bot__content">
              <p>© 2020 Bản quyền thuộc về CFD</p>
              <p>Được thiết kế và lập trình bởi CFD Team</p>
            </div>
          </div>
        </div>
      </div>
      {/*end footer*/}
      {/*start back to top*/}
      <div className="back-to-top" id="back-to-top">
        <a href="fasfs">
          <i className="fas fa-arrow-up" />
        </a>
      </div>
      {/*end back to top*/}
    </>
  );
}
