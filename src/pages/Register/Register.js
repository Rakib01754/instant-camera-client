import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { signUp, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider();

    // email password register 
    const handleRegisterSubmit = data => {
        const name = data.name;
        const email = data.email;
        const userType = data.userType;
        const password = data.password;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`${userType} registtaion success`)
                updateProfile(user, {
                    displayName: name,
                }).then(() => {
                    toast.success(`Information Updated`)
                    saveUserToDb(name, email, userType)

                })
                    .catch((error) => {
                        // An error occurred
                        console.log(error)
                    });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage)
            })
    };

    // google login 
    const handleGoogleLogin = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const userType = 'Buyer';
                saveUserToDb(name, email, userType);
                toast.success('Google Login Successful')
            })
    }

    // save user to database 

    const saveUserToDb = (name, email, userType) => {
        const registredUser = { name, email, userType }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registredUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-4xl font-semibold text-center text-[#256D85]  uppercase">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(handleRegisterSubmit)} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register("name", { required: true, maxLength: 80 })}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            {...register("password", { required: true })}
                            className="block w-full px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800 mb-3"
                        >
                            What Type Account You Want to open?
                        </label>
                        <select className=" w-[50%] px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("userType", { required: true })}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#256D85] rounded-md hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                            Register
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg> <span className='font-bold ml-2 text-[#256D85]'>Sing in with google </span>
                    </button>


                </div>

                <p className="mt-8 text-sm font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}


export default Register;
