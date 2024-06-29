import React from 'react';
import CircleButton from "../Shared/SingleComponents/CircleButton";
import Header from "../Shared/SingleComponents/Header";


function PromoItem(props) {


    return (
        <div
            className="h-full bg-white   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

            <div className="inline-block items-center justify-center m-12 max-w-96 min-h-96 ">

                <img className="rounded-t-lg max-w-[400px] " src={props.img ?? "/default2.png"} alt=""/>
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title ?? "Noteworthy technology acquisitions 2021"}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description ?? "Noteworthy technology acquisitions 2021"}</p>
        </div>
</div>
)
    ;
}

export default PromoItem;