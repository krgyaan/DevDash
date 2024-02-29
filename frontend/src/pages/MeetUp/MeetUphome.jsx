import { Button, Image, Link } from "@nextui-org/react";
import AddIcon from '@mui/icons-material/Add';
import images from "./meetuplist";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"

import { useState } from "react";

const MeetUpHome = () => {
    const { user } = useUser()
    const [value, setValue] = useState(0)
    console.log(user)   

    return (
        <section className='w-full items-center justify-evenly flex flex-col-reverse lg:flex lg:flex-row h-full m-auto'>
            <div className="lg:w-3/6 w-full h-screen flex flex-col lg:flex--col lg:h-5/6 lg:justify-evenly ">
                <div className=" mx-14">
                    <h1 className="text-4xl my-3">"Connect Seamlessly, Anytime, Anywhere: Your Virtual Meeting Hub!"</h1>

                    <p>Securely Connecting Communities: Meet, Greet, and Safeguard!</p>

                </div>

                <div className="flex lg:flex-row lg:items-center flex-col-reverse m-14" >

                    <Button className="bg-teal-500 lg:w-48" id="create-form"  radius="none" as={Link} href={`/meet-ups/create-room/${user?.id}`}>
                        <AddIcon /> Create Meeting
                    </Button>
                    <div className="h-3/5 flex lg:flex-row flex-col w-full items-center justify-between">
                        <input size="sm" type="text" placeholder="Enter your link" radius='none' className="lg:w-11/12 w-full lg:h-10 h-20 mx-6 px-3 focus:outline-teal-200" />
                        <Button radius="none" className="text-teal-800 my-5 lg:w-36 w-full bg-teal-100">Join</Button>
                    </div>

                </div>

            </div>
            <div className="lg:w-2/5 w-full flex flex-col justify-center items-center h-screen">
                <div className="flex items-center justify-center w-full text-white ">
                    <ArrowCircleLeftIcon className="m-2 shadow-2xl hover:text-gray-200" onClick={() => { setValue(value === 0 ? images.length - 1 : value - 1) }} />
                    {
                        images.map((e, index) => {
                            return (

                                <img radius="none" src={e.src} className={value == e.index ? "w-3/6 rounded-full" : "hidden"} alt="img" />
                            )
                        })
                    }
                    <ArrowCircleRightIcon className="m-2 drop-shadow-2xl hover:text-gray-200" onClick={() => setValue(value === images.length - 1 ? 0 : value + 1)} />
                </div>
                {
                    images.map((e, index) => {
                        return (

                            <div className={value == e.index ? "w-3/6 text-center text-lg" : "hidden"}>{e.dics}</div>
                        )
                    })
                }
                <div className="flex h-12 w-16 gap-1 justify-center my-2">
                    <div className={value == 0 ? "h-2 w-2 rounded-full bg-gray-200" : "h-2 w-2 rounded-full bg-gray-600"}></div>
                    <div className={value == 1 ? "h-2 w-2 rounded-full bg-gray-200" : "h-2 w-2 rounded-full bg-gray-600"}></div>
                    <div className={value == 2 ? "h-2 w-2 rounded-full bg-gray-200" : "h-2 w-2 rounded-full bg-gray-600"}></div>
                </div>
            </div>
        </section>
    )
}

export default MeetUpHome;
