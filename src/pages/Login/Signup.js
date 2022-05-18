import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [updateProfile, updating, error] = useUpdateProfile(auth);


    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, emailError: "" });
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (event) => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be up to 6 length" })
            setUserInfo({ ...userInfo, password: "" })

        }
    }


    const handleConfirmPasswordChange = (event) => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: "" })
            setErrors({ ...errors, passwordError: "Password and confirm password does not match" })
        }
    }

    if (user) {
        navigate('/')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            toast("Password didn't matched");
        }
        else {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }


    }
    useEffect(() => {
        if (hookError) {

            if (hookError?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (hookError.code === 'auth/missing-email') {
                toast("Missing Email.");
            }
            else if (hookError.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else if (hookError.code === 'auth/internal-error') {
                toast("Internal Error.");
            }
            else {
                toast.error(`${hookError?.message}`)
            }

        }

    }, [hookError])

    if (loading) {
        return <p>Loading</p>
    }
    return (
        <>

            <div className="mx-auto lg:w-4/6 container flex items-center  rounded registerContainer" id="nav">
                <div className="w-full pt-2 p-4 ">

                    <div className="mx-auto md:p-6 md:w-1/2  shadow-2xl bg-gray-200 rounded-lg">
                        <div className="flex flex-wrap justify-between items-center mb-3">
                            <div className='flex justify-center items-center'>
                                <h1 className="text-2xl text-gray-500 hover:text-amber-700 transition duration-500 ">
                                    <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                                    Sign-up
                                </h1>

                            </div>
                            <Link to='/' className=" text-orange-400 hover:text-orange-600 transition duration-500">
                                <svg className=" w-6 h-6 inline-block align-bottom" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                Back to Home
                                <i className="fas fa-chevron-circle-left fa-fw"></i>
                            </Link>
                        </div>

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <form onSubmit={handleRegister} >
                                <div className="mb-4">
                                    <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="text-red-500">&nbsp;*</span>
                                        useremail
                                    </label>

                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <input onChange={handleEmailChange} className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" type="email" name="email" id="email" placeholder="....@example.com" required />
                                        {errors?.emailError && <p className='error-message italic'>{errors.emailError}</p>}
                                    </div>
                                    {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                                </div>

                                <div className="mb-4">
                                    <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="text-red-500">&nbsp;*</span>
                                        Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder='password' required className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" />

                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="text-red-500">&nbsp;*</span>
                                        confirm Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input onChange={handleConfirmPasswordChange} type="password" name="confirmPassword" id="confirm-password" placeholder='confirm-password' required className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" />
                                        {errors?.passwordError && <p className='error-message italic'>{errors.passwordError}</p>}
                                    </div>
                                </div>

                                <div className="mb-4 text-center">
                                    <button className="transition duration-500 bg-orange-400 hover:bg-orange-400/75 text-white font-bold py-2 px-4 rounded focus:outline-none w-4/6 focus:shadow-outline" type="submit">
                                        SignUp
                                    </button>
                                </div>
                                <hr />
                                <div className="mt-8">
                                    <p className="text-sm">
                                        Already have an account?

                                        <Link to='/login' onClick={navigateLogin} className="font-bold text-sm text-orange-500 hover:text-orange-800" href="#register">
                                            Please Login
                                        </Link>
                                    </p>
                                </div>
                                <ToastContainer></ToastContainer>
                            </form>


                        </div>
                    </div>
                </div>
            </div>



            {/* 
        <div className='bg-gray-100 login-container flex flex-col justify-center border-solid rounded-md shadow-xl'>
            <form onSubmit={handleRegister} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-3xl text-white font-bold text-center'>Register</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input onChange={handleEmailChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="email" id="email" placeholder='email' required />

                </div>
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input onChange={handlePasswordChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" id="password" placeholder='Password' required />

                </div>


                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input onChange={handleConfirmPasswordChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="confirm-password" id="confirm-password" placeholder='confirm-password' required />

                </div>
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                <div className='flex justify-between text-gray-400 py-2'>
                    <p>Already have an account?</p>
                    <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link>

                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded text-white'>Register</button>
                <ToastContainer></ToastContainer>
                <SocialLogin></SocialLogin>

            </form>
        </div> */}
        </>
    );
};

export default Signup;