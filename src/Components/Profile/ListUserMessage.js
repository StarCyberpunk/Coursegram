import React from 'react';
import ListUserMessagesItem from "../Shared/SingleComponents/ListUserMessageItem";
import Header from "../Shared/SingleComponents/Header";

function ListUserMessages() {


    return (
        <div className='flex flex-col gap-4'>
            <Header title="Сообщения"/>
            <ul role="list" className="divide-y divide-gray-100">
                <ListUserMessagesItem/>
                <ListUserMessagesItem/>
                <ListUserMessagesItem/>

            </ul>

        </div>
    )
        ;
}

export default ListUserMessages;