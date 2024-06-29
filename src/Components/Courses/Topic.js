import React, {useState} from 'react';
import Testic from "./Testic";
import Lesson from "./Lesson";
import CircleButton from "../Shared/SingleComponents/CircleButton";

function Topic() {
    const [activeElement, setActiveElement] = useState('lesson');

    // Шаг 2: Функции обработчиков
    const handleLessonClick = () => setActiveElement('lesson');
    const handleTestClick = () => setActiveElement('test');
    return (

        <div className='inline-block max-w-screen-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex items-center ms-20 mt-10'>
                <CircleButton href="/mycourses"/>
            </div>

            <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white' >Header</h1>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">сколько из скольки</h1>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                        onClick={handleLessonClick}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-500 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Уроки
                </button>
                <button type="button"
                        onClick={handleTestClick}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-500 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Тесты
                </button>
            </div>
            {activeElement === 'lesson' && <Lesson />}
            {activeElement === 'test' && <Testic />}

        </div>
    );
}

export default Topic;