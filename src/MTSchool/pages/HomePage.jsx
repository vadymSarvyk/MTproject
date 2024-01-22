import AboutUs from "../elements/AboutUs"
import Events from "../elements/Events"
import FeedbackForm from "../elements/FeedbackForm"
import Header from "../elements/Header"
import MenuNavbar from "../elements/MenuNavbar"
import Programs from "../elements/Programs"

function HomePage(){
    return(
        <div>
            <MenuNavbar></MenuNavbar>
            <Header></Header>
            <AboutUs></AboutUs>
            <Programs></Programs>
            <Events></Events>
            <FeedbackForm></FeedbackForm>
        </div>
    )
}

export default HomePage