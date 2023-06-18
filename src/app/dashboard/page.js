import React from 'react'
import DashboardLayout from '@/components/dashboard/dashboardLayout'
import Plant from '../../../assets/png/plant.jpeg'

function Index() {
  return (
    <div>
      <DashboardLayout>
        <div className='w-ful  h-full flex items-center  flex-col'>
          <div className='h-[350px] w-[80%] flex items-center justify-center  mt-2'>
            <iframe
              className='h-full w-full'
              src='https://www.youtube.com/embed/yOJ4WdUxSyo'
              title='Fivio Foreign - God Did Freestyle (Official Video)'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <h1 className='uppercase font-semibold text-xl mt-8 mb-8'>
            Products
          </h1>
          <div className='h-[calc(100%-350px)]  w-full overflow-scroll '>
            <div className='grid grid-cols-3 gap-4 '>
              <div className='w-[300px] h-[360px]'>
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
              <div className='w-[300px] h-[360px]'>
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
              <div className='w-[300px] h-[360px]'>
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
              <div className='w-[300px] h-[360px]'>
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
      </DashboardLayout>
    </div>
  )
}

export default Index
