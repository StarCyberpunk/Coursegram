import React from 'react';

function MessageItem(props) {


    return (
        <div className=''>
            <div className="flex items-start gap-2.5 m-4 ">
                <div
                    className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> {props.time ?? " 11:46"}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{props.message ?? "The standard Lorem Ipsum passage, used since the 1500s\n" +
                        "                    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
                        "                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
                        "                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
                        "                    cillum dolore eu fugiat nulla pariatur. \""}</p>
                </div>

            </div>

        </div>
    )
        ;
}

export default MessageItem;