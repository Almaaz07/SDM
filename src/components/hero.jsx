import React from 'react'

const Hero = () => {
  return (
    <div className='flex' >
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
   </div>
  )
}

export default Hero
