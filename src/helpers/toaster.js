import toast from 'react-hot-toast'

export default function toaster(msg, type) {
  if (type === 'success') {
    return toast.success(msg, {
      style: {
        border: '0px solid #26E880',
        padding: '16px',
        color: '#ffffff',
        background: '#231953',
      },
      iconTheme: {
        primary: '#26E880',
        secondary: '#231953',
      },
    })
  }

  if (type === 'error') {
    return toast.error(msg, {
      style: {
        border: '0px solid #E82626',
        padding: '16px',
        color: '#E82626',
        background: '#e5e5e5',
      },
      iconTheme: {
        primary: '#E82626',
        secondary: 'white',
      },
    })
  }
}
