import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Carousel from "react-bootstrap/Carousel";

function AboutUs(){
    return(
        <div id="about"  className="border-0 pt-3 p-5" style={{color:"#2a1301", backgroundColor:"rgba(246,242,240,0.85)",backgroundImage:"", backgroundRepeat:"repeat", backgroundSize:"35%",}} >
            <div className="row g-0">
                <div className="col-md-8 ">
                    <div className="card-body pt-3  ">
                        <h4 className="display-4 border-bottom border-dark border-3 p-3 mb-3 w-75 "><b>Про нас</b></h4>
                        <p className="card-text  p-3 container-fluid pe-md-5 fs-6 rounded-5 " style={{border:"double 0px black",boxShadow: ""}}>
                            Ми школа іноземних мов MT SCHOOL.<br/>
                            Наш головний напрямок - Англійська мова.<br/><br/>
                            Яка наша мета?<br/>
                            Наша основна мета - навчити Вас не тільки РОЗМОВЛЯТИ англійською, але й РОЗУМІТИ її, основні принципи побудови речень, скільки в ній часів та навіщо їх там стільки.<br/>
                            Саме розуміння того, як працює мова, надає широкі можливості її використання на рівні носіїв.<br/><br/>
                            Ми пропонуємо зробити Вам перший крок до розуміння англійської мови вже зараз, зареєструвавшись на безкоштовний пробний урок, а ми, в свою чергу, станемо Вашими надійними помічниками у досягненні цієї мети.
                        </p>

                        {/*<h5 className="display-6 mb-3"><b>Як проходять наші заняття</b></h5>*/}
                        <Row xs={1} md={1} lg={2}  className="g-0 ">
                                <Col>
                                    <h4 className="p-3">Що ми пропонуємо?</h4>
                                    <Table className="table text-start table-borderless mt-3  " style={{width:"",border:"double 0px black", boxShadow: ""}}>
                                        <tbody>
                                        <tr>
                                            <td className="text-start fs-6 " style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/>  </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"", paddingRight:"5px"}}> Індивідуальні та групові заняття до 6 чоловік</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start fs-6  " style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/>  </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"",paddingRight:"5px"}}>Онлайн та офлайн</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start fs-6  " style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/> </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"",paddingRight:"5px"}}>Для дорослих та дітей</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start fs-6" style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/> </td>
                                            <td className="text-start fs-6 " style={{color:"#2a1301",paddingLeft:"",paddingRight:"5px"}}>Тривалість заняття: дорослі - 80 хв; діти - 60 хв.</td>
                                        </tr>
                                        </tbody>
                                    </Table>

                                </Col>
                                <Col>
                                    <h4 className="p-3">Що ми використовуємо?</h4>
                                    <Table className="table text-start table-borderless mt-3  " style={{width:"",border:"double 0px black", boxShadow: ""}}>
                                        <tbody>
                                        <tr>
                                            <td className="text-start" style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/>  </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"", paddingRight:""}}>Перевірені часом "English Files", четверте видавництво Oxford</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start " style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/>  </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"",paddingRight:""}}> Аудіо та відео матеріали для тренування сприйняття мови на слух</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/> </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"",paddingRight:""}}> Авторські напрацювання, що є найбільш ефективними для засвоєння матеріалу</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/> </td>
                                            <td className="text-start fs-6 " style={{color:"#2a1301",paddingLeft:"",paddingRight:""}}>Перегляд  фрагментів Ваших улюблених фільмів та серіалів для створення міцних та веселих асоціацій, що полегшує процес запам'ятовування.</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                        </Row>

                    </div>
                </div>
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL+"./images/us/us.jpg"} className="d-block w-100 mt-5 mb-5 rounded-5" style={{boxShadow: ""}} alt="..."/>
                    <Carousel className="w-100 mx-auto bg-opacity mt-2 rounded-5 " variant="dark" style={{boxShadow: ""}}>
                        <Carousel.Item>
                            <div className=" w-75 mx-auto " style={{width:"", height:"", color:"",}}>
                                    <img src={process.env.PUBLIC_URL+"./images/us/us1.jpg"} className="img-fluid rounded-5" alt="..."/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div className="w-75 mx-auto" style={{width:"", height:"", color:"",}}>
                                    <img src={process.env.PUBLIC_URL+"./images/us/us2.jpg"} className="img-fluid rounded-5" alt="..."/>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div className="w-75 mx-auto" style={{width:"", height:"", color:"",}}>
                                    <img src={process.env.PUBLIC_URL+"./images/us/us3.jpg"} className="img-fluid rounded-5" alt="..."/>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="w-75 mx-auto" style={{width:"", height:"", color:"",}}>
                                <img src={process.env.PUBLIC_URL+"./images/us/us4.jpg"} className="img-fluid rounded-5" alt="..."/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default AboutUs