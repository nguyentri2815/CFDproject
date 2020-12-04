export default function MyCource() {
  return (
    <>
      <div className="member-content__right-item" id="my-course">
        <div className="my-course">
          <a href>
            <img src=".././images/member/img.jpg" alt="" />
          </a>
          <div className="my-course__info">
            <h3>front-end căn bản</h3>
            <span>Khai giảng ngày 09/09/2019</span>
            <div className="my-course__info-group">
              <p>
                <i>
                  <img src=".././images/member/clock.svg" alt="" />
                </i>
                <b>54 giờ</b>
              </p>
              <p>
                {" "}
                <b>25 video</b>
              </p>
              <p>
                <i>
                  <img src=".././images/member/user.svg" alt="" />
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
    </>
  );
}
