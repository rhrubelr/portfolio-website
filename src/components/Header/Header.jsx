import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className=''>
            <div className="navbar bg-slate-700 text-white  shadow-lg fixed top-0 z-10">
                <div className='container mx-auto'>
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow  rounded-box w-52 font-semibold text-xl ">
                                <Link to='/'><li><a>Home</a></li></Link>
                                <Link to='/about'><li><a>About</a></li></Link>
                                <Link to='/projects'><li><a>Projects</a></li></Link>
                                <Link to='/contact'><li><a>Contact</a></li></Link>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Rubel Mia</a>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="flex gap-10  px-1 font-semibold text-xl">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/about'><li><a>About</a></li></Link>
                            <Link to='/projects'><li><a>Projects</a></li></Link>
                            <Link to='/contact'><li><a>Contact</a></li></Link>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;