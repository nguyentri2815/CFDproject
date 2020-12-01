export default function FeedBack() {
  return (
    <>
      <div className="home-feedback">
        <div className="container">
          <div className="home-feedback__title">
            <div className="title">
              <span>cảm nhận</span>
              <h3 className="title-name title-home">thành viên</h3>
            </div>
          </div>
          <div className="home-feedback__slide">
            <div className="slide-left col-xl-7 col-lg-6 col-md-6 col-sm-12 order-md-1 order-2">
              <div className="slide-left__item active" id="text-1">
                <div className="slide-left__item-title">
                  <div className="title-left">
                    <h3>tiến tài</h3>
                    <span>thành viên CFD1</span>
                  </div>
                  <div className="title-right">
                    <img src="./images/home/rightquote.svg" alt="" />
                  </div>
                </div>
                <div className="slide-left__item-decs">
                  <p>
                    Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                    trình front-end qua khóa học. Like cho 4 mentor.
                  </p>
                </div>
                <div className="slide-left__item-info">
                  <a href>
                    <img src="./images/home/facebook.svg" alt="" />
                  </a>
                  <span className="date">02/10/2020</span>
                </div>
              </div>
              <div className="slide-left__item" id="text-2">
                <div className="slide-left__item-title">
                  <div className="title-left">
                    <h3>tiến tài 2</h3>
                    <span>thành viên CFD2</span>
                  </div>
                  <div className="title-right">
                    <img src="./images/home/rightquote.svg" alt="" />
                  </div>
                </div>
                <div className="slide-left__item-decs">
                  <p>
                    Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                    trình front-end qua khóa học. Like cho 4 mentor.{" "}
                  </p>
                </div>
                <div className="slide-left__item-info">
                  <a href>
                    <img src="./images/home/facebook.svg" alt="" />
                  </a>
                  <span className="date">02/10/2020 </span>
                </div>
              </div>
            </div>
            <div className="slide-right col-xl-4 col-lg-5 col-md-5 col-sm-12 order-md-2 order-1">
              <div className="slide-right__item active" data-text="text-1">
                <img src="./images/home/Rectangle55.jpg" alt="" />
              </div>
              <div className="slide-right__item" data-text="text-2">
                <img src="./images/home/Rectangle55.jpg" alt="" />
              </div>
            </div>
            <div className="slide-control">
              <a className="bghover btnprev" href>
                <img src="./images/home/arrowl.svg" alt="" />
              </a>
              <a className="bghover btnNext" href>
                <img src="./images/home/arrowr.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
