import React from 'react';
import Header from "../Shared/SingleComponents/Header";

function PaymentMethod(props) {


    return (
        <div
            className='flex flex-row justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            <a href={props.href}
               className="flex min-w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <div className='block w-12 '>
                    <svg viewBox="0 -48 384 384" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m368 0h-352c-8.832031 0-16 7.167969-16 16v256c0 8.832031 7.167969 16 16 16h32c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-16v-224h320v224h-240c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h256c8.832031 0 16-7.167969 16-16v-256c0-8.832031-7.167969-16-16-16zm0 0"></path>
                        <path
                            d="m240 216c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-16c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16zm0 0"></path>
                        <path
                            d="m304 216c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-16c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16zm0 0"></path>
                        <path
                            d="m112 144c8.832031 0 16-7.167969 16-16v-32c0-8.832031-7.167969-16-16-16h-32c-8.832031 0-16 7.167969-16 16v32c0 8.832031 7.167969 16 16 16zm0 0"></path>
                    </svg>
                </div>

                <span className="flex-1 ms-3 whitespace-nowrap">Карта</span>
            </a>


        </div>
    )
        ;
}

export default PaymentMethod;