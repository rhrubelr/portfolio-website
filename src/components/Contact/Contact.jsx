import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5p96d5k', 'template_ytu060u', form.current, 'aj0zFg0258L5CXCVS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div data-aos="zoom-out-right" className='mt-16 mb-20 bg-teal-950 text-white p-5'>
            <h2 className='text-center font-bold text-3xl text-orange-600 '>Contact Me </h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold my-2 text-orange-400">Contact Info:</h1>
                        <div>
                            <div className='flex items-center gap-5 mb-2'>
                                <span><FaMailBulk /></span>
                                <p>rhrubel246@gmail.com</p>
                            </div>

                            <div className='flex items-center gap-5 mb-2'>
                                <span><FaPhone /></span>
                                <p>+8801741869498</p>
                            </div>

                            <div className='flex items-center gap-5 mb-2'>
                                <span><FaSearchLocation /></span>
                                <p>Habiganj, Sylhet, Bangladesh</p>
                            </div>
                        </div>

                        <h2 className='font-bold my-5 text-2xl text-orange-400'>Social Network:</h2>


                        <div className='flex gap-10 text-2xl'>
                            <span><a href="https://web.facebook.com/profile.php?id=100073844381151"><FaFacebook /></a></span>
                            <span> <a href="https://github.com/rhrubelr"> <FaGithub /></a></span>
                            <span><a href="https://www.linkedin.com/in/rubel-mia-707893268/"><FaLinkedin /></a></span>
                        </div>
                    </div>


                   

                    <div className='shadow-2xl shadow-gray-950 bg-fuchsia-950  py-10 px-20'> 
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-2 '>
                                <label className='text-white'>Name</label><br></br>
                                <input className='py-2 w-full rounded-lg text-black px-2' placeholder='name' type="text" name="user_name" />
                            </div>

                            <div>
                                <label className='text-white'>Email</label><br></br>
                                <input className='py-2 w-full rounded-lg text-black px-2' placeholder='email' type="email" name="user_email" />
                            </div>

                            <div >
                                <label className='text-white'> Message</label><br></br>
                                <textarea className='py-2 w-full rounded-lg text-black px-2' placeholder='write a message' name="message" />
                            </div>

                            <input className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-6 text-xl block mx-auto text-white' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;