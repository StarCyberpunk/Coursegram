import React from 'react';
import PromoItem from "../Promo/PromoItem";
import Header from "../Shared/SingleComponents/Header";
import {useNavigate} from "react-router-dom";

function ResultSuccess() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/mycourses");
    }
    const handleClick2 = () => {
        navigate("/topic");
    }

    return (
        <div
            className='inline-block h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            <Header onClick={handleClick2}  title=" "/>
            <PromoItem img="/FlexBABKA.png" title="Молодец" description="Поздравляем с правильными ответами на все вопросы!"/>
            <a
                onClick={handleClick}
                className="inline-flex justify-center min-w-52 min-h-16 mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Вернуться к курсам

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

export default ResultSuccess;