import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useValidataForm from "../../core/hooks/useValidateForm";

// const patternEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// function useValidataForm(initValua,rule) {
//   let [form, setForm] = useState(initValua);
//   let [error, setError] = useState({});
  
//   function inputChange(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value.trim()
//     })
//   }
//   console.log(form);

//   function handleSubmit(e) {
//     // console.log("submid");
//     // e.preventDefault();
//     let {validate, messge} = rule;
//     let errorObj ={}
//     for (let i in validate) {
//       if(i in form ){
//         if(validate[i].required){
//           if(!form[i]){
//             errorObj[i]=messge?.[i]?.required || "truong nay bac buoc"
//           }

//         }

//         if (validate[i].pattern){
//           let pattern =validate[i].pattern
//           if(validate[i].pattern === "email") pattern = patternEmail;
//           if(validate[i].pattern === "phone") pattern = patternPhone;

//           if (!pattern.test(form[i])){
//             errorObj[i]=messge?.[i]?.pattern || "không đúng định dạng"
//           }
//         }
//       }
//     }
//     // console.log(errorObj);
//     setError(errorObj)
//     return Object.keys(errorObj).length>0
    
//   }
//   return {
//     data:form,
//     error,
//     inputChange,
//     onSubmit:handleSubmit
//   }
// }

export default function Register() {
  let {data, error, inputChange, onSubmit}= useValidataForm({
      name:'',
      email:'',
      phone:'',
      facebook:'',
    },{
      validate:{
        name:{
          required:true
        },
        email:{
          required:true,
          pattern:'email'
        },
        phone:{
          required:true,
          pattern:'phone'
        },
        facebook:{
          required:true
        },
      },
      messge:{
        name:{
          required :'ho ten bac buoc'
        },
        email:{
          required:'email bac buoc',
          pattern:'email khong đúng định dạng'
        },
        phone:{
          required:'phone bac buoc',
          pattern:'phone khong đúng định dạng'
        },
        facebook:{
          required:'link facebook bac buoc'
        }
        
      }
    }
  )

  function submit(e){
    e.preventDefault()
    let err = onSubmit();
    if(!err){
      console.log("ko loi");
    }
    
  }
  
  return (
    <>
      <div className="wrapper">
        {/* <Header></Header> */}
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
                    <form className="info" action="">
                      <div className="info-group pdt">
                        <p>
                          Họ và tên<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="name"
                          type="text"
                          placeholder="Họ và tên bạn"
                          valua={data.name}
                          onChange={inputChange}
                        />
                        {error.name && <p>{error.name}</p>}
                      </div>
                      <div className="info-group">
                        <p>
                          Số điện thoại<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="phone"
                          type="text"
                          placeholder="Số điện thoại"
                          valua={data.phone}
                          onChange={inputChange}
                          
                        />
                        {error.phone && <p>{error.phone}</p>}
                      </div>
                      <div className="info-group">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="email"
                          type="email"
                          placeholder="Email của bạn"
                          valua={data.email}
                          onChange={inputChange}
                        />
                        {error.email && <p>{error.email}</p>}
                      </div>
                      <div className="info-group">
                        <p>
                          Facebook<span>*</span>
                        </p>
                        <input
                          className="form-input"
                          name="facebook"
                          type="text"
                          placeholder="https://facebook.com"
                          valua={data.facebook}
                          onChange={inputChange}
                        />
                        {error.facebook && <p>{error.facebook}</p>}
                      </div>
                      <div className="info-group">
                        <p>Hình thức thanh toán</p>
                        <select
                          className="select"
                          name="payment"
                          id="select"
                          onChange={inputChange}
                        >
                          <option value={"hfgfh"}>Chuyển khoản</option>
                          <option value={"ghg"}>
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
                          valua={"djsadas"}
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
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
