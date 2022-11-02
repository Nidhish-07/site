import React, { useState } from "react";
import { FiMenu, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
const SideBar = () => {
  const menus = [
    { name: "home", link: "/", icon: FiHome },
    { name: "about", link: "/about", icon: FcAbout },
    { name: "contact", link: "/contact", icon: MdContactPhone },
  ];

  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-black min-h-screen ${
          open ? "w-72" : "w-16"
        } text-gray-100 px-4 duration-500`}
      >
        <div className="py-6 flex justify-start">
          <FiMenu
            size={32}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          ></FiMenu>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-12 group-hover:display  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
