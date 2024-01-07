import React, {useState} from "react";
import {useForm} from "react-hook-form";
import{BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import './Main.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import {KidsProg, NMTProg, AdultsProg, BusinessProg} from "./Programs.js";
import {MTForm} from "./Form";
import {Button, Figure} from "react-bootstrap";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Navigat(){
    return (
        <Navbar bg="light" expand="lg" className="container-fluid sticky-top bg-opacity p-2" >
            <Container style={{paddingLeft:"0"}}>
                {/*<Navbar.Brand href="/" className=""  >*/}
                {/*    <img style={{marginLeft:"0px"}}*/}
                {/*    src={process.env.PUBLIC_URL+"./images/logo1.jpg"}*/}
                {/*    width="50"*/}
                {/*    height="auto"*/}
                {/*    className="d-inline-block align-self-start rounded-circle me-0"*/}
                {/*    alt="logo"*/}

                {/*/>*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" me-auto fs-5 fw-bold justify-content-end  w-100" style={{marginLeft:"", width:""}}>
                        <Nav.Link href="/" className="active" style={{marginRight:"20px"}}>Головна сторінка</Nav.Link>
                        <Nav.Link href="/about" style={{marginRight:"20px"}}>Про нас</Nav.Link>
                        <Nav.Link href="/prog" style={{marginRight:"20px"}}>Програми</Nav.Link>
                        {/*<Nav.Link href="/teach" style={{marginRight:"20px"}}>Викладачі</Nav.Link>*/}
                        <Nav.Link href="/event" style={{marginRight:"20px"}}>Івенти</Nav.Link>
                        <Nav.Link href="/contact" style={{marginRight:"0"}}>Контакти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}
function Main(){
    return (
    <div className="d-md-flex mx-0  " style={{backgroundImage:"url(./images/people.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover", color:"#2a1301", fontFamily:"" }}>
        <div className=" flex-fill container-fluid bg-light bg-opacity-50 " style={{height:"100%", borderTopRightRadius:"",borderBottomRightRadius:"50%"}}>
            {/*<img style={{marginLeft:"0px"}} src={process.env.PUBLIC_URL+"./images/logo1.jpg"} width="400" height="auto" className="d-inline-block align-self-start rounded-circle opacity-75" alt="logo"/>*/}
            <div className="p-sm-0  p-md-3 " style={{width:"65%",  borderTopRightRadius:"",borderBottomRightRadius:"80%", backgroundColor:"", opacity:"0.75"}}>
                <img style={{marginLeft:"auto"}} src={process.env.PUBLIC_URL+"./images/MTlogo_bg.png"} width="400" height="auto" className="d-inline-block mx-sm-auto" alt="logo"/>
            </div>

            <h3 className="display-8 mb-3 border-top border-dark border-3 pt-3  pb-md-1 ms-md-5  text-md-start text-center fw-bold" style={{width:"fit-content"}}>Mother Tongue School - школа іноземних мов</h3>
            <Figure className="text-lg-end text-md-center ms-md-5 ps-md-3 pe-md-3">
                <blockquote className="blockquote fs-5">
                    <p>“Do you know what a foreign accent is? It's a sign of bravery.”</p>
                    <p>“Знаєте, що таке акцент? Це ознака хоробрості.“</p>
                </blockquote>
                <Figure.Caption className="blockquote-footer mt-3 fs-6 text-end">
                    <cite title="Source Title" className="text-dark">Amy Chua</cite>
                </Figure.Caption>
            </Figure>
<br/>
            <Button href="/form" className="btn btn-dark  ms-md-5  mt-0 mb-5 p-2 rounded-5 fw-bold mx-sm-auto" style={{marginLeft:"35px", width:"340px", backgroundColor:"#2a1301", border:"double 7px white"} }>ПРИЄДНАТИСЯ ДО НАС</Button>
        </div>

        <div className="pt-md-5 ms-5 flex  text-end d-none d-sm-block"  style={{width:"40%", height:"100%", borderTopRightRadius:"",borderBottomLeftRadius:""}}>
            <div className="d-flex justify-content-center pt-3 mt-3" style={{marginLeft:""}}>

                <div className="flex-item border border-dark border-5 rounded-5"
                     style={{padding:"3px", marginRight: "20px"}}>
                    <a className="navbar-brand" href="http://t.me/MotherTongueSchool">
                        <svg style={{marginRight:""}} xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                             fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                    </a>
                </div>

                <div className="flex-item border border-dark border-5 rounded-5"
                     style={{padding:"3px", marginRight: "20px"}}>
                    <a className="navbar-brand" href="https://www.facebook.com/mtschool.kr/">
                        <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"60px",height:"60px"}}
                             className="d-inline-block align-text-top"/>
                    </a>
                </div>

                <div className="flex-item border border-dark border-5 rounded-5"
                     style={{padding:"3px", marginRight: "20px"}}>
                    <a className="navbar-brand" href="https://www.instagram.com/mtschool.kr/">
                        <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"60px",height:"60px"}}
                             className="d-inline-block align-text-top"/>
                    </a>
                </div>
            </div>
            <div className="text-center p-2  mt-3 fs-4">
                <b>+38(097)-111-78-95</b>
                <br/>
                <b>м. Кривий Ріг, вул. Героїв АТО, 11</b>
            </div>

        </div>
    </div>
    )
}
function Programs(){
    return(
    <div id="prog" className="row justify-content-around align-items-center pt-0 pb-5 p-3" style={{paddingBottom: "100px",color:"#2a1301", backgroundColor:"#faf0eb",backgroundImage:"url()", backgroundRepeat:"repeat", backgroundSize:"35%", }}>
        <h4 className="display-4 text-center border-bottom border-dark border-3 p-3 w-75" style={{marginTop: "50px"}} ><b>Наші найпопулярніші програми</b></h4>
        <h4 className=" text-center mt-5" >Для будь-якоі вікової категорії, рівня володіння мовою і поставлених цілей. </h4>

        <div className="skill col-md-3 col-sm-8 rounded-5 text-start bg-light bg-opacity"
             style={{border:"double 0px black", width:"", minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
            <h4 className="" style={{marginBottom:"20px"}}><b>Для дітей</b></h4>
            <p className="text-secondary"><small>Практика показує, що ті, хто починали вивчення мови з дитячих років, мають найкращі результати серед однолітків. Саме тому наші викладачі працюють за сучасними матеріалами світових видань для досягнення найкращих результатів у вивченні іноземних мов.</small></p>
            <p><Link to="/kids" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
        </div>

        <div className="skill col-md-3 col-sm-8 rounded-5 text-start bg-light bg-opacity"
             style={{border:"double 0px black", width:"",minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
            <h4 className="" style={{marginBottom:"20px"}}><b>Для дорослих</b></h4>
            <p className="text-secondary"><small>Ви знали,що 8 з 10 людей, які починають вивчати мову, мають неправильне уявлення про свій рівень знання англійської? Ми допоможемо Вам оцінити себе і вдосконалити свої досягнення, бо саме реальне розуміння своїх сил дозволяє вірно скласти програму навчання і зробити свої заняття ефективними.
            </small></p>
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            <p><Link to="/adults" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
        </div>

        <div className="skill col-md-3 col-sm-8 rounded-5 text-start bg-light bg-opacity"
             style={{border:"double 0px black", width:"", minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
            <h4 className="" style={{marginBottom:"20px"}}><b>Для бізнесу</b></h4>
            <p className="text-secondary"><small>Курси бізнес англійської - це прекрасна можливість вивчити англійську мову саме в Вашій сфері діяльності. Спілкуйтесь з іноземними колегами, замовниками або підвищуйте свій професійний рівень майстерності за допомогою іноземних джерел та ресурсів.</small></p>
            <p><Link to="/business" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
        </div>

        {/* <div className="skill col-md-2 col-sm-8 rounded-5 text-start bg-light bg-opacity"
             style={{border:"double 0px black", width:"", minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
            <h4 className="" style={{marginBottom:"20px"}} ><b>Підготовка до НМТ</b></h4>
            <p className="text-secondary"><small>Сеа ид принципес вулпутате пхилосопхиа, цу при дицант долорем инструцтиор. Ид персиус яуаеяуе хас, вис еверти патриояуе глориатур но. Нам ерат цонсулату!</small></p>
            <p><Link to="/nmt" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
        </div> */}
    </div>

    )
}
function AboutUs(){
    return(
        <div id="about"  className="border-0 pt-3 p-5" style={{color:"#2a1301", backgroundColor:"rgba(246,242,240,0.85)",backgroundImage:"", backgroundRepeat:"repeat", backgroundSize:"35%",}} >
            <div className="row g-0">
                <div className="col-md-8 ">
                    <div className="card-body pt-3  ">
                        <h4 className="display-4 border-bottom border-dark border-3 p-3 mb-3 w-75 "><b>Про нас</b></h4>
                        <p className="card-text  p-3 container-fluid pe-md-5 fs-6 rounded-5 " style={{border:"double 0px black",boxShadow: ""}}>
                            Ми школа іноземних мов MT SCHOOL.<br/>
                            Наш головний напрямок - Англійська та Польська мови.<br/><br/>
                            Яка наша мета?<br/>
                            Наша основна мета - навчити Вас не тільки РОЗМОВЛЯТИ англійською чи польською, але й РОЗУМІТИ її, основні принципи побудови речень, скільки в ній часів та навіщо їх там стільки.<br/>
                            Саме розуміння того, як працює мова, надає широкі можливості її використання на рівні носіїв.<br/><br/>
                            Ми пропонуємо зробити Вам перший крок до розуміння англійської чи польської мови вже зараз, зареєструвавшись на безкоштовний пробний урок, а ми, в свою чергу, станемо Вашими надійними помічниками у досягненні цієї мети.
                        </p>

                        {/*<h5 className="display-6 mb-3"><b>Як проходять наші заняття</b></h5>*/}
                        <Row xs={1} md={1} lg={2}  className="g-0 ">
                                <Col>
                                    <h4 className="p-3">Що ми пропонуємо?</h4>
                                    <Table className="table text-start table-borderless mt-3  " style={{width:"",border:"double 0px black", boxShadow: ""}}>
                                        <tbody>
                                        <tr>
                                            <td className="text-start fs-6 " style={{color:"#2a1301"}}><img src={process.env.PUBLIC_URL+"./images/check.png"} alt="check" style={{width:"25px",height:"25px"}} className="d-inline-block "/>  </td>
                                            <td className="text-start fs-6  " style={{color:"#2a1301",paddingLeft:"", paddingRight:"5px"}}> Індивідуальні, парні та групові заняття до 6 чоловік</td>
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
                                            <td className="text-start fs-6 " style={{color:"#2a1301",paddingLeft:"",paddingRight:"5px"}}>Тривалість заняття: групові - 80 хв; індивідуальні та парні - 60 хв.</td>
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
// function Teachers(){
//     return(
//         <div id="teach" className="row justify-content-center align-items-center p-md-5 pb-5" style={{paddingBottom: "100px",color:"#2a1301", backgroundColor:"#f6e9e4",backgroundImage:"url()", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
//             <h4 className="display-4 text-center border-bottom border-dark border-3 p-3" style={{width:"50%", marginTop: ""}} ><b>Наші викладачі</b></h4>
//             <h4 className=" text-center mt-5" >Вим сусципиантур дефинитионем ех, аугуе пхилосопхиа пер ан.</h4>
//
//             <Container fluid className="p-3">
//                 <Row xs={1} sm={2} md={4} lg={4}  className=" justify-content-around align-items-center">
//                     <Col
//                         // md="auto" xs="8" sm="5"
//                     >
//             <div className="skill text-center rounded-5 p-3 bg-light bg-opacity" style={{border:"double 0px black",width:"",maxWidth:"", height:"auto",marginTop:"80px", backgroundColor:"",boxShadow: ""}}>
//                 <img src={process.env.PUBLIC_URL+"./images/dog.jpg"} className="img-fluid rounded-circle mt-3" alt="..." style={{width:"150px", height:"150px"}}/>
//                 <h5 className=" text-center mt-3" >Ім'я Прізвище</h5>
//                 <h6 className=" text-center mt-2">Англійська мова</h6>
//                 <p className=" text-center mt-3"> "Був смажень, і швимкі яски спіралили в кружві, і марамульки йшли в псашки, як трулі долові". </p>
//
//                 <div className="d-flex justify-content-center border-top border-dark  mx-auto pt-1 pb-2 " style={{color:"#2a1301"}}>
//
//                     <div className="flex-item "
//                          style={{padding:"0px", marginRight: "10px"}}>
//                         <a className="navbar-brand" href="http://twitter.com/">
//                             <img src={process.env.PUBLIC_URL+"./images/twitter-128.png"} alt="tw" style={{width:"20px",height:"20px"}}
//                                  className="d-inline-block  "/>
//                         </a>
//                     </div>
//
//                     <div className="flex-item "
//                          style={{padding:"0px", marginRight: "10px"}}>
//                         <a className="navbar-brand" href="http://facebook.com/">
//                             <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"20px",height:"20px"}}
//                                  className="d-inline-block "/>
//                         </a>
//                     </div>
//
//                     <div className="flex-item "
//                          style={{padding:"0px", marginRight: "10px"}}>
//                         <a className="navbar-brand" href="http://instagram.com/">
//                             <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"20px",height:"20px"}}
//                                  className="d-inline-block "/>
//                         </a>
//                     </div>
//                 </div>
//
//             </div>
//                     </Col>
//
// <Col
//     // md="auto" xs="8" sm="5"
// >
//     <div className=" skill  text-center rounded-5 p-3 bg-light bg-opacity" style={{border:"double 0px black", width:"",maxWidth:"", height:"auto",marginTop:"80px", backgroundColor:"",boxShadow: ""}}>
//         <img src={process.env.PUBLIC_URL+"./images/girl.jpg"} className="img-fluid rounded-circle mt-3" alt="..." style={{width:"150px", height:"150px"}}/>
//         <h5 className=" text-center mt-3" >Ім'я Прізвище</h5>
//         <h6 className=" text-center mt-2">Іспанська мова</h6>
//         <p className=" text-center mt-3"> "Мій сину, бійсь Курзу-Верзу, то зубий дряполап! Не знайся з птицею Зу-зу і велезнем!" </p>
//         <div className="d-flex justify-content-center border-top border-dark  mx-auto pt-1 pb-2 " style={{color:"#2a1301"}}>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://twitter.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/twitter-128.png"} alt="tw" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block  "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://facebook.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://instagram.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//         </div>
//     </div>
// </Col>
//
// <Col
//     // md="auto" xs="8" sm="5"
// >
//     <div className="skill rounded-5 p-3 text-center bg-light bg-opacity" style={{border:"double 0px black", width:"", maxWidth:"", height:"auto",marginTop:"80px", backgroundColor:"",boxShadow: ""}}>
//         <img src={process.env.PUBLIC_URL+"./images/boy.jpg"} className="img-fluid rounded-circle mt-3" alt="..." style={{width:"150px", height:"150px"}}/>
//         <h5 className=" text-center mt-3" >Ім'я Прізвище</h5>
//         <h6 className=" text-center mt-2">Німецька мова</h6>
//         <p className=" text-center mt-3">"Меча-штрича він в руки взяв, тропив ворожий слід,
//             і в думній тужі спочивав у дерві діодід". </p>
//         <div className="d-flex justify-content-center border-top border-dark  mx-auto pt-1 pb-2 " style={{color:"#2a1301"}}>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://twitter.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/twitter-128.png"} alt="tw" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block  "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://facebook.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://instagram.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//         </div>
//     </div>
// </Col>
//
// <Col
//     // md="auto" xs="8" sm="5"
// >
//     <div className="skill  text-center rounded-5 p-3 bg-light bg-opacity" style={{border:"double 0px black", width:"",maxWidth:"", height:"auto",marginTop:"80px", backgroundColor:"",boxShadow: ""}}>
//         <img src={process.env.PUBLIC_URL+"./images/cat.jpg"} className="img-fluid rounded-circle mt-3" alt="..." style={{width:"150px", height:"150px"}}/>
//         <h5 className=" text-center mt-3" >Ім'я Прізвище</h5>
//         <h6 className=" text-center mt-2">Польська мова</h6>
//         <p className=" text-center mt-3"> "Він раз мечем! він два штричем, аж кервиться торва! І барбаризнула з плечей сміюцька долова!". </p>
//         <div className="d-flex justify-content-center border-top border-dark  mx-auto pt-1 pb-2 " style={{color:"#2a1301"}}>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://twitter.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/twitter-128.png"} alt="tw" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block  "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://facebook.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//
//             <div className="flex-item "
//                  style={{padding:"0px", marginRight: "10px"}}>
//                 <a className="navbar-brand" href="http://instagram.com/">
//                     <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"20px",height:"20px"}}
//                          className="d-inline-block "/>
//                 </a>
//             </div>
//         </div>
//     </div>
//
// </Col>
//                 </Row>
//             </Container>
// </div>
//     )
// }
function Events(){
  return(
      <div id="event" className="row justify-content-around align-items-center pt-5 p-md-5 " style={{paddingBottom: "",color:"#2a1301", backgroundColor:"#f3e3de",backgroundImage:"url()", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
          <h4 className="display-4 text-center border-bottom border-dark border-3 pb-3" style={{width:"75%", marginTop: ""}} ><b>Завжди раді Вас вітати на наших заходах</b></h4>
          <h4 className=" text-center mt-3" >Чудова можливість поспілкуватися і відкрити щось нове.</h4>
          <Row xs={1} md={3}  className="g-4">
                  <Col>
                      <Card className=" rounded-5 mx-sm-auto border-0" style={{  height: '100%' }}>
                          <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/stud.jpg"} />
                          <Card.Body>
                              <Card.Title>Пробний урок для дітей</Card.Title>
                              <Card.Text>
                                      <p className="fs-2 ">ПК "Центральний"</p>
                                      <p>вул. Mусоргського, 16 </p>
                                      <div className="overflow-auto" style={{height:"100px",overflow:"", }}>
                                      <p  style={{}}>Нещодавно провели пробний урок з англійської мови для дітей з пришкільних таборів. За незначний проміжок часу ми вивчили прості, але популярні розмовні фрази англійською, вивчили частини тіла, розмальовуючи Венздей і зробили ще багато цікавих і корисних речей. 
                                      Найактивніші діти отримали подарунки - наші розмальовки із популярними сюжетами із Roblox, Minecraft за Венздей.</p>
                                      </div>
                              </Card.Text>
                              <Button href="/form" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                          </Card.Body>
                      </Card>
                  </Col>
              <Col>
                  <Card className=" rounded-5 w-sm-auto mx-sm-auto border-0" style={{ height: '100%' }}>
                      <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/mt.jpg"} />
                      <Card.Body>
                          <Card.Title>Пробний урок для дорослих</Card.Title>
                          <Card.Text>
                                  <p className="fs-2 ">MT SCHOOL</p>
                                  <p>пр. Миру, 29В </p>
                              <div style={{height:"100px",overflow:"auto" }}>
                                  <p style={{}}>Ми постійно проводимо пробні уроки для дорослих в форматі офлайн, в наших аудиторіях, та онлайн. На таких уроках ми показуємо наші методи викладання, матеріали, даємо можливість ненадовго зануритись у цікавий процес опанування іноземної мови.</p>
                              </div>
                          </Card.Text>
                          <Button href="/form" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                      </Card.Body>
                  </Card>
          </Col>
              <Col>
                  <Card className=" rounded-5 w-sm-auto mx-sm-auto border-0" style={{ height: '100%' }}>
                      <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/childr.jpg"} />
                      <Card.Body>
                          <Card.Title>Презентація школи MT SCHOOL</Card.Title>
                          <Card.Text>
                                  <p className="fs-2 ">БФ "Я Маріуполь"</p>
                                  <p>вул. Героїв АТО, 11 </p>
                                  <div style={{height:"100px",overflow:"auto" }}>
                                  <p>Нещодавно провели презентація нашої школи для вихованців БФ "Я Маріуполь". Розповіли про актуальність знання англійської мови, особливо для підлітків, які знаходяться перед вибором свого професійного шляху. 
Розповіли про помилки початківців та лайфхаки, які допоможуть простіше та ефективніше вивчати англійську мову. Розібрали корисні розмовні фрази, які допоможуть у будь-якій ситуації.</p>
                              </div>
                          </Card.Text>
                          <Button href="/form" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </div>
  )
}
function Contacts(){
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
function validateForm() {
        return email.length > 0 && name.length > 0 && phone.length > 0 && message.length > 0;
    }

   function handleSubmit(e){
        e.preventDefault();
if (!validateForm()) {
            alert('Please fill in all fields.');
            return;
        }

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
        setName('');setEmail('');setPhone('');setMessage('');
    };
    const [mydata, setData] = useState('');
    return(
    <div id="contact" className="text-center" style={{color:"#2a1301", backgroundColor:"#f8eade",paddingBottom:"", paddingTop:"20px",backgroundImage:"url()", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
        <div className="row align-items-center justify-content-center p-3" style={{paddingBottom:""}}>
            <h4 className="card-title display-4 text-center border-bottom border-dark border-3 p-3 w-75"><b>Ми завжди на зв'язку для Вас</b></h4>

            <Container fluid className="p-5">
            <Row xs={1} md={2}  className="g-5 ">
                <Col>
                    <div>
                <p className=" fs-5">Наші адміністратори з радістю допоможуть вирішити будь-яке питання.</p>
                <img src={process.env.PUBLIC_URL+"./images/callCenter.jpg"} className="d-block w-100 rounded-5" style={{boxShadow: ""}} alt="..."/>
                    </div>
                </Col>
                <Col>
                    <div className="  mx-auto bg-light  rounded-5 bg-opacity-75" style={{marginLeft:"",border:"double 0px black",padding:"20px", boxShadow: ""}}>
                    <h2 className="card-title mb-5 text-center">Напишіть нам і ми Вам зателефонуємо!</h2>
                    <form onSubmit={handleSubmit} className="form-group text-center">
                   
                    <div className="input-group mb-3">
                        <input id="name" type="text" className="form-control" placeholder="Як до Вас звертатися"
                                value={name}
                onChange={e => setName(e.target.value)}

                              />
                    </div>

                  
                    <div className="input-group mb-3">
                        <input id="mail" type="email" className="form-control" placeholder="Ваш e-mail"
                               value={email}
                onChange={e => setEmail(e.target.value)}

                             />
                    </div>
                    
                    <div className="input-group mb-3 text-center">
                        <input type="phone" className="form-control" placeholder="Номер телефону"
                               value={phone}
                onChange={e => setPhone(e.target.value)}
                               
                        />
                    </div>
                  
                    <textarea className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="Коротко опишіть Ваші побажання щодо курсу:"
                              rows="5"
                             value={message}
                onChange={e => setMessage(e.target.value)}

                            
                    ></textarea>
                    <button type="submit"  value="Відправити" className="btn btn-outline-dark btn text-white rounded-5 fw-bold mx-auto" style={{border:"double 0px white", paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginTop:"20px",backgroundColor:"#2a1301"}}>Відправити</button>
                </form>
                    </div>

                </Col>
            </Row>
            </Container>
            <Table className="d-none d-md-table  rounded table-borderless table-responsive " style={{border:"double 0px black", boxShadow: "", width:"850px", minWidth:"770px"}}>
                <thead>
                <tr>
                    <th> <h5 className=" fw-semibold text-center">
                        <svg style={{marginRight:"5px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-phone" viewBox="0 0 16 16">
                            <path
                                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        Телефон:
                    </h5></th>
                    <th> <h5 className="fw-semibold text-center">
                        <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-envelope" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        E-mail
                    </h5></th>
                    <th><h5 className="fw-semibold text-center">
                        <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                        Telegram:
                    </h5></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><small><b>+38(097)-111-78-95</b></small></td>
                    <td><b>mothertongueschool@gmail.com</b></td>
                    <td><b>@MotherTongueSchool</b></td>
                </tr>
                </tbody>
            </Table>
            <div className="d-md-none text-center">
                <h5 className="fw-semibold text-center">
                    <svg style={{marginRight:"5px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-phone" viewBox="0 0 16 16">
                        <path
                            d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Телефон:
                </h5>
                <p>+38(097)-111-78-95</p>
                <h5 className="fw-semibold text-center">
                    <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    E-mail
                </h5>
                <p className="mx-auto"><small>mothertongueschool@gmail.com</small></p>
                <h5 className="fw-semibold text-center">
                    <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                    </svg>
                    Telegram:
                </h5>
                <p><small>@MotherTongueSchool</small></p>
            </div>
        </div>

        <h6 className=" bg-light text-center mx-auto fs-4 mb-0 pt-3 "><b>Наші партнери:</b></h6>
            <Container fluid className="p-4 bg-light" style={{minWidth:""}}>
                <Row xs={1} md={3}  className="g-0 justify-content-md-around align-items-center pb-3">
                    <Col md="auto">
                    <img src={process.env.PUBLIC_URL+"./images/partners/culture_1.png"} className="rounded-5" style={{width: "170px"}} alt="..."/>
                    </Col>
                    <Col md="auto">
                            <img src={process.env.PUBLIC_URL+"./images/partners/blue palace.png"} className="rounded-5" style={{width: "200px"}} alt="..."/>
                    </Col>
              <Col md="auto">
                      <img src={process.env.PUBLIC_URL+"./images/partners/i_mariupil.jpg"} className=  "rounded-5" style={{width: "170px"}} alt="..."/>
              </Col>
                </Row>
                <Row xs={3} md={3} className="g-0  pt-3 justify-content-center border-top border-dark border-3 ">
                 <Col md="auto" xs="auto">
                     <div className=""
                          style={{padding:"", marginBottom: ""}}>
                         <a className="navbar-brand" href="http://t.me/MotherTongueSchool">
                             <svg style={{marginRight:""}} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                  fill="" className="bi bi-telegram" viewBox="0 0 16 16">
                                 <path
                                     d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                             </svg>
                         </a>
                     </div>
                 </Col>
                    <Col xs="auto" md="auto">
                        <div className=""
                             style={{padding:"", marginBottom: ""}}>
                            <a className="navbar-brand" href="https://www.facebook.com/mtschool.kr/">
                                <img src={process.env.PUBLIC_URL+"./images/facebook-128.png" } alt="fb" style={{width:"30px",height:"30px"}}
                                     className="d-inline-block "/>
                            </a>
                        </div>
                    </Col>
                    <Col xs="auto" md="auto">
                        <div className=""
                             style={{padding:"", marginBottom: ""}}>
                            <a className="navbar-brand" href="https://www.instagram.com/mtschool.kr/">
                                <img src={process.env.PUBLIC_URL+"./images/instagram-2-128.png"} alt="inst" style={{width:"30px",height:"30px"}}
                                     className="d-inline-block "/>
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        <p className="text-center mx-auto  bg-light pb-3"><b>&#169; DONEBYMYSELF 2023</b></p>
</div>
    )
}
function MainLand(){
    return(
        <>
            <Main></Main>
            <AboutUs></AboutUs>
            <Programs></Programs>
            {/*<Teachers></Teachers>*/}
            <Events></Events>
            <Contacts></Contacts>
        </>
    )
}
function HomePage(){
    return (
        <>
            <div>
                <Router>
                    <div>
                    <Navigat></Navigat>
                        <Routes>
                            <Route exact path="/" element={<MainLand/>} />
                            <Route path="/prog" element={<Programs/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            {/*<Route path="/teach" element={<Teachers/>}/>*/}
                            <Route path="/event" element={<Events/>}/>
                            <Route path="/contact" element={<Contacts/>}/>
                            <Route path="/kids" element={<KidsProg/>}/>
                            <Route path="/adults" element={<AdultsProg/>}/>
                            <Route path="/business" element={<BusinessProg/>}/>
                            <Route path="/nmt" element={<NMTProg/>}/>
                            <Route path="/form" element={<MTForm/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}
export default HomePage;
