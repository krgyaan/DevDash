import React, { useState } from 'react'
import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"

import PublicProfile from './publicProfile'
import Address from './address'
export default function Profile() {
    const { user } = useUser()
    let {value,setValue} = useState()

    return (

        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="lg:sticky lg:flex lg:flex-col lg:gap-2 p-4 text-sm border-r lg:border-indigo-100 top-12 hidden">
                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

                    <button className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                        Public Profile
                    </button>
                    <button
                        className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full">
                        Address
                    </button>
                    <button
                        className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                        Education
                    </button>
                </div>
            </aside>
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                    src={user?.imageUrl}
                                    alt="Bordered avatar" />

                                <div className="flex flex-col space-y-5 sm:ml-8">
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                        Change picture
                                    </button>
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                        Delete picture
                                    </button>
                                </div>
                            </div>
                           <PublicProfile/>
                           
                            

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
