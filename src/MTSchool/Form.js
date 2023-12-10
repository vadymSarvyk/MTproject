import React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import './Main.css';
export function MTForm(){
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const{
        register,
        formState:{errors},
        handleSubmit,
        reset
    } =useForm() ;
    const handleSubmit(e){
        e.preventDefault();

 setLoading(true);

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Phone', phone);
        formData.append('Message', message);

        axios.post("https://script.google.com/macros/s/AKfycbwrT670bDonK60UOfjVgxxZZFgpkFg6-cxYfrmWTSVMAYQbfll3esu1TGLRazrvcVjlIw/exec", formData)
        .then(response => {
          setLoading(false);
          
        })
        .catch(error => {
          setLoading(false);
        });
       
    };
    const [mydata, setData] = useState('');

    return(
        <div className="row  align-items-center p-5  bg-opacity-75 " style={{color:"#2a1301",backgroundColor:"rgba(246,238,232,0.63)",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <div className="col-sm-8 col-md-5 bg-light mx-auto mt-5 rounded-5 " style={{border:"double 0px black", padding:"30px", boxShadow: "10px 6px 33px 0px rgba(117,115,117,1)"}}>
                <h2 className="card-title mb-5 text-center">Напишіть нам і ми Вам зателефонуємо!</h2>
                <form onSubmit={handleSubmit} className="form-group text-center">
                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.name&&<p>{errors?.name?.message||"Error"}</p>}
                    </div>
                    <div className="input-group mb-3">
                        <input id="name" type="text" className="form-control" placeholder="Як до Вас звертатися"
                                value={name}
                onChange={e => setName(e.target.value)}

                               {...register('name',{required:"Це поле обовязкове до заповнення!",
                                   pattern: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' ]+$/,
                                   minLength:{
                                       value:2,
                                       message:"Введіть мінімум 2 символи!"
                                   }})}/>
                    </div>

                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.mail&&<p>{errors?.mail?.message||"Введіть коректний e-mail!"}</p>}
                    </div>
                    <div className="input-group mb-3">
                        <input id="mail" type="email" className="form-control" placeholder="Ваш e-mail"
                               value={email}
                onChange={e => setEmail(e.target.value)}

                               {...register('mail',{required:"Це поле обовязкове до заповнення!",
                               })}/>
                    </div>
                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.phone&&<p>{errors?.phone?.message||"Введіть коректний номер!"}</p>}
                    </div>
                    <div className="input-group mb-3 text-center">
                        <input type="phone" className="form-control" placeholder="Номер телефону"
                               value={phone}
                onChange={e => setPhone(e.target.value)}
                               {...register('phone',{
                                   minLength:{
                                       value:10,
                                       message:"Введіть мінімум 10 символів!"},
                                   pattern: {
                                       message:"Введіть коректний номер!",
                                       value: /\d+/},
                                   onChange: (e) => {
                                       e.target.value = e.target.value.replace(/(\d{2})\-?(\d{3})\-?(\d{3})\-?(\d{2})\-?(\d{2})/, "$1-$2-$3-$4-$5");
                                   },

                                   required:"Це поле обовязкове до заповнення!"
                               })}
                               onInput={(e) => {
                                   e.target.value = e.target.value.replace(/[^\d]/g, "");
                               }}
                        />
                    </div>
                    <div style={{margin:"5px", color:"red"}}>
                        {errors?.text&&<p>{errors?.text?.message||"Error"}</p>}
                    </div>
                    <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Коротко опишіть Ваші побажання щодо курсу:"
                              rows="5"
                             value={message}
                onChange={e => setMessage(e.target.value)}

                              {...register('text',{
                                  required:"Це поле обовязкове до заповнення!"
                              })}
                    ></textarea>
                    <button type="submit"  value="Відправити" className="btn btn-outline-dark btn text-white rounded-5 fw-bold mx-auto" style={{border:"double 0px white", paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginTop:"20px",backgroundColor:"#2a1301"}}>Відправити</button>
                </form>
            </div>
        </div>
)}
