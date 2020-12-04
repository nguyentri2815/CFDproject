import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyCource from "./components/MyCourse";
import MyProfile from "./components/MyProfile";
import MyProject from "./components/MyProject";
import MyPay from "./components/MyPay";
import { Link, NavLink, Route, Router, Switch, useRouteMatch } from "react-router-dom";
export default function Profile() {
  let { url } = useRouteMatch();
  return (
    // <Router>
      <div className="wrapper">
        {/* <Header></Header> */}
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
                  <div className="member-content__left">
                    <ul>
                      <li>
                        <NavLink
                          to={`${url}`}
                          data-content="info"
                          exact
                        >
                          Thông tin tài khoản
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/khoa-hoc`} data-content="my-course">
                          khóa học của bạn
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/du-an`} data-content="project">
                          dự án đã làm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/thanh-toan`} data-content="pay">
                          lịch sử thanh toán
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="member-content__right">
                    <Switch>
                      <Route path={`${url}/khoa-hoc`}>
                        <MyCource/>
                      </Route>
                      <Route path={`${url}/du-an`}>
                        <MyProject/>
                      </Route>
                      <Route path={`${url}/thanh-toan`}>
                        <MyPay/>
                      </Route>
                      <Route exact path={`${url}`}>
                        <MyProfile/>
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end member        */}
        {/* <Footer></Footer> */}
      </div>
    // </Router>
  );
}
