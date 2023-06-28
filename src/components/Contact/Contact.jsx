import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='my-20 bg-base-200 p-5'>
            <h2 className='text-center font-bold text-3xl text-orange-600 mt-4'>Contact Me </h2>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold my-2">Contact Info:</h1>
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

                        <h2 className='font-bold my-5 text-2xl'>Social Network:</h2>


                        <div className='flex gap-10 text-2xl'>
                            <span><a href="https://web.facebook.com/profile.php?id=100073844381151"><FaFacebook /></a></span>
                            <span> <a href="https://github.com/rhrubelr"> <FaGithub /></a></span>
                            <span><a href="https://www.linkedin.com/in/rubel-mia-707893268/"><FaLinkedin /></a></span>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" value='password' placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control">

                                <input type="textarea" value='textarea' placeholder="write something" className="input input-bordered h-20 " />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;