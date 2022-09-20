import React, { useEffect } from 'react';
import { useState } from 'react';
import Brand from '../../assets/image/Group-79.png';
import Hamburger from '../../assets/icon/hamburger';
import Button from '../button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const token = localStorage.getItem('token');

  function handleClickShow() {
    setIsShow(!isShow);
  }

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const DataLists = ['About', 'Service', 'Portofolio', 'Blog', 'Career'];

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 sticky top-0 z-20 border">
      <div className="">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div className="flex items-center">
              <img src={Brand} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </div>
          </Link>
          <div className="flex md:order-2">
            <div className={isAuth ? 'hidden' : ''}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
            <button
              onClick={handleClickShow}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-gray-200  "
            >
              <Hamburger />
            </button>
          </div>
          <div
            className={`${
              isShow ? '' : 'hidden'
            } justify-between items-center w-full md:flex md:w-auto md:order-1 `}
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              {DataLists.map((datalist, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-white hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 duration-100"
                    >
                      {datalist}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
