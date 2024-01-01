import { Button, Image } from '@nextui-org/react'
import HostEvent from '../assets/images/hostEvents.webp'
import React from 'react'

const HostEvents = () => {
    return (
        <div className='bg-gradient-to-br from-[#e7f3ff99] to-[#fff8dfab] border-1 rounded-xl w-10/12 m-auto mb-10'>
            <div className='flex items-center justify-evenly gap-10 flex-col sm:flex-col md:flex-row md:py-16 py-8 md:px-10 px-5'> 
                <div className="md:w-1/2 w-100 flex flex-col gap-5 pl-0 md:pl-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2 font-semibold">
                        <span>Host Your Own</span>
                        <span className='text-blue-500'>Opportunity</span>
                    </h1>
                    <p className='text-lg my-5'>Engage with a diverse talent pool or hire the best minds from 6+ users.</p>
                    <div className='flex items-center justify-start gap-5'>
                        <Button radius='full' color="primary" variant="ghost" className='text-lg'>
                            Host Now
                        </Button>
                        <Button radius='full' color="primary" variant="light" className='text-lg'>
                            Know More
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2 w-100 flex justify-center items-center">
                    <Image
                        isBlurred
                        width={440}
                        src={HostEvent}
                        alt="Host Your Own Opportunity"
                        classNames="m-5"
                    />
                </div>
            </div>
        </div>
    )
}

export default HostEvents
