import { useState } from "react";

const patternEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export default function useValidataForm(initValua,rule) {
  let [form, setForm] = useState(initValua);
  let [error, setError] = useState({});
  
  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  console.log(form);

  function handleSubmit(e) {
    // console.log("submid");
    // e.preventDefault();
    let {validate, messge} = rule;
    let errorObj ={}
    for (let i in validate) {
      if(i in form ){
        if(validate[i].required){
          if(!form[i]){
            errorObj[i]=messge?.[i]?.required || "truong nay bac buoc"
          }

        }

        if (validate[i].pattern){
          let pattern =validate[i].pattern
          if(validate[i].pattern === "email") pattern = patternEmail;
          if(validate[i].pattern === "phone") pattern = patternPhone;

          if (!pattern.test(form[i])){
            errorObj[i]=messge?.[i]?.pattern || "không đúng định dạng"
          }
        }
      }
    }
    // console.log(errorObj);
    setError(errorObj)
    return Object.keys(errorObj).length>0
    
  }
  return {
    data:form,
    error,
    inputChange,
    onSubmit:handleSubmit
  }
}