import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import Members from '../pages/Members';
import SideBar from '../pages/SideBar';

const NavBar = () => {
    return (

        <div>
            <div className="navbar bg-base-100 h-[75px] p-0 sticky top-0 z-50">

                <div className="w-full ">

                    <div className="navbar-start bg-[#2e2d2d] h-[75px] w-[60%]">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                                <li><a href="/about">Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl text-white text-[50px] absolute top-4 left-4" to="/">SAIT</Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 font-semibold text-xl flex items-center">
                        <li className="hover:bg-[#2e2d2d] hover:text-white active:bg-[#2e2d2d]">


                            <Link to="/about" className="active:bg-[#2e2d2d]" >About</Link>

                        </li>
                        <li className="hover:bg-[#2e2d2d] hover:text-white e" >
                            <Link to="/gallery" className="active:bg-[#545353]">Gallery</Link>
                        </li>
                        <Members></Members>
                        <li className="hover:bg-[#2e2d2d]  active:bg-[#2e2d2d] hover:rounded-none hover:text-white"><Link to="/clubservices" className="active:bg-[#545353]">Club Services</Link></li>
                        <li className="hover:bg-[#2e2d2d] hover:text-white"><Link to="/contact" className="active:bg-[#545353]">Contact</Link></li>
                    </ul>
                </div >
                <div className="navbar-end gap-3 mr-12 mt-3">
                    <SocialIcon url="https://facebook.com/jaketrent" bgColor="#000000" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://instagram.com/jaketrent" bgColor="#000000" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/jaketrent" bgColor="#000000" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://linkedin.com/jaketrent" bgColor="#000000" style={{ height: 35, width: 35 }} />
                </div>
            </div >
        </div>
    )
}

export default NavBar