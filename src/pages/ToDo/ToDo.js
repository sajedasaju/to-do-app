import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ToDo = () => {
    const navigate = useNavigate();
    const navigateAddTask = () => {
        navigate('/addtask')
    }
    return (

        <>
            <div className="flex flex-col w-full border-opacity-50 mt-6">
                <h2 className='text-yellow-500  text-3xl font-bold text-center'>Manage Inventories</h2>
            </div>

            <div className="lg:w-3/5 md:w-4/5 sm:w-full mx-auto mt-12">
                <button
                    onClick={navigateAddTask}
                    class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
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

                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Task name</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Task Description</th>

                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 border-4">

                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static  break-all">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase bg-[#95a3bdb8]">Inventory name</span>
                                <span className="rounded bg-[#dcfce7] py-1 px-3 text-xs font-bold">name</span>

                            </td>
                            <td className="w-full lg:w-auto p-3 pt-6  text-gray-800 text-center border border-b block lg:table-cell relative lg:static  break-all">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase bg-[#95a3bdb8]">Description</span>
                                description
                            </td>

                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static  break-all">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase bg-[#95a3bdb8]">Actions</span>
                                <span className="text-yellow-500 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-700 mx-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-red-700  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </td>
                            <ToastContainer></ToastContainer>
                        </tr>
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