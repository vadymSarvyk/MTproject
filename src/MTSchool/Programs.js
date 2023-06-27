import React, {useState} from "react";
import{BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap";
import {MTForm} from "./Form";
import './Main.css';
export function KidsProg(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)};
    return(
        <div className="row align-items-center p-md-5 pb-5 bg-opacity-75 " style={{ color:"#2a1301",backgroundColor:"",backgroundImage:"url(./images/BG_grey3.png)", backgroundRepeat:"repeat", backgroundSize:"35%",}}>
            <Carousel className="w-75 mx-auto bg-light mt-5 rounded-5 mb-5" variant="dark" activeIndex={index} onSelect={handleSelect} style={{border:"double 0px black",boxShadow: "5px 6px 10px 0px rgba(117,115,117,1)"}}>
                <Carousel.Item>
                    <div className=" d-block d-md-flex justify-content-between" style={{width:""}}>

                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/kidsProg1.jpg"} className="img-fluid rounded-5 " style={{width:""}} alt="..."/>
                        </div>

                        <div className="container-fluid  p-3 bg-light  rounded-5  " style={{width:"", height:"", color:"",marginLeft:""}}>
                            <h4>Для наймолодших</h4>
                            <p className=" mt-1 fs-6 ">Ми вважаємо, що особлива увага має приділятися саме дитячому навчанню. Адже діти дуже швидко засвоюють нову інформацію та нові знання. На цьому етапі найголовнішою задачею є побудова міцного фундаменту для подальшого вивчення мови. Найефективнішою формою дитячого навчанням є групове. Завдяки груповому навчанню дитина не звикає ТІЛЬКИ до репетитора, а вчиться не боятися спілкуватись з іншими людьми. Це дозволяє попередити розвиток бар'єрів у спілкуванні та покращити комунікативні навички дитини.<br/><br/>
                                * Заняття проходять в групі по 4-8 чоловік.<br/>
                               * Кількість занять - 2 рази на тиждень.<br/>
                           * Тривалість занять - по 60 хв.<br/>
                             * Тривалість курсу - 10 місяців.<br/>
                               * Вартість курсу - 900 грн</p>
                            <Button href="/form" className="btn btn-dark mt-md-3 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <p className=" mt-1 fs-6">Якщо Ви хочете успішно скласти шкільний іспит, вступний іспит до іноземного університету або отримати сертифікат про підтвердження знань мови в майбутньому - попіклуйтеся про якісне та комфортне вивчення мови вже зараз!
                                З нами ви будете мати змогу покращити успішність в школі та нарешті розібратися в тих темах, які здавалися складними та незрозумілими. Інвестуйте в свої "екзамени на відмінно" вже сьогодні!<br/><br/>
                                * Заняття проходять в групі по 4-8 чоловік або індивідуально.<br/>
                                * Кількість занять - 2 рази на тиждень.<br/>
                                * Тривалість занять - по 60 хв.<br/>
                                * Тривалість курсу - 10 місяців.<br/>
                                * Вартість курсу - 900 грн<br/>
                            </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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

                        <div className="container-fluid  mx-auto pt-3 mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg3.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>

                        <div className="container-fluid p-3 ps-1 pe-5 " style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Beginner/Elementary </h4>
                            <p className="card-text mt-1 fs-6">Ви отримаєте знання структури мови та зрозумієте основні її принципи та правила. Збудуєте міцний та надійний фундамент, на основі якого подальше вивчення мови стане набагато легшим.<br/>
                                * Зможете розуміти пропозиції та вирази, що часто використовуються у основних сферах життя (базова інформація про сім'ю, покупки, географію, роботу).<br/>
                                * Зможете спілкуватися на прості та щоденні теми, що вимагають простого та прямого обміну інформацією на знайомі чи побутові теми.<br/>
                                * Зможете в простих висловлюваннях описати окремі аспекти свого минулого, сьогодення, а також питання щодо областей, з якими ви безпосередньо взаємодієте.<br/><br/>
                                Також Ви отримаєте наш сертифікат про проходження рівня <b>Elementary</b>, який дасть Вам знижку на рівень <b>Pre-Intermediate</b>.
                            </p>
                            <Button href="/form" className="btn btn-dark mt-md-3 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between " style={{width:""}}>
                        <div className="container-fluid  mx-auto pt-3 mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg1.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3 ps-1  pe-5" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Pre-intermediate</h4>
                            <p className="card-text mt-1 mb-3 fs-6">Ви зможете розуміти основні ідеї стандартних пропозицій на знайомі теми, які регулярно зустрічаються на роботі, у школі, на відпочинку і т.д.<br/><br/>
                                * Зможете спілкуватися в більшості ситуацій, які можуть виникнути під час перебування в країні, де говорять мовою, що вивчається (шопінг, запитати дорогу, замовити їжу в кафе/ресторані).<br/>
                                * Зможете дивитися англомовний контент і розуміти суть почутого.<br/>
                                * Зможете скласти текст на теми, які йому добре знайомі чи цікавлять його особисто.<br/>
                                * Зможете описати враження, події, мрії, надії та прагнення, викласти та обґрунтувати свою думку та плани.<br/><br/>
                                Також Ви отримаєте наш сертифікат про проходження рівня <b>Pre-Intermediate</b>, який дасть Вам знижку на рівень <b>Intermediate</b></p>
                            <Button href="/form" className="btn btn-dark mt-md-3 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-between " style={{width:""}}>
                        <div className="container-fluid  mx-auto pt-3 mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/adultsProg2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3 ps-1  pe-5" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Intermediate</h4>
                            <p className="card-text mt-1 fs-6">Ви зможете розуміти основні ідеї конкретних та абстрактних повідомлень, включаючи обговорення у професійній сфері.<br/><br/>
                                * Зможете дивитися англомовний контент, читати книги англійською та розуміти про що йдеться у піснях англійською мовою.<br/>
                                * Зможете практично вільно та без попередньої підготовки обговорювати різні теми з носіями мови, не створюючи додаткових незручностей для них.<br/>
                                * Зможете скласти зрозумілий та деталізований текст на різні теми.<br/>
                                * Зможете описати враження, події, мрії, надії та прагнення, викласти та обґрунтувати свою думку та плани.<br/><br/>
                                Також Ви отримаєте наш сертифікат про проходження рівня <b>Intermediate</b>, який дасть Вам знижку на вiдвiдування наших спiкiнг-клабiв.
                            </p>
                            <Button href="/form" className="btn btn-dark mt-md-3 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <p className="card-text mt-1 fs-6">Якщо Ви хочете співпрацювати з іноземними клієнтами або партнерами - груповий курс бізнес англійської це саме те, що Вам потрібно!  Групові заняття це гарний спосіб підняти продуктивність команди в якій ви працюєте.Також це є чудовий вид тімбілдінгу, що є великим та безсумнівним плюсом! <br/>
                            * Група від 4х людей.<br/>
                            * Заняття - 3 рази на тиждень.<br/>
                            * Тривалість заняття - 80 хв.<br/>
                            * Вартість одного заняття - від 110 грн.<br/>
                            </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <div className="d-block d-md-flex justify-content-center " style={{width:""}}>
                        <div className="container-fluid  mx-auto mt-3 mt-md-0" style={{width:"", height:"", color:"",}}>
                            <img src={process.env.PUBLIC_URL+"./images/businessProg2.jpg"} className="img-fluid rounded-5" alt="..."/>
                        </div>
                        <div className="container-fluid p-3" style={{width:"", height:"", color:"",marginLeft:"10px"}}>
                            <h4>Індивідуальні заняття</h4>
                            <p className="card-text mt-1 fs-6">Ліс ще дрімає в передранішній тиші… Непорушне стоять дерева, загорнені в сутінь, рясно вкриті краплистою росою. Тихо навкруги, мертво… Лиш де-не-де прокинеться пташка, непевним голосом обізветься зі свого затишку. Ліс ще дрімає…   </p>
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white", width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
                        </div>
                    </div>
                </Carousel.Item> */}
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
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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
                            <Button href="/form" className="btn btn-dark mt-md-5 p-2 rounded-3 fw-bold me-auto mb-5" style={{border:"double 0px white",width:"150px", backgroundColor:"#2a1301"} }>Приєднатися</Button>
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