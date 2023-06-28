import React from 'react';

const Projects = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center text-orange-600 my-16'>My Recent Projects</h2>

            <div className='grid md:grid-cols-3 grid-cols-1 container  gap-10 mx-auto'>
                <div className='shadow-2xl p-10'>
                    <img src="https://i.ibb.co/RQf3NGj/Whats-App-Image-2023-06-27-at-11-12-25.jpg" className="max-w-sm rounded block mx-auto w-80" />

                    <div className='my-3 mx-auto'>
                        <button className='btn btn-outline  me-2 border-red-600'>Live Site</button>
                        <button className='btn btn-outline border-red-600'> Github</button>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/RQf3NGj/Whats-App-Image-2023-06-27-at-11-12-25.jpg" className="max-w-sm rounded-full shadow-2xl" />

                    <div className='my-3'>
                        <button className='btn btn-outline me-2 border-red-600'>Live Site</button>
                        <button className='btn btn-outline border-red-600'> Github</button>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/RQf3NGj/Whats-App-Image-2023-06-27-at-11-12-25.jpg" className="max-w-sm rounded-full shadow-2xl" />

                    <div className='my-3'>
                        <button className='btn btn-outline me-2 border-red-600'>Live Site</button>
                        <button className='btn btn-outline border-red-600'> Github</button>
                    </div>
                </div>

                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Projects;