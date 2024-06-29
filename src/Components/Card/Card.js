import React from 'react';
import Header from "../Shared/SingleComponents/Header";
import PaymentMethod from "./PaymentMethod";

function Card() {


    return (
        <div
            className='inline-block h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            <Header title="Способ оплаты"/>
            <h1>Кредитная/дебетовая карта</h1>
            <PaymentMethod href="/add_card"/>

            <h1>Другие способы оплаты</h1>

        </div>
    )
        ;
}

export default Card;