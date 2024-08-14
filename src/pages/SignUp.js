import React, { useState } from 'react';
import LoginIcons from '../assets/signin.gif';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white text-orange-800 p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20  mx-auto">
            <img src={LoginIcons} alt="logo-icon" />
          </div>

          <form className="pt-8" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name</label>
              <div className=" bg-slate-100 p-2 ">
                <input
                  onChange={handleOnChange}
                  name="name"
                  value={data.name}
                  type="text"
                  placeholder="enter your name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email: </label>
              <div className=" bg-slate-100 p-2 ">
                <input
                  onChange={handleOnChange}
                  name="email"
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
                  name="password"
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
            </div>
            <div>
              <label>Confirm Password: </label>
              <div className=" bg-slate-100 p-2 flex ">
                <input
                  onChange={handleOnChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="enter confirm password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <button className="mx-auto block mt-4 px-6 py-2 w-full max-w-[150px]  rounded-full bg-orange-200 text-orange-800 hover:scale-110 transition-all hover:bg-orange-400 hover:text-white">
              Sign Up
            </button>
          </form>
          <p className="my-6 text-center hover:scale-110 hover:text-red-500">
            Do you have account?{' '}
            <Link to={'/login'} className="hover:underline">
              <span className="">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
