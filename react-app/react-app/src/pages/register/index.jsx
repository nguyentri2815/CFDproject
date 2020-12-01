import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Register() {
    let [form, setForm] = useState({
        name:'',
        phone:'',
        email:'',
        facebook:'',
        payment:'',
        note:''
    });
    function submit(e){
        e.preventDefault();
        // console.log(form);
        let flag=true;
        if (form.name ===""){
            console.log("ko duwoc de trong");
            // return false;
            flag=false;
        }
        if (form.phone ===""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if (form.email === ""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if (form.facebook === ""){
            console.log("ko duwoc de trong");
            flag=false;
        }
        if(flag){
            console.log('ajax');
        }   
    }
    function inputChange(e){
        // console.log(e.target.name);
        // ler obj ={};
        setForm({
            ...form,
            [e.target.name]: e.target.valua
        })
    }
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="RegisterCourse">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="RegisterCourse__content">
                  <div className="title">
                    <span>đăng ký</span>
                    <h3 className="title-name title-home">
                      thực chiến front-end căn bản
                    </h3>
                  </div>
                  <div className="RegisterCourse__content-form">
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
                          valua={form.name}
                          onChange={inputChange}
                        />
                      </div>
                      <div className="info-group">
                        <p>
                          Số điện thoại<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="phone"
                          type="phone"
                          placeholder="Số điện thoại"
                          valua={form.phone}
                          onChange={inputChange}
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
                          valua={form.email}
                          onChange={inputChange}
                        />
                      </div>
                      <div className="info-group">
                        <p>
                          Facebook<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="facebook"
                          type="phone"
                          placeholder="https://facebook.com"
                          valua={form.facebook}
                          onChange={inputChange}
                        />
                      </div>
                      <div className="info-group">
                        <p>Hình thức thanh toán</p>
                        <select className="select" name="payment" id="select" onChange={inputChange}>
                          <option value={form.payment}>
                            Chuyển khoản
                          </option>
                          <option value={form.payment} >
                            Thanh toán tiền mặt
                          </option>
                        </select>
                      </div>
                      <div className="info-group">
                        <p>Ý kiến cá nhân</p>
                        <input
                          className="form-input"
                          name="note"
                          type="phone"
                          valua={form.note}
                          placeholder="Định hướng và mong muốn của bạn."
                          onChange={inputChange}
                        />
                      </div>
                      <a onClick={submit} className="btn-form" href="true">
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
