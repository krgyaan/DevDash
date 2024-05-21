import React from 'react'
import { Button, Card, CardBody,Checkbox, Divider, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, Snippet, Textarea, AvatarGroup, Avatar, CardFooter, CardHeader, Image, Code } from '@nextui-org/react'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
export default function RegsiterForm() {
    return (
        <div className='flex w-screen justify-center ' >
            <Card className='w-2/5'>
                <CardHeader className='font-bold'>Player Detail</CardHeader>
                <CardBody>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> 
                            </div>
                            <input type="email" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="user@gmail.com" />
                        </div>
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>+91</option>
                                    <option>+89</option>
                                    <option>+62</option>
                                </select>
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=""/>
                        </div>
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> 
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />
                        </div>
                    </div>
                   <div className='w-full h-36'>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                        <div className='flex h-3/5'>
                            <div className='flex h-full'>
                                <Button className='flex flex-col h-full'>
                                    <MaleIcon />
                                    <h3>Male</h3>
                                </Button>
                            </div>

                            <div>
                                <Button className='flex flex-col h-full mx-2'>
                                    <FemaleIcon />
                                    <h3>Female</h3>
                                </Button>
                            </div>
                        </div>
                   </div>

                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Institution Name</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Course</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Course Specialization</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />
                        </div>
                    </div>
                    <div className='text-sm flex bg-slate-300 my-3 justify-items-start p-2 rounded-md'>
                        <Checkbox >
                        </Checkbox>
                        <p> By registering for this opportunity, you agree to share the data mentioned in this form or any form henceforth on this opportunity with the organizer of this opportunity for further analysis, processing, and outreach. Your data will also be used by Unstop for providing you regular and constant updates on this opportunity. You also agree to the </p>
                    </div>
                </CardBody>
                <CardFooter>
                    <Button color='primary'>
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
