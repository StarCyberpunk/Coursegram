import React from 'react';
import Pagination from "../Shared/SingleComponents/Pagination";
import AnswerButton from "../Shared/SingleComponents/AnswerButton";

function Testic() {


    return (

        <div
            className='max-w-screen-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className=" mt-10">
                <Pagination/>
                <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10'>Вопросик</h1>

                <img className="inline-block justify-center w-1/3 p-8 rounded-t-lg" src="/course1.png"
                     alt="product image"/>
            </div>
            <ul className="my-4 space-y-3 min-w-96">
                <AnswerButton url="/success" title="Правильный ответ"/>
                <AnswerButton url="/unsuccess" title="Неправильный ответ"/>
                <AnswerButton/>
            </ul>


        </div>
    );
}

export default Testic;