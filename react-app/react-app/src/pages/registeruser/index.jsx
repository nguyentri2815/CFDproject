export default function RegisterUser() {
    return (
      <>
        <div className="modal" id="login">
          <form className="modal-form">
            <div className="form-group">
              <div className="close">+</div>
              <h3 className="form-title">Đăng ký</h3>
              <input
                className="form-input"
                name="name"
                type="text"
                placeholder="Email"
              />
              <input
                className="form-input"
                name="pass"
                type="text"
                placeholder="Mật khẩu"
              />
              <input
                className="form-input"
                name="re-pass"
                type="text"
                placeholder="Nhập lại Mật khẩu"
              />
              <a className="form-btn form-btn-login" href="fdfds">
                ĐĂNG Ký
              </a>
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
  