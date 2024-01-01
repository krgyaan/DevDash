import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Button } from '@nextui-org/react'
import React from 'react'

const MeetUp = () => {
    return (
        <section className='w-10/12 m-auto'>
            <h1>Meet Ups</h1>
            <SignedIn>
                <p>Only signed in users can see this</p>
            </SignedIn>

            <SignedOut>
                <p>Only signed out users can see this</p>
                <Button color="primary" size='md' variant='ghost'>
                    <SignInButton redirectUrl='/meet-ups' mode='modal' />
                </Button>
            </SignedOut>
        </section>
    )
}

export default MeetUp
