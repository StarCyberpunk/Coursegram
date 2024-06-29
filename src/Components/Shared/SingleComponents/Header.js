import React from 'react';
import CircleButton from "./CircleButton";
import {useNavigate} from "react-router-dom";


function Header(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/profile");
    }
    return <div
        className="flex top-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-start">'
            <CircleButton onClick={props.onClick ?? handleClick}/>
        </div>

        <div className="flex justify-center h-full max-w-lg grid-cols-4 mx-auto font-medium mt-5">
            <h1 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{props.title}</h1>
        </div>
    </div>

}

export default Header;