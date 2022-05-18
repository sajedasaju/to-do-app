import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:5000/task/${taskId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [task])

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        console.log(name, description)

        const updatedUser = { name, description };

        // send data to the server
        const url = `http://localhost:5000/task/${taskId}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success("Task Updated successfully!!")
                navigate('/todo')
                event.target.reset();
            })

    }

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto mt-12">
            <div class="card-body p-0 py-10">
                <h2 className='text-2xl font-bold text-center'>Update Your Task</h2>
                <form onSubmit={handleUpdateUser}>
                    <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                        <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder={task.name} type="text" name='name' required />

                        <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder={task.description} name='description' required ></textarea>



                        <div class="buttons flex items-center justify-items-center justify-center">
                            <div class="btn border border-gray-300  px-4 font-semibold cursor-pointer text-gray-500 py-0">Cancel</div>
                            <button type='submit' class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTask;