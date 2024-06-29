import React from 'react';
import {useNavigate} from "react-router-dom";

function AnswerButton(props){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.url ?? "/");
    }
    return (
        <li>
            <a href="#"
               onClick={handleClick}
               className="flex min-w-14 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">{props.title ?? "ответ"}</span>
            </a>
        </li>

    );
}

export default AnswerButton;
