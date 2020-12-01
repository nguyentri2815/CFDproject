import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from 'react';
export default function Contact() {
    let [form, setForm] = useState({
        name:'',
        email:'',
        title:'',
        content:""
    });

    function submit(e){
        e.preventDefault();
        let flag=true;
        if (form.name ===""){
            console.log("ko duwoc de trong");
            // return false;
            flag=false;
        }
        if (form.email === ""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if (form.title === ""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if (form.content === ""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if(flag){
            console.log('ajax');
        }   
    }
    function inputChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.valua
        })
    }
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="contact__content">
                  <div className="title">
                    <span>đăng ký</span>
                    <h3 className="title-name title-home">
                      thực chiến front-end căn bản
                    </h3>
                  </div>
                  <div className="contact__content-form">
                    <form className="info" action="true">
                      <div className="info-group pdt">
                        <p>
                          Họ và tên<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="name"
                          type="text"
                          placeholder="Họ và tên bạn"
                          valua="nguyen van tri"
                        />
                      </div>
                      <div className="info-group">
                        <p>Số điện thoại</p>
                        <input
                          className="form-input"
                          name="email"
                          type="phone"
                          placeholder="Số điện thoại"
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
                          placeholder="Email của bạn"
                          valua="nguyentri2815@gmail.com"
                        />
                      </div>
                      <div className="info-group">
                        <p>
                          Website
                        </p>
                        <input
                          className="form-input"
                          name="email"
                          type="phone"
                          placeholder="Đường dẫn website http://"
                          valua="https://www.facebook.com/nguyentri2815/"
                        />
                      </div>
                      <div className="info-group">
                        <p>
                            Tiêu đề<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="title"
                          type="phone"
                          placeholder="Tiêu đề liên hệ"
                          valua="https://www.facebook.com/nguyentri2815/"
                        />
                      </div>
                      <div className="info-group">
                        <p>
                          Nội dung<span>*</span>
                        </p>
                        <textarea
                          className="review"
                          id="review"
                          name="content"
                          defaultValue={""}
                        />
                      </div>
                      <a onClick={submit} className="btn-form" href>
                        đăng ký
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
