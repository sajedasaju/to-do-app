import React from 'react';
import Header from './Header';

const Home = () => {
    return (


        <div className='w-full mx-auto'>
            <div class='flex '>
                <div class='w-1/2 p-10 bg-gradient-to-r from-yellow-100'>
                    <h1 class="mb-16 text-2xl">WBSTNM</h1>
                    <p class='mb-5 text-5xl uppercase tracking-widest'> <span class="text-yellow-400">we're</span> <br /> coming
                        <br /> soon</p>
                    <p class="mb-7 text-sm leading-snug text-yellow-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <input type="email" class="h-11 rounded-full bg-transparent border-yellow-300 border w-2/4" />
                        <button class="bg-gradient-to-r from-yellow-300 to-yellow-500 h-11 w-20 rounded-full text-white -m-12"> &#62; </button>
                    </div>
                </div>
                <div class="w-1/2 mr-auto">
                    <img src="https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="Waiting Image" />
                </div>
            </div>

        </div>
    );
};

export default Home;