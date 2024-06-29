import React from 'react';
import Search from "../Shared/SingleComponents/Search";

function HeaderCourse(props) {


    return (

        <div className='block top-0 left-0 z-50 w-full h-40 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
            <h1 className='flex ms-20  text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Привет,</h1>
            <h1 className='flex ms-20  text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-5'>Имя</h1>
            <Search/>
        </div>
    );
}

export default HeaderCourse;