import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col h-[100dvh] gap-y-10 justify-center'>
        <h1 className='font-medium text-8xl'>Contacts</h1>
        <div className='text-3xl flex flex-col gap-y-1'>
            <p>Feel free to explore my <a href='https://www.linkedin.com/in/denyspupin/' target='_blank' className='text-accent underline'>LinkedIn</a></p>
            <p>or connect via email at <a href='mailto:denyspupin.dev@gmail.com' className='text-accent underline'>denyspupin.dev@gmail.com</a></p>
        </div>
    </div>
  )
}

export default Contacts;