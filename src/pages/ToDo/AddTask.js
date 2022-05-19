import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddTask = () => {
    const [strike, setStrike] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const url = 'http://localhost:5000/task';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success("Item Added Successfully")
                }
            })
        // console.log(e.target[1].value)
        // e.target[1].value = '';
        // e.target[0].value = '';

    }


    return (
        <div className='mt-12'>

            <div className="flex flex-col w-full border-opacity-50 mt-12 justify-center items-center justify-items-center">
                <h2 className='text-yellow-500  text-3xl font-bold text-center mb-10'>Add List</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl justify-center">
                    {
                        strike ? <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none line-through" spellcheck="false" placeholder="Title" type="text" {...register("name")} required />
                            :
                            <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" {...register("name")} required />
                    }
                    {
                        strike ? <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none line-through" spellcheck="false" placeholder="Describe everything about this post here" {...register("description")} required ></textarea>
                            :
                            <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here" {...register("description")} required ></textarea>
                    }



                    <div class="icons flex text-gray-500 m-2">
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>

                    <div class="buttons flex">


                        <button type='submit' class="text-white px-4 w-auto h-10 bg-amber-600 rounded hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </form>

            <div className='flex justify-center mt-2'>
                <button onClick={() => setStrike(!strike)} className='block flex '>
                    <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto "> <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-4 h-4 inline-block mr-1">
                        <path fill="#FFFFFF" d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01
                                    l6.774-6.771l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932
                                    c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881
                                    L5.68,17.217z"/>
                    </svg>Complete</div>
                </button>
            </div>
        </div>

    );
};

export default AddTask;