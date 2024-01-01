import { Avatar, Card, CardBody } from '@nextui-org/react'
import React from 'react'

const Hero = () => {
    return (
        <div
            className='my-10 h-[calc(80vh-100px)] flex flex-col sm:flex-col md:flex-row items-center justify-around gap-5 p-4'
        >
            <div className='w-'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2 font-semibold'>
                    <span className='flex items-center text-blue-600'>
                        Connecting&nbsp;
                        <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    </span>
                    <span>Talent, Colleges,</span>
                    <span>Recruiters</span>
                </h1>
                <p className='text-lg my-5'>
                    Explore opportunities from across the globe to learn,<br /> showcase skills, gain CV points & get hired by your dream company.
                </p>
            </div>
            <div className='w- flex flex-col gap-5'>
                <div className='flex items-center gap-5'>
                    <Card
                        radius="lg"
                        className="border-none bg-[#FFB1CC] p-4 md:p-3 sm:p-1 hover:translate-y-2"
                    >

                        <CardBody>
                            <h1 className='text-2xl'>Learn 🚀</h1>
                            <p>Refine Skill Daily</p>
                        </CardBody>
                    </Card>
                    <Card
                        radius="lg"
                        className="border-none bg-[#9bc9ff] p-4 md:p-3 sm:p-1 hover:translate-y-2"
                    >

                        <CardBody>
                            <h1 className='text-2xl'>Compete 🧑‍💻</h1>
                            <p>Battle for Excellence</p>
                        </CardBody>
                    </Card>
                </div>
                <Card
                    radius="lg"
                    className="border-none bg-[#C8BBFF] p-4 md:p-3 sm:p-1 hover:translate-y-2"
                >

                    <CardBody>
                        <h1 className='text-2xl'>Live 🔴</h1>
                        <p>Study With Buddy</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Hero
