import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import resume from '../../assets/rubel-resume.pdf'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {

    const [text] = useTypewriter({
        words: ['Front-end Web Developer', 'Mern Stack Web Developer',],
        loop: 0
    })

    return (

        <div className='mt-16  text-white '>
            <div className="hero min-h-screen ">
                <div className="hero-content gap-14 w-full flex-col lg:flex-row-reverse container mx-auto">
                    <div data-aos="zoom-out-right">
                        <img data-aos="fade-left" src="https://i.ibb.co/RQf3NGj/Whats-App-Image-2023-06-27-at-11-12-25.jpg" className="max-w-sm rounded-full w-60 shadow-2xl" />
                    </div>

                    <div data-aos="zoom-out-left">
                        <h1 className="text-4xl font-bold">Hi, I am Rubel Mia </h1>
                        <h1 className="text-3xl font-bold text-orange-600 my-2">{text}</h1>
                        <p className="py-6">Welcome to My Portfolio Website. <br></br>I am a Front-End / Full-Stack Developer based in Habiganj, Sylhet, Bangladesh</p>
                        <button className="btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-red-700"><a href={resume} download={resume} target="_blank">Download Resume</a></button>

                        <button className="btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-red-700 ms-8"><Link to='contact'>Hire Me</Link></button>
                    </div>
                </div>
            </div>


           


        </div>
    );
};

export default Banner;