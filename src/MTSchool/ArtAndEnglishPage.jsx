import React, { useEffect, useRef   } from 'react';
import MenuNavbar from "../elements/MenuNavbar"
import FeedbackForm from "../elements/FeedbackForm"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ArtAndEnglishPage.css'
import 'animate.css';


import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

function ArtAndEnglishPage(){
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            
            const customIcon = new L.Icon({
                iconUrl: markerIconUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: markerShadowUrl,
                shadowSize: [41, 41],
            });

            const map = L.map('map').setView([47.9069773, 33.3885217], 17);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            const houseMarker = L.marker([47.9069773, 33.3885217], { icon: customIcon }).addTo(map);
            houseMarker.bindPopup("<b>Місце проведення</b>").openPopup();

            mapRef.current = map;

            map.invalidateSize();

            window.addEventListener('resize', () => {
                map.invalidateSize();
            });
        }
    }, []);

    return(
        <div>
            <MenuNavbar />
            <main>
                <div className="content">
                    <div className="header">🎨✨Запрошуємо вас до курсу малювання та вивчення англійської мови!</div>
                    <div className="description">
                    У нас  діти зануряться у чудовий світ творчості та мовного розвитку.
🌟 Приєднуйтесь до нас і дозвольте вашій дитині розкрити свій творчий потенціал та освоїти англійську мову з задоволенням!
                    </div>

                    <div className="features">
                    <img src={process.env.PUBLIC_URL+"./images/gifs/ezgif-5-e127b26f43.gif"} className="gif animate__animated animate__fadeInLeft" alt="" />
                            <div className="feature animate__animated animate__fadeInRight">
                                <h3>✅Творчість без меж</h3>
                                <p>Малювання - це вільне вираження фантазії! Діти розвивають моторику, креативність та самовираження через малювання різноманітних образів.</p>
                            </div>

                            <div className="feature animate__animated animate__fadeInRight">
                                <h3>✅Мовне занурення</h3>
                                <p>Навчання англійської мови стає захоплюючим завдяки інтерактивним урокам, іграм та розвагам. Діти з легкістю засвоюють мову, використовуючи її у творчих завданнях.</p>
                            </div>
                            

                            <div className="feature animate__animated animate__fadeInRight">
                                <h3>✅Розвиток комплексно</h3>
                                <p>Наш підхід об'єднує малювання та мовне навчання для гармонійного розвитку дитини. Кожен урок - це можливість вивчати мову та творити мистецтво одночасно.</p>
                            </div>

                            <div className="feature animate__animated animate__fadeInRight">
                                <h3>✅Експертні викладачі</h3>
                                <p>Наші педагоги - це професіонали, які створять атмосферу підтримки та навчання, сприяючи розвитку талантів вашої дитини.</p>
                            </div>
                            
                        </div>

                    <div className="footer" >
                        <div className="footer-info">
                            <div id="map" style={{ height: '500px' }}></div>
                            ❗️Запишіться зараз і даруйте вашим дітям світ нових можливостей! 🌟🎨🌐<br />
                            <b>📌Старт 5 лютого</b><br />
                            🕟Графік 2 дні на тиждень, у проміжку 14:00-17:00<br/>
                            📍Вул. Героїв АТО, 11<br/>
                            📲 Телефон: +38(097)-111-78-95 (telegram, viber)<br />
                            Instagram <a href="https://www.instagram.com/mtschool.kr" blank>@mtschool.kr</a>
                        </div>
                        <FeedbackForm />
                    </div>
                </div>
                
            </main>
            
        </div>
    )
}

export default ArtAndEnglishPage