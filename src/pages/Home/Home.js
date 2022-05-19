import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div style={{
            background: 'url(https://images.unsplash.com/photo-1520004434532-668416a08753?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className="w-full h-screen bg-center bg-no-repeat bg-cover"
        >


            <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                <div class="mx-4 text-center text-white">
                    <h1 class="font-bold text-6xl mb-4">Welcome to my To-Do App</h1>
                    <div>
                        <Link to='/todo' class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                            Click here
                        </Link>
                        <Link to='/todo' class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                            Or click here
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;