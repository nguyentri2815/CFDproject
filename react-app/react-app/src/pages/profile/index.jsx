import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TabContent from "./components/TabContent";
import TabTitle from "./components/TabTitle";

export default function Profile() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        {/*start member*/}
        <div className="member">
          <div className="container">
            <div className="member-info">
              <div className="member-info__img">
                <img src="./images/member/avt.jpg" alt="" />
              </div>
              <h3>trần nghĩa</h3>
              <span>Thành viên của team CFD1-OFFLINE</span>
            </div>
            <div className="member-content">
              <div className="row">
                <div className="col-md-4">
                  <TabTitle></TabTitle>
                </div>
                <div className="col-md-8">
                  <TabContent></TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end member        */}
        <Footer></Footer>
      </div>
    </>
  );
}
