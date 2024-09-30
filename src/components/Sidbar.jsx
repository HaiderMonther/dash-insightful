import React, { useState } from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import cotrol from '../assets/images/control.png';
import logoSid from '../assets/images/logoSid.svg';
import Nav from '../components/Nav';

function Sidbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "الاحصائيات", src: "Chart_fill" },
    { title: "التقارير", src: "Chat" },
    { title: "الاساتذة", src: "User", gap: true },
    { title: "بحث عن الاستاذ ", src: "Search" },
    { title: "الاعدادات", src: "Setting" },
  ];

  return (
    <div className="flex min-h-screen">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-dark-purple  p-5 pt-8 relative duration-300 hidden sm:block`}
      >
        <img
          src={cotrol}
          className={`absolute cursor-pointer -left-3 top-20 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center relative -top-6">
          <img
            src={logoSid}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            نافذ البصيرة
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-2" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/images/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content with Nav and Flex Grow */}
      <div className="flex-1">
        <Nav />
        <Routes>
        <Route path='/'element= {<Home />} />
        <Route path='*'element= {<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Sidbar;
