export default function LoginUser() {
  return (
    <>
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
    </>
  );
}
