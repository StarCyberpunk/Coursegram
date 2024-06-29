import React from 'react';
import {NavLink} from "react-router-dom";

function CourseCard(props) {


    return (
        <div
            className="max-w-screen-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-12">
            <NavLink
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                aria-current="page" to={props.url ?? '/aboutcourse'}><img className="p-8 rounded-t-lg" src={props.img ?? "/course1.png"}
                                                       alt="product image"/></NavLink>
            <div className="px-5 pb-5">
                <h9 className="text-sm font-semibold tracking-tight text-green-500 dark:text-green-500">{props.expair ??  "7 часов пройдено"}</h9>
                <a href="/aboutcourse">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title ??  "Название курса"}</h5>
                </a>
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{props.description ??  "Описание курса"}</h5>
            </div>

        </div>
    );
}

export default CourseCard;