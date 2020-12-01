import CourseCard from "../../../components/CourseCard";
export default function SectionCourse() {
  return (
    <>
      <div className="home-about">
        <div className="container">
          <div className="home-about__content">
            <p>
              The readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <div className="line" />
          </div>
        </div>
      </div>
      <div className="home-course">
        <div className="home-course__online">
          <div className="container">
            <div className="home-course__title">
              <div className="title">
                <span>khóa học</span>
                <h3 className="title-name title-home">online</h3>
              </div>
            </div>
            <div className="home-course__row">
              <div className="row">
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản1"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-course__offline">
          <div className="container">
            <div className="home-course__title">
              <div className="title">
                <span>khóa học</span>
                <h3 className="title-name title-home">offline</h3>
              </div>
            </div>
            <div className="home-course__row">
              <div className="row">
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
                <div className="col-md-4">
                  <CourseCard
                    title="Front-end căn bản2"
                    desc="One of the best corporate fashion brands in Sydney"
                    img="./images/home/imgthumb1.jpg"
                  ></CourseCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
