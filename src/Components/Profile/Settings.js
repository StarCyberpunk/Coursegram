import React from 'react';

function Settings() {


    return (
        <div
            className="inline-block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div
                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  dark:bg-gray-600 dark:text-white">
                Настройки
            </div>
            <div
                className="flex justify-center min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  dark:bg-gray-600 dark:text-white">

                <img className="flex rounded-t-lg m-20 w-4/12 content-center" src="/settings.png" alt=""/>
            </div>
            <div
                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  dark:bg-gray-600 dark:text-white">
                >Уведомление
            </div>
            <h1>Информация об аккаунте</h1>
            <ul className=" my-4 space-y-3 min-w-72">
                <li>
                    <a href="#"
                       className="flex min-h-16 min-w-14  items-center p-3 text-base font-bold text-blue-900 rounded-lg bg-blue-50 hover:bg-blue-100 group hover:shadow dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Имя</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="flex min-w-14 items-center p-3 text-base font-bold text-blue-900 rounded-lg bg-blue-50 hover:bg-blue-100 group hover:shadow dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">Email</span>
                    </a>
                </li>
            </ul>
        </div>
    )
        ;
}

export default Settings;