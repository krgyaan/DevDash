import { Button, Card, CardBody, Divider, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, Snippet, Textarea, AvatarGroup, Avatar, CardFooter, CardHeader, CircularProgress } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import { Loader } from 'rsuite'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import {
    MeetingProvider,
    useMeeting,
    MeetingConsumer,
    useParticipant
} from "@videosdk.live/react-sdk";
import './meet.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SendIcon from '@mui/icons-material/Send';
import MicOffIcon from '@mui/icons-material/MicOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Webcam from 'react-webcam'

import ParticipantView from './ParticipantView';

//chating components


const MeetUpEntry = (props) => {
    const { toggleMic, toggleWebcam } = useMeeting();

    const VideoRef = useRef()
    return (
        <div className=' flex w-full h-screen justify-center items-center '>


            <section className='flex flex-col h-4/5 w-3/6 items-center rounded-2xl'>


                <div className='flex m-3 h-3/5 w-5/6 justify-cente items-center rounded-3xl overflow-hidden'>
                    <Webcam ref={VideoRef} />
                </div>
                <div className='flex justify-center items-center'>
                    <Button isIconOnly variant="faded" className='bg-gray-500 m-2 text-white' radius='full' size='lg' aria-label="Take a photo" onClick={() => toggleMic()}>
                        <MicOffIcon />
                    </Button>
                    <Button isIconOnly variant="faded" className='bg-gray-500 m-2 text-white' radius='full' size='lg' aria-label="Take a photo" onClick={() => toggleWebcam()}>
                        <VideocamIcon />
                    </Button>

                </div>
            </section>

            <section className='h-full flex justify-evenly flex-col items-center w-3/6 '>
                <div className='h-4/5 w-full'>
                    <div className='w-full flex justify-center text-2xl text-center m-4'>Lets MeetUp</div>
                    <div className='w-full flex justify-center text-xl text-center'>2 Millions are connected,World is waiting for you</div>
                    <AvatarGroup className='h-14 m-2' size='sm' isBordered>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                    <div className='w-full flex justify-center m-4' >
                        <Button radius="full" className='m-2 bg-teal-800' onClick={() => props.joinMeeting()}>
                            Join
                        </Button>
                        <Button radius="full" className='m-2'>
                            Full
                        </Button>
                    </div>
                    <div className='w-full items-center flex justify-evenly'>
                        <div className='text-md'>Share </div>
                        <Snippet className='w-3/6'>{props.meetingId}</Snippet>

                    </div>

                </div>


            </section>
        </div>
    )
}

const MeetUp = (props) => {
    const [value, setValue] = useState(true)
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    const [chatBox, setchatBox] = useState(true)
    const [joined, setJoined] = useState(null);
    //Get the method which will be used to join the meeting.
    //We will also get the participants list to display all participants
    const { join, participants } = useMeeting({
        //callback for when meeting is joined successfully
        onMeetingJoined: () => {
            setJoined("JOINED");
        }
    });

    const joinMeeting = () => {
        setJoined("JOINING");
        join();
    };
    const [videosParty, setVideoParty] = useState([]);

    useEffect(() => {
        setVideoParty([...participants.keys()]);
    }, [participants]);



    return (

        joined && joined == "JOINED" ?
            (<section className='flex' style={{ height: '92vh' }}>
                {chatBox ? (<section className=' flex items-center justify-center h-full w-1/5 mx-2'>
                    <div className='bg-teal-900 px-5 py-4 rounded-2xl w-full' style={{ height: '95%' }}>

                        <div className='p-3 mx-24 size-8 bg-slate-300 rounded-full flex items-center justify-center'>
                            <KeyboardDoubleArrowLeftIcon />
                        </div>
                        <Divider className='w-5/6 my-3 mx-6' />
                        <div className='h-5/6 overflow-y-scroll no-scroll'>

                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7  text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                            <Textarea
                                isReadOnly
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-xs my-7 text-white"
                            />
                        </div>

                        <div className='flex items-center'>
                            <Input
                                type="text"
                                placeholder="message"
                                labelPlacement="outside"
                            />
                            <div className='my-2 p-2'><SendIcon /></div>

                        </div>
                    </div>
                </section>
                ) : null}
                <section className='flex flex-col items-center rounded-2xl'>
                    {/* <div className='text-2xl text-white m-7'>
                        Meeting Id: {props.meetingId}
                    </div> */}
                    <div className='flex m-5 h-4/5 justify-center items-center rounded-3xl overflow-hidden'>
                        <ParticipantView
                            participantId={videosParty[0]}
                            key={videosParty[0]}

                        />
                    </div>
                    <div className='flex'>
                        <Button isIconOnly variant="faded" className='bg-gray-500 m-2  text-white' radius='full' aria-label="Take a photo">
                            <ZoomOutMapIcon />
                        </Button>
                        <Button isIconOnly variant="faded" className='bg-gray-500 m-2 text-white' radius='full' aria-label="Take a photo" onClick={() => toggleMic()}>
                            <MicOffIcon />
                        </Button>
                        <Button isIconOnly color="danger" className='m-2 text-white bg-red-600' size='lg' variant="faded" aria-label="Take a photo" onClick={() => props.onMeetingLeave()}>
                            <CallEndIcon />
                        </Button>
                        <Button isIconOnly variant="faded" className='bg-gray-500 m-2 text-white' radius='full' aria-label="Take a photo" onClick={() => toggleWebcam()}>
                            <VideocamIcon />
                        </Button>

                        <Dropdown>
                            <DropdownTrigger>
                            <Button isIconOnly variant="faded" className='bg-gray-500 m-2 text-white' radius='full' aria-label="Take a photo" >
                                <MoreVertIcon />
                            </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" className='flex bg-slate-500'>
                                <DropdownItem key="new">New file</DropdownItem>
                                <DropdownItem key="copy">Copy link</DropdownItem>
                                <DropdownItem key="edit">Edit file</DropdownItem>
                                <DropdownItem key="delete" className="text-danger" color="danger">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </section>
                <div className='flex justify-center items-center' style={{ width: '30%' }}>
                    <Card className='bg-transparent w-11/12 rounded-2xl' style={{ height: '95%' }}>
                        <div className='text-center text-xl p-2'>Number of Participants ({[...participants.keys()].length - 1})</div>
                        <div className='flex flex-wrap no-scroll overflow-y-scroll' style={{ height: '91%', width: '100%' }}>
                            {console.log([...participants.keys()].length)}
                            {[...participants.keys()].map((participantId, index) => {
                                if (index != 0) {
                                    return <div className='rounded-md h-2/6 overflow-hidden m-2' style={{ width: '45%' }}><ParticipantView
                                        participantId={participantId}
                                        key={participantId}
                                    /></div>
                                }
                            })}
                        </div>
                    </Card>
                </div>
            </section>
            ) :
            (joined && joined == "JOINING") ? (

                <div className='w-screen flex justify-center items-center'>
                    <CircularProgress className='h-screen text-teal-600' size='lg' label="Loading..." />
                </div>
            ) : (
                <MeetUpEntry joinMeeting={joinMeeting} meetingId={props.meetingId} />
            )
    );
}

export default MeetUp;
