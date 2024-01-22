import React, {useState} from "react";
import './ProgramContent.css'
import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap";

function Program(props) {
    const {program} = props

    return (
        <div className=" d-block d-md-flex justify-content-between" style={{width:""}}>

            {/* <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                <img src={process.env.PUBLIC_URL+"./images/kidsProg1.jpg"} className="img-fluid rounded-5 " style={{width:""}} alt="..."/>
            </div> */}

            <div className="container-fluid  p-3 bg-light  rounded-5  " style={{width:"", height:"", color:"",marginLeft:""}}>
                <h4>{program.name}</h4>
                <p className=" mt-1 fs-6 ">{program.description}<br/><br/>
                    * Заняття проходять <b>{program.type}</b><br/>
                    * Кількість занять - <b>{program.numberOfLessons}</b> рази на тиждень.<br/>
                    * Тривалість занять - по <b>{program.lessonDuration}</b><br/>
                    * Тривалість курсу - <b>{program.courseDuration}</b><br/>
                    * Вартість курсу - {program.coursePrice} грн</p>
                <Button href="/form" className="btn btn-dark mt-md-3 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
            </div>
        </div>
    )
}

export default function ProgramsContent(props) {

    const {programs} = props

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {setIndex(selectedIndex)};
    
    return (
        <div className="dialog">
            <Carousel className="w-75 mx-auto bg-light mt-5 rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                {programs.map((program) => (
                    <Carousel.Item>
                        <Program program={program} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}