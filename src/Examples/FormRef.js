import {useForm} from "react-hook-form";
import React from "react";

function FormRef(){

    let name=React.createRef();
    let phone=React.createRef();
    let text=React.createRef();
    const{
        register,
        formState:{errors},
        handleSubmit
    } =useForm() ;

    const onSubmit=(data)=>{
        let ext = document.getElementById("ext");
        let p = document.createElement('p');
        // p.innerText=JSON.stringify(data);
        p.innerText=`${data.name}, ${data.phone}: ${data.text};`;
        ext.appendChild(p);
    }
    return(
        <div className="row align-items-center">
            <div className="col-md-4 offset-md-2 col-sm-8  bg-warning  rounded-5 bg-opacity-75" style={{padding:"30px", margin:"50px", boxShadow: "10px 6px 33px 0px rgba(117,115,117,1)"}}>
                <h2 className="card-title mb-5 text-center"><b>Напишіть нам і ми Вам зателефонуємо!</b></h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{margin:"5px", color:"red"}}>
                    {errors?.name&&<p>{errors?.name?.message||"Error"}</p>}
                 </div>
                <div className="input-group mb-5">
                    <input id="nam" type="text" className="form-control" placeholder="Ваше ім'я"
                           ref={name}
                           {...register('name',{required:"Це поле обовязкове до заповнення!",
                               minLength:{
                                   value:2,
                                   message:"Введіть мінімум 5 символів!"
                               }})}/>
                </div>

                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.phone&&<p>{errors?.phone?.message||"Введіть коректний номер!"}</p>}
                    </div>
                <div className="input-group mb-5 text-center">
                    <input type="phone" className="form-control" placeholder="Номер телефону в форматі: +380 00 000 0000"
                           ref={phone}
                           {...register('phone',{
                               minLength:{
                            value:10,
                            message:"Введіть мінімум 10 символів!"},
                               pattern: {
                                   message:"Введіть коректний номер!",
                                       value: /\d/},

                               required:"Це поле обовязкове до заповнення!"
                           })}/>
                </div>
                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.text&&<p>{errors?.text?.message||"Error"}</p>}
                    </div>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Коротко опишіть Ваше питання:"
                          rows="5" ref={text}
                          {...register('text',{
                              required:"Це поле обовязкове до заповнення!"
                          })}
                ></textarea>

                <input type="submit" value="Відправити" className="btn btn-outline-dark btn fw-bold" style={{paddingLeft: "40px", paddingRight: "40px", marginLeft: "30%", marginTop:"20px"}}/>
            </form>
            </div>

            <div className="col-md-4 offset-md-2 col-sm-8  bg-info rounded-5 bg-opacity-75" style={{height:"auto", padding:"30px", margin:"50px", boxShadow: "10px 6px 33px 0px rgba(117,115,117,1)"}}>
                <h3 className="card-title mb-2 text-center"><b>Заявки на зворотній виклик:</b></h3>
                <div id="ext"></div>
            </div>

        </div>
    );
}
export default FormRef;

