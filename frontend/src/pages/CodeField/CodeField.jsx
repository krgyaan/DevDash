import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Button } from '@nextui-org/react'
import React from 'react'

const CodeField = () => {
    return (
        <section section className='w-10/12 m-auto'>
            <h1>CodeField</h1>
            <SignedIn>
                <p>Only signed in users can see this</p>
            </SignedIn>

            <SignedOut>
                <p>Only signed out users can see this</p>
                <Button color="primary" size='md' variant='ghost'>
                    <SignInButton redirectUrl='/code-field' mode='modal' />
                </Button>
            </SignedOut>
        </section>
    )
}

export default CodeField
