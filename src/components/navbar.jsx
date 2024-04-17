import React from 'react';
import Svvg from "../assets/bulb.svg"
import Ham from "../assets/ham.svg"

const navbar = () => {
  return (
    <>
     <navbar>
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
        <img className='h-6 w-6 ml-5' src={Ham} alt="" />
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

     </navbar>

<div className='flex'>
  
{/* <sidebar>
  
  <div className='flex'>
          sidebar
          <div className='flex gap-6'>
            <section className='flex pl-4 mt-4 flex-col w-[300px] shadow-xl h-[300px]'>
              <h1 className='font-semibold text-2xl'>DASHBOARD</h1>
              <h1 className=' '>DASHBOARD</h1>
              <select name="" id="" className='w-[100px] pl-6'>
                <option value="" className='pl-6  '><span className='font-bold'>project</span></option>
              </select>
              <section className='ml-10'>
                <ul> 
                  <li className='py-3 font-semibold'>Create</li>
                  <li  className='font-semibold'>List</li>
                </ul>
              </section>
            </section>
          </div>
        </div>
  </sidebar> */}
  
     {/* <div className='flex' >
       <section className='flex-col mt-10 justify-center ml-5'>
              <span className='flex gap-6'>
                <p className='font-bold text-l'>STATUS</p>
                <p className='font-bold text-l'>NAME</p>
                <p className='font-bold text-l'>TYPE</p>
                <p className='font-bold text-l'>LAST RUNNIG TIME</p>
                <p className='font-bold text-l px-[70px]'>DURATION</p>
                <p className='font-bold text-l text-slate-600 px-[70px]'>Daily Runs</p> <br />
              </span>
  
  
              <div className='flex bg-gray-200 w-[540px] p-2 mt-4 text-slate-500'>
                <div>No data available in table</div>
                
              </div>
              <div className='mt-3'>
               <span className='font-semibold text-slate-500'> Showing Your Last 5 Transaction.</span> <span className='text-blue-500 font-bold'>All History</span>
              </div>
         </section>
      </div> */}
  
</div>
      {/*  */}
    </>
  )
}

export default navbar
