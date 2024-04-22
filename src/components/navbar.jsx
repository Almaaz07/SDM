import React, { useState } from 'react';
import Svvg from "../assets/bulb.svg"
import Ham from "../assets/ham.svg"


const navbar = ({showDash}) => {
  return (
    
    <>
      <navbar className='flex-col '>
        <div>
          <div className='flex justify-between bg-blue-800 h-[70px] w-[100wh]'>
            <div className=' flex justify-center items-center bg-green-800 ml-5 w-[60px] h-[60px]'>
              <h1 className='text-2xl font-bold text-white'>SDM</h1>
            </div>

            <div className='flex gap-[200px]'>
              <div className='gap-1 flex items-center'>
                <span className='text-white'> project:</span>
                <select className='w-[150px] h-7' name="" id="">
                  <option value="project">select</option>
                  <option value="project">demo</option>
                  <option value="project">project</option>
                </select>
              </div>

              <div className='gap-2 mr-3 flex'>
                <img className=" w-4" src={Svvg} alt="" />
                <img className="w-4" src={Svvg} alt="" />
                <img className="w-4" src={Svvg} alt="" />
              </div>
            </div>
          </div>
          <div className='bg-blue-800 flex gap-[240px] pt-2'>
            <button onClick={showDash}>
            <img className='h-6 w-6 ml-5' src={Ham} alt="" />
            </button>
            <div className='text-l font-semibold flex gap-2 text-white'>

              <span> Home </span>
              <span>&#62;</span>
              <span>
                Test Data Management v1.0
              </span>
            </div>
          </div>
          <div className='bg-blue-800 h-[50px] '>
            <h1 className='ml-[282px] text-3xl text-white'>Dashboard</h1>

          </div>
        </div>
      </navbar>
    </>
  )
}

export default navbar
