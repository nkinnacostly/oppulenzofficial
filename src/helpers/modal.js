import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IMAGE_BASE_URL } from '../../constant'

const Modal = ({ isOpen, onClose, data }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const modalBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const modalContentVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  }

  if (!isOpen) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={modalBackgroundVariants}
        >
          <motion.div
            className='p-4 bg-white rounded shadow-md w-[60%] h-full overflow-scroll'
            ref={modalRef}
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={modalContentVariants}
          >
            <div className='flex items-center justify-center w-full flex-col'>
              <motion.div
                className=''
                style={{
                  backgroundImage: `url(${IMAGE_BASE_URL}/${data.image})`,
                  width: '100%',
                  height: '200px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              ></motion.div>
              <motion.div
                className='h-[calc(100%-200px)] p-2 bg-[#021a36] text-white'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.p className='text-sm font-[Manrope]'>
                  {data.description}
                </motion.p>
                <motion.div
                  className='mt-2 font-[Manrope] font-bold'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ₦ {data.ammount}
                </motion.div>
              </motion.div>
            </div>
            <div className='flex items-center justify-center mt-4'>
              <button
                className='w-[280px] lg:w-[326px] h-[46px] bg-[#021a36] rounded-[8px] text-white mb-2'
                //     onClick={handleSubmit}
                //     disabled={isLoading}
              >
                {/* {isLoading ? (
                <div className='flex items-center justify-center'>
                  <SmallLoader size={20} thickness={2} color='#fff' />
                </div>
              ) : (
                'Submit'
              )} */}
                Invest
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
