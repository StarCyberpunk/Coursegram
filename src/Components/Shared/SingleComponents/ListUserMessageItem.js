import React from 'react';
import {NavLink} from "react-router-dom";

function ListUserMessagesItem(props) {


    return (

        <li className="flex justify-between gap-x-6 py-5">
            <NavLink className="flex justify-between gap-x-6 py-5"
                aria-current="page" to={props.url ?? '/messages/user'}>
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                     src={props.img ??"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                     alt=""/>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{props.name ?? "Игорь Степанов"}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.email ?? "igor.stepanov@bk.ru"}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{props.jobtype ?? "Co-Founder / CEO"}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Последний раз заходил(а) <time
                    dateTime="2023-01-23T13:23Z">{props.lastseen ?? "3 часа"}</time></p>
            </div>
            </NavLink>
        </li>
    )
        ;
}

export default ListUserMessagesItem;