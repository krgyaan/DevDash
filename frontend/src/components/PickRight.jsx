import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Imgs from '../assets/images'
import { Card, CardHeader, Image, Link } from '@nextui-org/react'

// Alt texts for images
const altTexts = [
  'Hackathon',
  'Competitions',
  'Meet Ups',
  'Quizzes'
];

const bgColors = [
  '#50e87c',
  '#ffc700',
  '#ffe6d3',
  '#5daeff'
];

const PickRight = () => {
  const [width, setWidth] = useState(0);
  const refDiv = useRef();

  useEffect(() => {
    setWidth(refDiv.current.scrollWidth - refDiv.current.offsetWidth)
  }, [])


  return (
    <div className="p-10 w-10/12 m-auto">
      <div className="">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Pick The <span className='text-blue-500'>Right Opportunity!</span>
        </h1>
        <p className='text-lg my-5'>
          Explore opportunities that best suits your skills and interests!
        </p>
      </div>
      <motion.div ref={refDiv} className='my-10 overflow-hidden cursor-grab'>
        <motion.div
          drag='x'
          dragConstraints={{ right: -width, left: -width }}
          className="flex items-center justify-center md:gap-10 gap-5 lg:flex-nowrap flex-wrap"
        >
          {
            Imgs.map((img, ind) => {
              return (
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  key={ind}
                >
                  <Link href={`/${altTexts[ind]}`}>
                    <Card
                      isFooterBlurred
                      radius="lg"
                      className="border-none pt-16"
                      style={{ backgroundColor: bgColors[ind] }}
                    >
                      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <h2 className="text-black font-bold text-2xl">
                          {altTexts[ind]}
                        </h2>
                      </CardHeader>
                      <Image
                        alt={altTexts[ind]}
                        height={400}
                        src={img}
                        width={400}
                      />
                    </Card>
                  </Link>
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PickRight
