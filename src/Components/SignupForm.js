import React , {useState} from 'react';
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {

    const [formData , setFormData] = useState({
        firstName : "" ,
        lastName : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
    })

    const [showPassword , setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData(prevData => (
            {
                ...prevData ,
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        const accountData = {
            ...formData
        };
        console.log(accountData);
        toast.success("Account Created")
        navigate("/dashboard");
    }

    const [accountType , setAccountType] = useState("student");

  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-z-1 rounded-full max-w-max'>
            <button className={`${accountType === "student"?"bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
             py-2 px-5 rounded-full trasition-all duration`}
             onClick={() => setAccountType("student")}>
                Student
            </button>
            <button className={`${accountType === "instructor"?"bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
             py-2 px-5 rounded-full trasition-all duration`} 
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='mt-[20px] flex gap-x-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required 
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        value={formData.firstName}
                        placeholder='Enter your first name'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required 
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        value={formData.lastName}
                        placeholder='Enter your last name'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>

            <div className='mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required 
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder='Enter Email Address'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>

            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required 
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder='Enter your Password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                    <span onClick={() => setShowPassword(prev => !prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible font-size = {24} fill="#AFB2BF"/>) : (<AiOutlineEye font-size = {24} fill="#AFB2BF"/>)}
                    </span>
                </label>
                
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required 
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        placeholder='Confirm Password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                    <span onClick={() => setShowPassword(prev => !prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible font-size = {24} fill="#AFB2BF"/>) : (<AiOutlineEye font-size = {24} fill="#AFB2BF"/>)}
                    </span>
                </label>
            </div>
            <button className='bg-yellow-50 rounded-[8px] w-full font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm