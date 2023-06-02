import {useForm} from "react-hook-form";
import React, {useState} from "react";
import '../App.css';

function ValidFormHuki() {
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (data) => {
        setData(data);
    };
    const [data, setData] = useState(null);
    const resetForm = () => {
        reset();
        setData(null);
    };
    return (
        <div className="registration">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="Name"
                        placeholder="Enter name"
                        {...register("name", {
                            required: true,
                            minLength: 2,
                            pattern: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' ]+$/,
                        })}
                    />
                    {errors.name && errors.name.type === "required" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Поле обов'язкове до заповнення</span>
                    )}
                    {errors.name && errors.name.type === "minLength" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Мінімум 2 символи</span>
                    )}
                    {errors.name && errors.name.type === "pattern" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Введені дані мають містити тільки літери, апостроф та пробіл</span>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter surname
                    </label>
                    <input
                        type="surname"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="Surname"
                        placeholder="Enter surname"
                        {...register("surname", {
                            required: true,
                            minLength: 2,
                            pattern: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' ]+$/,
                        })}
                    />
                    {errors.surname && errors.surname.type === "required" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Поле обов'язкове до заповнення</span>
                    )}
                    {errors.surname && errors.surname.type === "minLength" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Мінімум 2 символи</span>
                    )}
                    {errors.surname && errors.surname.type === "pattern" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Введені дані мають містити тільки літери, апостроф та пробіл</span>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter age
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="30"
                        placeholder="Enter age"
                        {...register("age", {
                            required: true,
                            minLength: 2,
                            min: 15,
                            pattern: /\d+/,
                        })}
                    />
                    {errors?.age && <p style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Мінімальний вік >= 15</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter phone number
                    </label>
                    <input
                        type="tel"
                        inputMode="numeric"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="12-345-678-91-01"
                        placeholder="Enter phone number"
                        {...register("phone", {
                            required: true,
                            minLength: 16,
                            pattern: /\d+/,
                            onChange: (e) => {
                                e.target.value = e.target.value.replace(/(\d{2})\-?(\d{3})\-?(\d{3})\-?(\d{2})\-?(\d{2})/, "$1-$2-$3-$4-$5");
                            },
                        })}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^\d]/g, "");
                        }}
                    />

                    {errors?.phone && <p style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Мінімальна кількість символів - 12</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="example@com"
                        placeholder="Enter email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    {errors?.email && <p style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Поле обов'язкове до заповнення</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter city
                    </label>
                    <input
                        type="city"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="City"
                        placeholder="Enter city"
                        {...register("city", {
                            required: true,
                            minLength: 2,
                            pattern: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' ]+$/,
                        })}
                    />
                    {errors.city && errors.city.type === "required" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Поле обов'язкове до заповнення</span>
                    )}
                    {errors.city && errors.city.type === "minLength" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Мінімум 2 символи</span>
                    )}
                    {errors.city && errors.city.type === "pattern" && (
                        <span style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Введені дані мають містити тільки літери, апостроф та пробіл</span>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter address
                    </label>
                    <input
                        type="address"
                        className="form-control"
                        id="exampleFormControlInput1"
                        defaultValue="Address"
                        placeholder="Enter address"
                        {...register("address", {
                            required: true,
                        })}
                    />
                    {errors?.address && <p style={{color: "red", fontWeight: "bold", margin: "10px 0 0"}}>Поле обов'язкове до заповнення</p>}

                </div>

                <input type="submit" value="Send" className="btn btn-success" />
                <button type="button" onClick={resetForm} className="btn btn-secondary">
                    Reset
                </button>
            </form>
            {data && (
                <div className="results">
                    <h2>Результати:</h2>
                    <p>Name: {data.name}</p>
                    <p>Surname: {data.surname}</p>
                    <p>Age: {data.age}</p>
                    <p>Phone: +{data.phone}</p>
                    <p>Email: {data.email}</p>
                    <p>City: {data.city}</p>
                    <p>Address: {data.address}</p>
                </div>
            )}
        </div>
    );
}

export default ValidFormHuki;
