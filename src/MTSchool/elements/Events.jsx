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
                                        <p className="fs-2 ">MT SCHOOL</p>
                                        <p>вул. Героїв АТО, 11 </p>
                                        <div className="overflow-auto" style={{height:"100px",overflow:"", }}>
                                        <p  style={{}}>Коли: субота, 14 травня, 18:00</p>
                                            <br></br>
                                            <p>Вхід: безкоштовно + реєстрація</p>
                                            <br></br>
                                            <p>Школа іноземних мов MT SCHOOL запрошує вас на захоплюючий пробний урок з Англійської мови.</p><br/>
                                            <p>Для дітей 7-13 років! </p><br/>
                                            <pre>На уроці дітей чекає:
🗣 розмовні вправи
🎥 перегляд улюбленого мультфільму англійською мовою
📱 інтерактивні ігри та вікторини 

⏳ Тривалість уроку 1 година
🛋 Кількість місць обмежена
🏃‍♀️ Поспішайте забронювати своє</pre>
                                        </div>
                                </Card.Text>
                                <Button href="/contact" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col>
                    <Card className=" rounded-5 w-sm-auto mx-sm-auto border-0" style={{ height: '100%' }}>
                        <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/kg36_spongebob_site.png"} />
                        <Card.Body>
                            <Card.Title>Тематичний урок з переглядом мультфільму</Card.Title>
                            <Card.Text>
                                    <p className="fs-2 ">MT SCHOOL</p>
                                   
                                <div style={{height:"100px",overflow:"auto" }}>
                                    <p style={{}}>Днями провели тематичний урок для учнів КГ №36 з переглядом мультфільму мовою оригіналу. Після перегляду діти пройшли тест по мультфільму</p>
                                </div>
                            </Card.Text>
                            <Button href="/contact" variant="" className=" btn btn-outline-dark btn text-white rounded-5 fw-bold mt-md-1" style={{border:"",paddingLeft: "40px", paddingRight: "40px", marginLeft: "", marginRight:"",backgroundColor:"#2a1301"}}>ДОЛУЧИТИСЯ</Button>
                        </Card.Body>
                    </Card>
            </Col>
                <Col>
                    <Card className=" rounded-5 w-sm-auto mx-sm-auto border-0" style={{ height: '100%' }}>
                        <Card.Img className="img-fluid rounded-5" variant="top" src={process.env.PUBLIC_URL+"./images/kindergaden_site.jpg"} />
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
