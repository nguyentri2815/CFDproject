export default function MyProfile() {
  return (
    <>
      <div className="member-content__right-item active" id="info">
        <form className="info" id="info" action="true">
          <div className="info-group pdt">
            <p>
              Họ và tên<span>*</span>
            </p>
            <input
              className="form-input"
              name="email"
              type="text"
              valua="nguyen van tri"
            />
          </div>
          <div className="info-group">
            <p>
              Số điện thoại<span>*</span>
            </p>
            <input
              className="form-input"
              name="email"
              type="phone"
              valua={"0969473360"}
            />
          </div>
          <div className="info-group">
            <p>
              Email<span>*</span>
            </p>
            <input
              className="form-input"
              name="email"
              type="phone"
              disabled="disabled"
              valua="nguyentri2815@gmail.com"
            />
          </div>
          <div className="info-group">
            <p>
              Facebook<span>*</span>
            </p>
            <input
              className="form-input"
              name="email"
              type="phone"
              placeholder="Facebook url"
              valua="https://www.facebook.com/nguyentri2815/"
            />
          </div>
          <div className="info-group">
            <p>
              Skype<span>*</span>
            </p>
            <input
              className="form-input"
              name="email"
              type="phone"
              valua="taadsa"
              placeholder="Skype url"
            />
          </div>
          <a className="btn-form" href="true">
            luu lai
          </a>
        </form>
      </div>
    </>
  );
}
