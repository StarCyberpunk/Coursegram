import React from 'react';
import {NavLink} from "react-router-dom";

function CircleButton(props){


    return (
        <button type="button"
                onClick={props.onClick}
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6H20M4 6L8 4M4 6L8 8"/>
            </svg>
            <span className="sr-only">Icon description</span>
        </button>
    );
}

export default CircleButton;