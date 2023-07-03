import React from 'react'
import ImageUploading from 'react-images-uploading'
import Upload from '../../assets/svg/upload.svg'
import Image from 'next/image'

function WalletAdress({ setShowWallet, data }) {
  const [images, setImages] = React.useState([])
  const maxNumber = 69
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className=' h-full w-full flex  items-center flex-col'>
      <div
        className='w-full flex justify-end items-end text-[28px] cursor-pointer h-[40px] '
        onClick={() => setShowWallet(false)}
      >
        x
      </div>
      <div className='h-[calc(100%-40px)] flex items-center justify-center flex-col'>
        <p className='mb-5 font-[Manrope]'>
          Please Copy the Wallet Address Bellow and Proceed to Payment
        </p>

        <p className='font-bold mb-3'>WALLET ADDRESS:</p>
        {data.product_name === 'Precious metal' ? (
          <h3 className='font-bold font-[Manrope] text-[20px]'>
            Go2Ra4fcozPM2JXzaNoaLPkmAw6WLwqG47QiDK7XdQiU
          </h3>
        ) : (
          <h3 className='font-bold font-[Manrope] text-[20px]'>
            0x3a3a44b8ff1f2e13bbdff2ddfa54d089737a19d3
          </h3>
        )}
        <div className='App mt-4 w-full'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey='data_url'
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className='upload__image-wrapper border-2 border-dotted rounded-lg w-full p-3  flex items-center justify-center'>
                {images.length > 0 ? (
                  <>
                    <div className='flex items-center justify-center '>
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className='image-item flex flex-col space-y-8'
                        >
                          <Image
                            src={image['data_url']}
                            alt=''
                            width={100}
                            height={100}
                          />
                          <button
                            onClick={() => onImageRemove(index)}
                            className='border-2 w-[120px] rounded-lg h-[40px]'
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                      className='flex items-center justify-center cursor-pointer flex-col'
                    >
                      <Image
                        src={Upload}
                        alt='upload'
                        width={100}
                        height={100}
                      />
                      <p className='mt-2'>Click to Upload Prove of Payment</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  )
}

export default WalletAdress
