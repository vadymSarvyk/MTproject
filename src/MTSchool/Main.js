import React from "react";
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Main.css';
import {MTForm} from "./Form";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ProgramsPage from "./pages/ProgramsPage";
import KidsProgPage from "./pages/KidsProgPage";
import AdultsProgPage from "./pages/AdultsProgPage";
import BusinessProgPage from "./pages/BusinessProgPage";
import NMTProgPage from "./pages/NMTProgPage";
import ArtAndEnglishPage from "./pages/ArtAndEnglishPage";

function Main(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/admin" element={<AdminPage/>}/>

                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/programs" element={<ProgramsPage/>}/>
                    <Route path="/event" element={<EventsPage/>}/>
                    <Route path="/art-english" element={<ArtAndEnglishPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>

                    <Route path="/kids" element={<KidsProgPage/>}/>
                    <Route path="/adults" element={<AdultsProgPage/>}/>
                    <Route path="/business" element={<BusinessProgPage/>}/>
                    <Route path="/nmt" element={<NMTProgPage/>}/>

                    {/* Невирізана форма */}
                    <Route path="/form" element={<MTForm/>}/>
                    
                </Routes>
            </Router>
        </div>
    )
}
export default Main;