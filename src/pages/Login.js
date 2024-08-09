import React, { useState } from 'react';
import LoginIcons from '../assets/signin.gif';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white text-orange-800 p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20  mx-auto">
            <img src={LoginIcons} alt="logo-icon" />
          </div>
          <form>
            <div className="grid">
              <label>Email: </label>
              <div className=" bg-slate-100 p-2 ">
                <input
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
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot password</Link>
            </div>
            <button className="mx-auto block mt-4 px-6 py-2 w-full max-w-[150px]  rounded-full bg-orange-200 text-orange-800 hover:scale-110 transition-all hover:bg-orange-400 hover:text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
