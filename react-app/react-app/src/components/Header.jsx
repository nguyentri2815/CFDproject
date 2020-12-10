import { useContext } from "react";
import { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth } from "../core/hooks/useAuth";
import { AuthContext } from "../core/hooks/useAuth";
export default function Header() {
  
  // let {user} = useContext(AuthContext)
  // // console.log(user);

  let { user} = useAuth();
  
  function togleMenu(e) {
    e.preventDefault();
    let elementNav = document.querySelector(".nav");
    elementNav.classList.toggle("active");
  }


  return (
    <>
      <div className="preloader loaded" id="preloader">
        <img src="./images/layout/preload.gif" alt="" />
      </div>
      {/*start header*/}
      <div className="header">
        <div className="header__bar">
          <a
            className="show-content"
            href="adsa"
            data-show="nav"
            onClick={togleMenu}
          >
            <img src="./images/home/iconbar.svg" alt="" />
            <span>MENU</span>
          </a>
        </div>
        <h1 className="header__logo">
          <a href="index.html">
            <img src="./images/home/logo.svg" alt="" />
          </a>
        </h1>
        <div className="header__login">
          {user.name ? (
            <div>{user.name}</div>
          ) : (
            <div>
              <a
                className="header__btn header__btn-login show-content"
                href="fsdf"
                data-show="login"
              >
                đăng nhập
              </a>
              <a
                className="header__btn header__btn-signup show-content"
                href="fsdf"
                data-show="login"
              >
                đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
      <ul className="nav modal" id="nav">
        <li>
          <a
            className="nav-btn btn-login show-content"
            href="dfd"
            data-show="login"
          >
            đăng nhập
          </a>
          <a
            className="nav-btn btn-signup show-content"
            href="gfdg"
            data-show="login"
          >
            đăng ký
          </a>
        </li>
        <li>
          <Link to="/">trang chủ</Link>
        </li>
        <li>
          <Link to="/hoc-vien">profile</Link>
        </li>
        <li>
          <Link to="/register">đăng ký</Link>
        </li>
        <li>
          <Link to="/lien-he">liên hệ</Link>
        </li>
        {/* <li>
          <Link to="/">liên hệ</Link>
        </li> */}
      </ul>
      <div className="modal" id="login">
        <form className="modal-form">
          <div className="form-group">
            <div className="close">+</div>
            <h3 className="form-title">Đăng nhập</h3>
            <input
              className="form-input"
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              className="form-input"
              name="email"
              type="text"
              placeholder="Mật khẩu"
            />
            <div className="remember">
              <div className="checkbox">
                <input
                  id="vehicle1"
                  type="checkbox"
                  name="vehicle1"
                  defaultValue="Bike"
                />
                <label htmlFor="vehicle1"> Nhớ mật khẩu</label>
              </div>
              <span className="mess-error" />
            </div>
            <a className="form-btn form-btn-login" href="fdfds">
              ĐĂNG NHẬP
            </a>
            <h4>hoặc đăng nhập bằng</h4>
            <a className="form-btn form-btn-google" href="gsgf">
              <img src="./images/home/google-symbol 1.svg" alt="" />
              Google
            </a>
          </div>
        </form>
      </div>
      <div className="overlay" />
    </>
  );
}
