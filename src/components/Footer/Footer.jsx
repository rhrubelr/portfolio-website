import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="footer footer-center p-10 bg-slate-800 text-neutral-content rounded">
                <div className="grid grid-flow-col gap-4 text-xl font-semibold">
                    <Link to='about' className="link link-hover">About</Link>
                    <Link to='contact' className="link link-hover">Contact</Link>
                    <Link to='projects' className="link link-hover">Projects</Link>
                    <Link to='/' className="link link-hover">Skills</Link>
                </div>
                <div>

                    <span className="footer-title text-xl">Social Media</span>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <span><a href="https://web.facebook.com/profile.php?id=100073844381151"><FaFacebook /></a></span>
                        <span> <a href="https://github.com/rhrubelr"> <FaGithub /></a></span>
                        <span><a href="https://www.linkedin.com/in/rubel-mia-707893268/"><FaLinkedin /></a></span>
                    </div>
                </div>
                <div>
                    <p className='text-xl'>Copyright © 2023 - All right reserved by Rubel Mia</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;