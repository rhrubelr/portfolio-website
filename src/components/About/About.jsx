import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
    return (
        <div className='mb-10 text-white pt-5 container mx-auto'>
            <h1 className='font-bold text-4xl text-orange-600 text-center mt-24 mb-7'>About Me</h1>

            <div data-aos="flip-down" className='md:flex container mx-auto gap-14'>

                <div className='md:w-3/12 w-10/12  px-4 mx-auto'>
                    <img data-aos="flip-up" className='w-full ' src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif" alt="" />

                </div>

                <p  className='md:w-7/12 w-full  px-4 text-xl text-center mx-auto'>
                    I am a passionate Front-end Developer/Mern Stack Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior Mern/Front-end Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadcn UI, Prisma, Next.js, and TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.
                </p>
            </div>
           


            <div data-aos="zoom-out-right" className=' mx-auto  md:w-1/2 w-10/12  my-16'>
                <h1 className='text-3xl my-5 font-bold text-orange-600 text-center'>My Skills</h1>
                HTML
                <div className='flex items-center gap-5 mb-8'>
                    <span>80%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-4" value="80" max="100"></progress>
                </div>
                CSS
                <div className='flex items-center gap-5 mb-8'>
                    <span>75%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="75" max="100"></progress>
                </div>
                BOOTSTRAP
                <div className='flex items-center gap-5 mb-8'>
                    <span>90%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="90" max="100"></progress>
                </div>
                 TAILWIND
                 <div className='flex items-center gap-5 mb-8'>
                    <span>80%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="80" max="100"></progress>
                </div>
                REACT JS
                <div className='flex items-center gap-5 mb-8'>
                    <span>60%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="60" max="100"></progress>
                </div>
                Mongo DB
                <div className='flex items-center gap-5 mb-8'>
                    <span>70%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="70" max="100"></progress>
                </div>
                Firebase
                <div className='flex items-center gap-5 mb-8'>
                    <span>80%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="80" max="100"></progress>
                </div>
                Node js
                <div className='flex items-center gap-5 mb-8'>
                    <span>60%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="60" max="100"></progress>
                </div>
                Express js
                <div className='flex items-center gap-5 mb-8'>
                    <span>80%</span>
                    <progress className="progress bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 w-full" value="80" max="100"></progress>
                </div>
            </div>



        </div>
    );
};

export default About;