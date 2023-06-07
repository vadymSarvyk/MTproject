import React, {useState} from "react";
import{BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap";
import {MTForm} from "./Form";
export function KidsProg(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)};
    return(
        <div className="row align-items-center p-md-5 pb-5 bg-opacity-75 " style={{ color:"#2a1301",backgroundColor:"",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <Carousel className="w-75 mx-auto bg-light mt-5 rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between" style={{width:""}}>

                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/kidsProg1.jpg"} className="img-fluid rounded-5 " style={{width:""}} alt="..."/>
                        </div>

                        <div className="container-fluid  p-3 bg-light  rounded-5  " style={{width:"", height:"", color:"",marginLeft:""}}>
                            <h4>Для наймолодших</h4>
                            <p className=" mt-1 fs-6 ">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/kidsProg2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid  p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Для школярів</h4>
                            <p className=" mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/kidsProg3.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Індивідуальні заняття</h4>
                            <p className=" mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
            );
}
export function AdultsProg(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)};
    return(
        <div className="row  align-items-center p-md-5 pb-5 bg-opacity-75 " style={{ color:"#2a1301",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <Carousel className="w-75 mx-auto bg-light mt-5 rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between " style={{width:""}}>

                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg3.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>

                        <div className="container-fluid p-3 " style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Заняття в команді</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg1.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Індивідуальні заняття</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Підготовка до співбесіди</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export function BusinessProg(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)};
    return(
        <div className="row  align-items-center p-md-5 pb-5 bg-light bg-opacity-75 " style={{ color:"#2a1301",backgroundColor:"",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <Carousel className="w-75 mx-auto mt-5 bg-light rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between " style={{width:""}}>

                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/businessProg1.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>

                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Заняття в команді</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/businessProg2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Індивідуальні заняття</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/businessProg3.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Для будь-яких вікових груп</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export function NMTProg(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)};
    return(
        <div className="row  align-items-center p-md-5 pb-5 bg-light bg-opacity-75 " style={{ color:"#2a1301",backgroundColor:"",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <Carousel className="w-75 mx-auto mt-5 bg-light rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between " style={{width:""}}>

                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/teens1.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>

                        <div className="container-fluid p-3 " style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Заняття в команді</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/teens2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Індивідуальні заняття</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/teens3.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Підготовка до навчання закордоном</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
function RunForm(){
    return(
        <>
                <div>
                    <Router>
                        <div>
                            <Routes>
                                <Route path="/form" element={<MTForm/>}/>
                            </Routes>
                        </div>
                    </Router>
                </div>

        </>
    )
    }

export default RunForm;