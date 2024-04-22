import React from 'react'

const sidebar = ({show}) => {
  return (
<sidebar>
  {
    show? <div className='sm:flex'>
          {/* sidebar */}
          <div className='flex-col  sm:flex gap-6 w-[180px] sm:w-[300px]'>
            <section className='flex pl-4 mt-4 flex-col w-[180px] sm:w-[300px] shadow-xl h-[300px]'>
              <h1 className='font-semibold text-2xl'>DASHBOARD</h1>
              {/* <h1 className=' '>DASHBOARD</h1> */}
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
        </div> :""
  }
  </sidebar>
  )
}

export default sidebar
