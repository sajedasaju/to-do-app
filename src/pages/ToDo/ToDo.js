import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ToDoList from './ToDoList';

const ToDo = () => {
    const navigate = useNavigate();
    const navigateAddTask = () => {
        navigate('/addtask')
    }
    const [tasks, setTasks] = useState([]);

    // console.log(isLoading)
    useEffect(() => {
        // setIsLoading(true);
        fetch('https://young-chamber-03759.herokuapp.com/task')
            .then((response) => response.json())
            .then((data) => {

                setTasks(data)

                // console.log("vitor", isLoading)


            });

    }, [tasks])

    return (

        <>
            <div className="flex flex-col w-full border-opacity-50 mt-6">
                <h2 className='text-yellow-500  text-3xl font-bold text-center'>Task List</h2>
            </div>

            <div className="lg:w-3/5 md:w-4/5 sm:w-full mx-auto mt-12">
                <button
                    onClick={navigateAddTask}
                    class="text-white px-4 w-auto h-10 bg-amber-600 rounded-full hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                    </svg>
                    <span>Add Task</span>
                </button>
            </div>


            <div className='lg:w-3/5 md:w-4/5 sm:w-full mx-auto mb-12 mt-3  shadow-2xl rounded-lg'>


                <table className="border-collapse w-full mx-auto ">
                    <thead className='border-t-6 border-slate-700 rounded-xl'>
                        <tr>

                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Serial</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Task name</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Task Description</th>

                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <ToDoList
                                key={task._id}
                                task={task}
                                index={index}
                            ></ToDoList>)
                        }
                    </tbody>
                </table >



                {/* 
                <div div className='flex items-end mr-3 mt-4  bg-transparentt' >
                    <button className=" dark:focus:ring-yellow-800 ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#F6993F] rounded-lg   focus:ring-4 focus:outline-none focus:ring-yellow-300 hover:bg-[#dc9d40] dark:hover:bg-yellow-500 hover:scale-110 transition duration-150 ease-out hover:ease-in">

                        Add Inventory

                    </button>
                </div> */}



            </div >
        </>

    );
};

export default ToDo;