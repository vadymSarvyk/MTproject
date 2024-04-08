import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
                                <Button href="/contact" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
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
                            <Button href="/contact" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                        </Card.Body>
                    </Card>
            </Col>
                <Col>
                    <Card className=" rounded-5 w-sm-auto mx-sm-auto border-0" style={{ height: '100%' }}>
                        <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/childr1.jpg"} />
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
                            <Button href="/contact" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Events
