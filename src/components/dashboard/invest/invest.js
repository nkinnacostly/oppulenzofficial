import React, { useEffect, useState } from 'react'
import Plant from '../../../../assets/png/plant.jpeg'
import { makeApiCall } from '../../../../lib/api'
import { IMAGE_BASE_URL } from '../../../../constant'
import Modal from '@/helpers/modal'

function Invest() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleOpenModal = (item) => {
    setModalData(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const getProducts = async () => {
    // e.preventDefault()
    setIsLoading(true)
    const response = await makeApiCall('/getProduct')
    setProducts(response)
    setIsLoading(false)
    console.log(response)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='w-full h-full'>
      <h1 className='mt-8 mb-8 text-xl font-semibold uppercase'>Products</h1>
      <div className='w-full overflow-scroll '>
        {isLoading ? (
          <div className='flex items-center justify-center h-full'>
            <span class='loader'></span>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-4 '>
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              data={modalData}
            />
            {products?.map((prod, index) => (
              <div
                key={index}
                className='w-[300px] h-[360px] cursor-pointer'
                onClick={() => handleOpenModal(prod)}
              >
                <div
                  className=''
                  style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}/${prod.image})`,

                    width: '100%',
                    height: '200px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div className='h-[calc(100%-200px)]  p-2 bg-[#021a36] text-white'>
                  <h2 className='font-bold font-[Manrope] capitalize'>
                    {prod.name}
                  </h2>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-[Manrope]'>Daily Income</p>
                    <p className='text-sm font-[Manrope]'>
                      ₦ {prod.daily_income}
                    </p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-[Manrope]'>Interest</p>
                    <p className='text-sm font-[Manrope]'>{prod.interest}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-[Manrope]'>Sector</p>
                    <p className='text-sm font-[Manrope] capitalize'>
                      {prod.product_name}
                    </p>
                  </div>
                  {/* <div className='flex items-center justify-between'>
                      <p className='text-sm font-[Manrope]'>Daily Income</p>
                      <p className='text-sm font-[Manrope]'>₦ 3000</p>
                    </div> */}
                  <div className='mt-2 font-[Manrope] font-bold'>
                    ₦ {prod.ammount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Invest
