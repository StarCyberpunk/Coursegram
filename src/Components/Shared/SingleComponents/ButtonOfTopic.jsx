import React from 'react';
import {NavLink} from "react-router-dom";

function ButtonOfTopic(props){
    const href = "/" + props.href;

    return (
        <NavLink
            className="flex min-w-20 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            to={href}>
            <img className="p-8 rounded-t-lg w-2/6" src={props.img ?? "/course1.png"} alt="product image"/>
            <div className="start-10 p-8 rounded-t-lg w-2/5 ">
                <span className="flex-1 ms-3 whitespace-nowrap">{props.title ?? "Тема"}</span>
                <div className="mt-10 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: 45}}></div>
                </div>
            </div>
        </NavLink>
    );
}

export default ButtonOfTopic;