import React from 'react';
import {NavLink} from "react-router-dom";

function Profile() {


    return (
            <div className="inline-block  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10 pt-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                         src="https://celebbio.org/wp-content/cache/thumb/af/6f7872ea99621af_400x400.jpg"
                         alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Имя Фамилия</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <ul className="my-4 space-y-3 min-w-96">
                        
                        <li>
                            <NavLink
                                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                aria-current="page" to='/messages'>
                                <span className="flex-1 ms-3 whitespace-nowrap">Сообщения</span></NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                aria-current="page" to='/interes'>
                                <span className="flex-1 ms-3 whitespace-nowrap">Избранное</span></NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                aria-current="page" to='/none_payment'>
                                <span className="flex-1 ms-3 whitespace-nowrap">Платежи</span></NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                aria-current="page" to='/settings'>
                                <span className="flex-1 ms-3 whitespace-nowrap">Настройки</span></NavLink>
                        </li>
                    </ul>
                    <a className="block min-w-96 px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">Выйти</a>
                </div>
            </div>
    );
}

export default Profile;