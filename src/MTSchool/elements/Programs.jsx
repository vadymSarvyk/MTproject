import React, { useState, useEffect } from 'react';
import{Link} from "react-router-dom";
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import ProgramsContent from "./ProgramsContent"


function Category(props) {
    const {category} = props

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    
    return (
        <React.Fragment>
            {isModalOpen && (
                <Dialog maxWidth={'xl'} open={isModalOpen} onClose={closeModal}>
                    <DialogTitle></DialogTitle>
                    <DialogContent>
                        <ProgramsContent programs={category.programs} />
                    </DialogContent>
                </Dialog>
            )}

            <div key={category._id} className="skill col-md-2 col-sm-8 rounded-5 text-start bg-light bg-opacity"
                style={{ border: "double 0px black", minWidth: "250px", padding: "20px", color: "#2a1301", marginTop: "80px" }}>
                <h4 style={{ marginBottom: "20px" }}><b>{category.categoryName}</b></h4>
                <p className="text-secondary"><small>{category.description}</small></p>
                <p style={{cursor: "pointer"}} className="links" onClick={openModal}><b>Дізнатися більше &rarr;</b></p>
            </div>
        </React.Fragment>
    )
}

function Programs(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/get-program-categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    return(
        <div id="prog" className="row justify-content-around align-items-center pt-0 pb-5 p-3" style={{paddingBottom: "100px",color:"#2a1301", backgroundColor:"#faf0eb",backgroundImage:"url()", backgroundRepeat:"repeat", backgroundSize:"35%", }}>
            <h4 className="display-4 text-center border-bottom border-dark border-3 p-3 w-75" style={{marginTop: "50px"}} ><b>Наші найпопулярніші програми</b></h4>
            <h4 className=" text-center mt-5" >Для будь-якоі вікової категорії, рівня володіння мовою і поставлених цілей. </h4>

            <div className="skill col-md-2 col-sm-8 rounded-5 text-start bg-light bg-opacity"
                style={{border:"double 0px black", width:"", minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
                <h4 className="" style={{marginBottom:"20px"}}><b>Для дітей</b></h4>
                <p className="text-secondary"><small>Практика показує, що ті, хто починали вивчення мови з дитячих років, мають найкращі результати серед однолітків. Саме тому наші викладачі працюють за сучасними матеріалами світових видань для досягнення найкращих результатів у вивченні іноземних мов.</small></p>
                <p><Link to="/kids" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
            </div>

            <div className="skill col-md-2 col-sm-8 rounded-5 text-start bg-light bg-opacity"
                style={{border:"double 0px black", width:"",minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
                <h4 className="" style={{marginBottom:"20px"}}><b>Для дорослих</b></h4>
                <p className="text-secondary"><small>Ви знали,що 8 з 10 людей, які починають вивчати мову, мають неправильне уявлення про свій рівень знання англійської? Ми допоможемо Вам оцінити себе і вдосконалити свої досягнення, бо саме реальне розуміння своїх сил дозволяє вірно скласти програму навчання і зробити свої заняття ефективними.
                </small></p>
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                <p><Link to="/adults" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
            </div>

            <div className="skill col-md-2 col-sm-8 rounded-5 text-start bg-light bg-opacity"
                style={{border:"double 0px black", width:"", minWidth:"250px", padding:"20px", boxShadow: "",color:"#2a1301",marginTop:"80px", backgroundColor:""}}>
                <h4 className="" style={{marginBottom:"20px"}}><b>Для бізнесу</b></h4>
                <p className="text-secondary"><small>Курси бізнес англійської - це прекрасна можливість вивчити англійську мову саме в Вашій сфері діяльності. Спілкуйтесь з іноземними колегами, замовниками або підвищуйте свій професійний рівень майстерності за допомогою іноземних джерел та ресурсів.</small></p>
                <p><Link to="/business" className="links" ><b>Дізнатися більше &rarr;</b></Link></p>
            </div>
            
            {/* ТЕСТОВЕ */}

            {categories.map((category) => (
                <Category category={category} />
            ))}

        </div>

    )
}

export default Programs
