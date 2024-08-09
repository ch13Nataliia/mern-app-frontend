import React from 'react';
import Logo from './Logo';
import { GrSearch } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full  flex container mx-auto items-center px-4 justify-between">
        <div>
          <Logo w={90} h={60} />
        </div>
        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="search product here ..."
            className="w-full outline-none"
          />
          <div className="text-lg bg-orange-200/50 h-8 min-w-[50px] flex items-center justify-center rounded-r-full text-orange-800">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7 justify-between text-orange-800 text-xl cursor-pointer">
          <div>
            <FaRegUser />
          </div>
          <div className="relative">
            <span>
              <FiShoppingCart />
            </span>
            <div className="bg-red-400 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm font-bold">0</p>
            </div>
          </div>

          <div>
            <button className="px-3 py-1 rounded-full text-orange-800 hover:bg-orange-400 bg-orange-200/50">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
