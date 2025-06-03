import React from "react";
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const NavBar = () => {
  return (
    <div className="container">
      {/* Logo Section  */}
      <nav className="flex justify-between items-center py-10 cursor-pointer ">
        <h1 className="text-2xl font-bold ">
          The <span className="text-secondary">Coding</span> Journey
        </h1>
        {/* menu section  */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="font-semibold cursor-pointer inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Menu  */}
        <div className="lg:hidden block">
          <IoMdMenu className="text-3xl text-dark" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
