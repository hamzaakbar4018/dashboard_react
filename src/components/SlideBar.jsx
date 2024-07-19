import React from 'react';
import { TfiDashboard } from "react-icons/tfi";
import { CiViewList } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { FaPenToSquare } from "react-icons/fa6";
import { LuBoxes } from "react-icons/lu";
import { BiMessageRoundedError } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const SlideBar = () => {
  return (
    <div className='w-full md:w-56 rounded-xl'>
      <ul className='flex flex-col border-r mt-12 border-gray-300 h-full md:h-screen rounded'>
        <li className='flex mt-3 items-center ml-5 justify-start'>
          <TfiDashboard className='mr-2'/>
          <span className='font-bold'>Dashboard</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <CiViewList className='mr-2'/>
          <span className='font-bold'>Order</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <GoHistory className='mr-2'/>
          <span className='font-bold'>History</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <FaPenToSquare className='mr-2'/>
          <span className='font-bold'>Generate Idea's</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <LuBoxes className='mr-2'/>
          <span className='font-bold'>Subscription</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <BiMessageRoundedError className='mr-2'/>
          <span className='font-bold'>FAQ</span>
        </li>
        <li className='flex mt-8 items-center ml-5 justify-start'>
          <MdManageAccounts className='mr-2'/>
          <span className='font-bold'>Manage</span>
        </li>
      </ul>
    </div>
  );
}

export default SlideBar;
