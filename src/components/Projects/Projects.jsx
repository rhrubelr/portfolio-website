import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Projects = () => {
    return (
        <div  className='container mx-auto mt-16 mb-28 pt-5'>
            <h2 className='text-3xl font-bold text-center text-orange-600 my-16'>My Recent Projects</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container h-full gap-10 mx-auto'>
                <div data-aos="flip-right" className='shadow-2xl p-10 bg-fuchsia-950	text-white h-full'>

                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/XZSH0pF/assignment-10-8d3cd-web-app.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg"
                            />
                        </div>
                    </div>

                    <h1 className=' font-bold mt-2 text-2xl text-orange-600'>Chef Hunter</h1>
                    <h1 className='font-semibold my-2'>Technology:</h1>
                    <p>Html, Tailwind css, Javascript, React,<br></br> Mongodb, Firebase, Node js, Express js</p>
                    <div className='my-3 mx-auto  text-white flex '>
                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  me-1 border-red-600'><a href="https://assignment-10-8d3cd.web.app/"> Live Site</a></button>

                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 me-1  border-red-600'><a href="https://github.com/rhrubelr/chef-hunter-client">Github</a></button>

                        <button className='btn btn-outline  text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 me-2 border-red-600 ' onClick={() => window.my_modal_5.showModal()}>
                            Veiw Details

                            {/* Open the modal using ID.showModal() method */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                                <form method="dialog" className="modal-box text-white bg-fuchsia-950">
                                    <h3 className="font-bold text-2xl text-orange-600">Chef Hunter</h3>
                                    <p className='my-4 leading-6'> There have six popular chefs and also recipe.<br></br>
                                        I have added login system and you must have to sign up .<br></br>
                                        I have added privet route system and you can not sign up do not showrecipes
                                    </p>



                                    <li className='text-xl'>Interactive engagement
                                    </li><br></br>
                                    <li className='text-xl'>Visual delight
                                    </li><br></br>
                                    <li className='text-xl'>User-friendly interface
                                    </li><br></br>
                                    <li className='text-xl'>Personalized experience
                                    </li><br></br>
                                    <li className='text-xl'>Fresh and seasonal
                                    </li><br></br>
                                    <li className='text-xl'>Social integration
                                    </li><br></br>
                                    <li className='text-xl'>Engaging FAQ section</li>



                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>


                        </button>
                    </div>
                </div>


                <div data-aos="flip-right" className='shadow-2xl p-10 bg-fuchsia-950	text-white'>
                    {/* <img src={summerCamp} className="max-w-sm h-60 block mx-auto w-80" /> */}


                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/qWFNwFr/photography-school-b3679-web-app-1.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg"
                            />
                        </div>
                    </div>


                    <h1 className=' font-bold mt-2 text-2xl text-orange-600'>Photography School</h1>
                    <h1 className='font-semibold my-2'>Technology:</h1>
                    <p>Html, Tailwind css, Javascript, React,<br></br> Mongodb, Firebase, Node js, Express js</p> 
                    <div className='my-3 mx-auto text-white flex'>
                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  me-1 border-red-600'>Live Site</button>

                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  me-1 border-red-600'>Github</button>

                        <button className='btn btn-outline  text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 me-2 border-red-600' onClick={() => window.my_modal_6.showModal()}>
                            Veiw Details

                            {/* Open the modal using ID.showModal() method */}
                            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
                                <form method="dialog" className="modal-box text-white bg-fuchsia-950">
                                    <h3 className="font-bold text-2xl text-orange-600">Photography School</h3>
                                    <p className='my-4 leading-6'> I have created dashboard system in this projects the dashboard shows different member according to
                                        users<br></br>
                                        I have added payment method system without it has admin email and password .Admin will can addedinstructor and make admin any others.<br></br>
                                        you can see payment history and admin approve users classes.
                                    </p>



                                    <li className='text-xl'>Interactive engagement
                                    </li><br></br>
                                    <li className='text-xl'>Visual delight
                                    </li><br></br>
                                    <li className='text-xl'>User-friendly interface
                                    </li><br></br>
                                    <li className='text-xl'>Personalized experience
                                    </li><br></br>
                                    <li className='text-xl'>Fresh and seasonal
                                    </li><br></br>
                                    <li className='text-xl'>Social integration
                                    </li><br></br>
                                    <li className='text-xl'>Engaging FAQ section</li>



                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>


                        </button>
                    </div>
                </div>

                <div data-aos="flip-right" className='shadow-2xl p-10 bg-fuchsia-950	text-white'>
                    { /* <img src={toyman} className="max-w-sm h-60  block mx-auto w-80" /> */}


                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/WPQhTWJ/assignment-11-57fda-web-app.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg"
                            />
                        </div>
                    </div>


                    <h1 className=' font-bold mt-2 text-2xl text-orange-600'>Toy Man</h1>
                    <h1 className='font-semibold my-2'>Technology:</h1>
                    <p>Html, Tailwind css, Javascript, React,<br></br> Mongodb, Firebase, Node js, Express js</p>
                    <div className='my-3 mx-auto text-white flex'>
                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  me-1 border-red-600'>Live Site</button>

                        <button className='btn btn-outline text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  me-1 border-red-600'>Github</button>

                        <button className='btn btn-outline  text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 me-2 border-red-600' onClick={() => window.my_modal_7.showModal()}> Veiw Details


                            {/* Open the modal using ID.showModal() method */}
                            <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle ">
                                <form method="dialog" className="modal-box text-white bg-fuchsia-950">
                                    <h3 className="font-bold text-2xl text-orange-600">Toy Man</h3>
                                    <p className='my-4 leading-6'> There have car toys you have add any kind of car and update and delete.
                                        I have added privet route without you are not logged in car toys you can't add and update.<br></br>
                                        have added search Query you can search car by car name and adding sorting system.

                                    </p>



                                    <li className='text-xl'>Interactive engagement
                                    </li><br></br>
                                    <li className='text-xl'>Visual delight
                                    </li><br></br>
                                    <li className='text-xl'>User-friendly interface
                                    </li><br></br>
                                    <li className='text-xl'>Personalized experience
                                    </li><br></br>
                                    <li className='text-xl'>Fresh and seasonal
                                    </li><br></br>
                                    <li className='text-xl'>Social integration
                                    </li><br></br>
                                    <li className='text-xl'>Engaging FAQ section</li>



                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>


                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;