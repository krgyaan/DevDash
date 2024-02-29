import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Button, Card, CardFooter, CardHeader, Image, Link } from '@nextui-org/react'
import React from 'react'
import codespace from './Codespace.js';



const CodeField = () => {
    return (
        <section section className='w-10/12 m-auto my-10'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                <span>Available </span>
                <span className='text-blue-500'>CodeFields</span>
            </h1>
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {
                        codespace.map((item, index) => {
                            return (
                                <Card isFooterBlurred className="h-[300px] p-3" key={index}>
                                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                        <h4 className="text-black font-bold text-2xl">{item.title}</h4>
                                        <p className="text-md text-black font-medium">{item.description}</p>
                                    </CardHeader>
                                    <Image
                                        removeWrapper
                                        alt=""
                                        className="z-0 h-full -translate-y-3 blur-[3px]"
                                        src={item.image}
                                    />
                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-black-100/50 z-10 justify-between">
                                        <div>
                                            <p className="text-black text-lg font-medium">{item.availavlity}</p>
                                        </div>
                                        <>
                                            <SignedOut>
                                                <Button color="primary" size='md' variant='ghost'>
                                                    <SignInButton redirectUrl='/code-field' mode='modal' />
                                                </Button>
                                            </SignedOut>
                                            <SignedIn>
                                                <Link href={item.link}>
                                                <Button
                                                    className="text-md font-semibold mr-2"
                                                    
                                                    color='primary'
                                                    target='_blank'
                                                    variant={item.availavlity === 'Free' ? 'ghost' : 'light'}
                                                    radius="full"
                                                    size="md">
                                                    {
                                                        item.availavlity === 'Free' ? 'Proceed' : 'Purchase'
                                                    }
                                                </Button>
                                                </Link>
                                              
                                            </SignedIn>
                                        </>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
            </div>
        </section>
    )
}

export default CodeField
