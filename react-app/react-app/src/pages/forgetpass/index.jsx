export default function FogetPass() {
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
                placeholder="nhập Email"
              />
              <a className="form-btn form-btn-login" href="fdfds">
                tiếp theo
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
  