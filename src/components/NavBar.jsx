import React from 'react';
import { IoLogoBitbucket } from 'react-icons/io';

const NavBar = () => {
    return (
        <div className='flex'>
            {/* Logo and Company Name */}
            <div className='logo flex w-56 justify-center items-center'>
                <IoLogoBitbucket className='mr-2' />
                <h1 className='text-xl font-bold'>Company</h1>
            </div>

            {/* Dash and Pic Sections */}
            <div className='flex w-[80%] justify-between'>
                {/* Dash Section */}
                <div className="dash flex justify-center items-center">
                    <h1 className='text-xl font-bold'>Dashboard</h1>
                </div>
                {/* Pic Section */}
                <div className="pic mr-4 flex justify-center items-center">
                    <h1 className='text-xl font-mono font-bold'>John</h1>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
