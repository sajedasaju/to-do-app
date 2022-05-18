import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const navigateRegister = () => {
        navigate('/register')
    }
    // const from = location.state?.from?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);



    if (user) {
        navigate(from, { replace: true });
    }


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

    useEffect(() => {
        let error = hookError;
        if (error) {
            if (error?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (error?.code === 'auth/user-not-found') {
                toast("User Not Found");
            }
            else if (error?.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else {
                toast("Something went wrong");
            }

        }

    }, [hookError])

    const handleSubmit = event => {
        event.preventDefault();
        const email = userInfo.email;
        // console.log(email)
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
        navigate('/')
        // console.log(data)
        event.target.email.value = '';
        event.target.password.value = '';
    }
    const resetPassword = async () => {

        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }

    return (
        <>
            <div className="mx-auto lg:w-4/6 container flex items-center  rounded login-container" id="nav">
                <div className="w-full pt-2 p-4 ">

                    <div className="mx-auto md:p-6 md:w-1/2  shadow-2xl bg-gray-200 rounded-lg">
                        <div className="flex flex-wrap justify-between items-center mb-3">
                            <div className='flex justify-center items-center'>
                                <h1 className="text-2xl text-gray-500 hover:text-amber-700 transition duration-500 ">
                                    <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                                    Sign-in-to
                                </h1>

                            </div>
                            <Link to='/' className=" text-orange-400 hover:text-orange-600 transition duration-500">
                                <svg className=" w-6 h-6 inline-block align-bottom" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                Back to Home
                                <i className="fas fa-chevron-circle-left fa-fw"></i>
                            </Link>
                        </div>

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <form onSubmit={handleSubmit} >
                                <div className="mb-4">
                                    <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="text-red-500">&nbsp;*</span>
                                        useremail
                                    </label>

                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <input onChange={handleEmailChange} className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" type="text" name="email" id="email" placeholder="....@example.com" required />

                                    </div>
                                    {errors?.emailError && <p className='error-message italic'>{errors.emailError}</p>}

                                </div>

                                <div className="mb-8">
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
                                    {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                                    <ToastContainer />
                                </div>

                                <div className="mt-8  flex items-center justify-between block text-gray-700 text-sm font-bold mb-2">
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <Link to='/login' onClick={resetPassword} className="font-bold text-sm text-orange-500 hover:text-orange-800">Forget password?</Link>

                                </div>
                                <div className="mb-4 text-center mb-6 mt-4">
                                    <button className="transition duration-500 bg-[#ee953c]  dark:bg-[#FEC165]  text-white font-bold py-2 px-4 rounded focus:outline-none w-4/6 focus:shadow-outline hover:bg-[#e37d18]">
                                        Login
                                    </button>
                                </div>
                                <hr />
                                <div className="mt-8">
                                    <p className="text-sm">
                                        New to Decor Place?

                                        <Link to='/register' onClick={navigateRegister} className="font-bold text-sm text-orange-500 hover:text-orange-800" href="#register">
                                            Please signup
                                        </Link>
                                    </p>
                                </div>
                                <ToastContainer></ToastContainer>
                                {/* <ToastContainer />
                            <SocialLogin></SocialLogin> */}
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Login;