import{BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

function Main(){
    return <div>Main</div>
}
function About(){
    return <div>About</div>
}
function News(){
    return <div>News</div>
}
function NotFound(){
    return <div>Not found</div>
}
function Nav(){
    return  <nav>
        <Link className="links" to="/">Головна сторінка</Link>
        <Link className="links" to="/about">Інформація про сайт</Link>
        <Link className="links" to="/news">Новини</Link>
        <Link className="links" to="/contact">Контакти</Link>
    </nav>
}
function RoutersFunc(){
    return(
        <div>
            <Router>
                <div>
                    <Nav/>
                    <Routes>
                        <Route exact path="/" element={<Main/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route strict path="/news/" element={<News/>}/>
                        <Route path="/contact" element={<h2>Contact</h2>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default RoutersFunc;
