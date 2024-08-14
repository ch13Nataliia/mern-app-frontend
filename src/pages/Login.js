import React, { useState } from 'react';
import LoginIcons from '../assets/signin.gif';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const[data, setData] = useState({
    email: "",
    password: ""
  })
const handleOnChange = (e) => {
  const { name, value} = e.target

  setData((preve) => {
    return{
      ...preve,
      [name] : value
  }
  })
}
const handleSubmit = (e) => {
  e.preventDefault()
}

console.log('data login', data)
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white text-orange-800 p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20  mx-auto">
            <img src={LoginIcons} alt="logo-icon" />
          </div>
          <form className='pt-8' onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email: </label>
              <div className=" bg-slate-100 p-2 ">
                <input
                 onChange={handleOnChange}
                name='email'
                value={data.email}
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className=" bg-slate-100 p-2 flex ">
                <input
                  onChange={handleOnChange}
                  name='password'
                  value={data.password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot password?</Link>
            </div>
            <button className="mx-auto block mt-4 px-6 py-2 w-full max-w-[150px]  rounded-full bg-orange-200 text-orange-800 hover:scale-110 transition-all hover:bg-orange-400 hover:text-white">
              Login
            </button>
          </form>
          <p className='my-6 text-center hover:scale-110 hover:text-red-500'>Don't have account? <Link to={'/sign-up'} className='hover:underline'><span className=''>Sign Up

          </span></Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
