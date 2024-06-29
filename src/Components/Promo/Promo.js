import React, {useState} from 'react';
import PromoItem from "./PromoItem";
import Header from "../Shared/SingleComponents/Header";
import {useNavigate} from "react-router-dom";

function Promo(props) {

    const [activeElement, setActiveElement] = useState('first');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }
    let button_title = "Далее"

    const handleTestClick = () =>{
        {activeElement === 'first' && setActiveElement('second');}
        {activeElement === 'second' && setActiveElement('third');}
        {activeElement === 'third' && handleClick();}
    };
    const handleReturnTestClick = () =>{
        {activeElement === 'third' && setActiveElement('second');}
        {activeElement === 'second' && setActiveElement('first');}
        {activeElement === 'first' && setActiveElement('first');}
    };
    return (

        <div className='inline-block h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            <Header onClick={handleReturnTestClick} title=" "/>
            {activeElement === 'first' && <PromoItem title="Учись в любое время и в любом месте" description = "Открой новые горизонты для саморазвития"/>}
            {activeElement === 'second' && <PromoItem title="Найди курс для себя" description = "Открой новые горизонты для саморазвития" img='/BLM.png'/>}
            {activeElement === 'third' && <PromoItem title="Улучши свои навыки" description = "Мастерство в твоих руках: развивай свои навыки с лучшими методами" img='/promo3.png' />}
            <a
               onClick={handleTestClick}
               className="inline-flex justify-center min-w-52 min-h-16 mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {button_title}

            </a>
        </div>
    );
}

export default Promo;