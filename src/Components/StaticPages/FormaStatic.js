import React from 'react';
import PromoItem from "../Promo/PromoItem";
import Header from "../Shared/SingleComponents/Header";
import {useNavigate} from "react-router-dom";

function FormaStatic(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.url);
    }

    return (
        <div
            className='inline-block h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            <Header  title={props.headertitle ?? "Избранное"}/>
            <PromoItem img={props.img ?? "/FlexBABKA.png"} title={props.title ?? "Нет сохраненых курсов"} description={props.description ?? "Попробуйте сохранить курс снова через несколько минут"}/>
            <a
                onClick={handleClick}
                className="inline-flex justify-center min-w-52 min-h-16 mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {props.buttontitle ?? "Перейти к поиску курсов"}

                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    )
        ;
}

export default FormaStatic;