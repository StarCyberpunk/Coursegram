import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function LoginTelegram() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/profile");
    }
    return (

        <div
            className='flex w-full justify-center min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-96">Расскажите нам
                        о себе</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Как к вам обращаться?</p>
                <form>
                    <div className="mb-6">
                        <input type="email" id="name"
                               className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Имя" required/>
                    </div>
                    <div className="mb-6">
                        <input type="password" id="confirm_password"
                               className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Дата" required/>
                    </div>

                    <button type="submit"
                            onClick={handleClick}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
            </div>


        </div>

    );
}

export default LoginTelegram;