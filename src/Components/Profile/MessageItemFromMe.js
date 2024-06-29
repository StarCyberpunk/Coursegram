import React from 'react';
import MessageItem from "../Shared/SingleComponents/MessageItem";

function MessageItemFromMe() {


    return (
        <div className=''>

            <div className="flex justify-end items-start gap-2.5">
                <MessageItem/>
            </div>

        </div>
    )
        ;
}

export default MessageItemFromMe;