import React from 'react'
import Plant from '../../../../assets/png/plant.jpeg'

function Invest() {
  return (
    <div className='w-full h-full'>
      <h1 className='mt-8 mb-8 text-xl font-semibold uppercase'>Products</h1>
      <div className='w-full overflow-scroll '>
        <div className='grid grid-cols-3 gap-3 '>
          <div className='w-[300px] h-[360px] cursor-pointer'>
            <div
              className=''
              style={{
                backgroundImage: `url(${Plant.src})`,
                width: '100%',
                height: '200px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='h-[calc(100%-200px)] p-2 bg-[#021a36] text-white'>
              <h2 className='font-bold font-[Manrope]'>Gold</h2>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='mt-2 font-[Manrope] font-bold'>₦ 700</div>
            </div>
          </div>
          <div className='w-[300px] h-[360px] cursor-pointer'>
            <div
              className=''
              style={{
                backgroundImage: `url(${Plant.src})`,
                width: '100%',
                height: '200px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='h-[calc(100%-200px)]  p-2 bg-[#021a36] text-white'>
              <h2 className='font-bold font-[Manrope]'>Gold</h2>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='mt-2 font-[Manrope] font-bold'>₦ 700</div>
            </div>
          </div>
          <div className='w-[300px] h-[360px] cursor-pointer'>
            <div
              className=''
              style={{
                backgroundImage: `url(${Plant.src})`,
                width: '100%',
                height: '200px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='h-[calc(100%-200px)]  p-2 bg-[#021a36] text-white'>
              <h2 className='font-bold font-[Manrope]'>Gold</h2>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='mt-2 font-[Manrope] font-bold'>₦ 700</div>
            </div>
          </div>
          <div className='w-[300px] h-[360px] cursor-pointer'>
            <div
              className=''
              style={{
                backgroundImage: `url(${Plant.src})`,
                width: '100%',
                height: '200px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='h-[calc(100%-200px)]  p-2 bg-[#021a36] text-white'>
              <h2 className='font-bold font-[Manrope]'>Gold</h2>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-[Manrope]'>Daily Income</p>
                <p className='text-sm font-[Manrope]'>₦ 3000</p>
              </div>
              <div className='mt-2 font-[Manrope] font-bold'>₦ 700</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest
