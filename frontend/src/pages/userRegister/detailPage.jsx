import React from 'react'
import { Button, Card, CardBody, Divider,Link,Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, Snippet, Textarea, AvatarGroup, Avatar, CardFooter, CardHeader, Image, Code } from '@nextui-org/react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '../../index.css'

export default function DetailPage() {

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active  h-3/5">
                        <img class="d-block w-100  h-1/5 box-border" src="https://d8it4huxumps7.cloudfront.net/uploads/images/663c619d69486_hackon-with-amazon-season-4.jpg?d=1920x1920" alt="First slide" />
                    </div>
                    <div class="carousel-item h-3/5">
                        <img class="d-block w-100  h-1/5box-border" src="https://d8it4huxumps7.cloudfront.net/uploads/images/663c61b71881c_hackon-with-amazon-season-4.jpg?d=1920x1920" alt="Second slide" />
                    </div>
                    <div class="carousel-item h-3/5">
                        <img class="d-block w-100  h-1/5box-border" src="https://d8it4huxumps7.cloudfront.net/uploads/images/663c61bd3a8a7_hackon-with-amazon-season-4.jpg?d=1920x1920" alt="Third slide" />
                    </div>
                </div>
            </div>

            <section className='flex'>
                <div className='w-4/5 p-2'>
                    <Card className="py-4 flex m-3">
                        <CardHeader className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/663db4f6eb015_image__9_.png?d=200x200"
                                width={270}
                            />
                            <CardBody className=" pb-0 pt-2 px-4 flex-col">
                                <p className="text-large uppercase font-bold">HackOn With Amazon - Season 4</p>
                                <small className="text-default-500">#Technology #Engineering #CodingChallenge #Hackathon</small>
                    
                            </CardBody>
                        </CardHeader>
                        <CardFooter className='flex'>
                            <Code radius='full' className='m-1'>#code</Code>
                            <Code radius='full' className='m-1'>#web development</Code>
                            <Code radius='full' className='m-1'>#Hack</Code>

                        </CardFooter>

                    </Card>

                    <Card className='m-3'>

                        <CardHeader className='w-2/5 flex text-center justify-between'>
                            <h1>Rounds & Timeline</h1>
                            <h1>Details</h1>
                            <h1>Dates & Deadlines</h1>
                            <h1>Prizes</h1>
                            <h1>Reviews</h1>
                        </CardHeader>
                    </Card>

                    <Card className='m-3'>
                        <CardHeader className='m-2 text-4xl border-l-4 border-indigo-500'>HACKATHON</CardHeader>
                        <Card className='w-4/5 my-3 mx-5'>
                            <CardHeader className='text-2xl font-bold'>Eligibility Check</CardHeader>
                            <CardBody>Registered participants will undergo a screening based on specified eligibility criteria. A team needs at least 2 eligible members to move to the coding round.</CardBody>
                            <CardFooter className='font-bold'>Participants who fail to meet the eligibility criteria will not be able to continue with the challenge.
                            </CardFooter>
                        </Card>
                        <Card className='w-4/5 my-3 mx-5'>
                            <CardHeader className='text-2xl font-bold'>Coding Round</CardHeader>
                            <CardBody>All the eligible teams will have to attempt this coding round. Participants will have 90 minutes to solve 2 questions.

                                <strong>Please Note:</strong> Each team member must attempt and clear the coding round individually to be eligible for evaluation and for the team to qualify.</CardBody>
                            <CardFooter className='font-bold'>
                                <div>
                                    <h2>
                                        Start Date
                                    </h2>
                                    <h3>30 May 24, 08:00 PM IST</h3>
                                </div>
                                <Divider orientation="vertical" className='mx-2' />
                                <div>
                                    <h2>
                                        End Date
                                    </h2>
                                    <h3>09 Jun 24, 11:59 PM IST</h3>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='w-4/5 my-3 mx-5'>
                            <CardHeader className='text-2xl font-bold'>Prototype Submission</CardHeader>
                            <CardBody>Shortlisted teams will be required to make prototypes of their idea submitted in the idea submission phase. The teams will get an opportunity to interact and virtually present their prototypes to Amazon tech leaders..</CardBody>
                            <CardFooter className='font-bold'>
                                <div>
                                    <h2>
                                        Start Date
                                    </h2>
                                    <h3>30 May 24, 08:00 PM IST</h3>
                                </div>
                                <Divider orientation="vertical" className='mx-2' />
                                <div>
                                    <h2>
                                        End Date
                                    </h2>
                                    <h3>09 Jun 24, 11:59 PM IST</h3>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className='w-4/5 my-3 mx-5'>
                            <CardHeader className='text-2xl font-bold'>Grand Finale</CardHeader>
                            <CardBody>On the day of the grand finale, shortlisted teams will present their ideas to jury members from various teams of Amazon like Amazon Web Services, Alexa, Amazon Pay, and many more. The grand finale will be held virtually.</CardBody>
                            <CardFooter className='font-bold'>
                                <h1>To be announced.</h1>
                            </CardFooter>
                        </Card>
                    </Card>

                    <Card className='py-4 m-3'>
                        <CardHeader className='border-l-4 border-indigo-700 rounded-none p-1 m-3 font-bold text-2xl'>All that you need to know about HackOn With Amazon - Season 4</CardHeader>
                        <div className='border-dashed border-l-4 border-indigo-700 mx-3 '>
                            <CardBody>
                                Although Amazon has evolved over the years, one constant is customers’ desire for lower prices, better selection, and convenient services. Today, Amazon shoppers can find what they’re looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers. At Amazon, we operate a lot like a set of startups with our Day 1 culture, embracing invention and creating stores, devices, and services that our customers will use, share, and love. Our passion for delighting customers drives us to constantly invent on their behalf. Working backward from customer needs, we’re constantly seeking to improve our services, add benefits and features, and invent new products.
                            </CardBody>
                            <CardBody>
                                The world's brightest technology minds come to Amazon to research and develop technology that improves the lives of shoppers and sellers around the world. At Amazon, we celebrate the spirit of innovation and invite you to submit your ideas through HackOn with Amazon! Dive deep, think big & define tomorrow with us!
                            </CardBody>

                            <CardHeader className='border-l-4 border-indigo-700 rounded-none p-1 m-3 font-bold text-2xl'>Eligibility Criteria & Team Formulation:</CardHeader>
                            <CardBody className='m-3'>

                                <li>
                                    Please refer to the list of eligible institutes on our microsite.
                                </li>

                                <li>
                                    Team members in a team can also be from different institutes/ year of graduation/ specialization/ courses.
                                </li>

                                <li>Graduation Year: 2025 and 2026</li>

                                <li>Degree: B. Tech/M. Tech/Integrated Dual Degree/MCA. Eligible branches include Computer Science (CS), Information Technology (IT), Circuital (electrical/electronics), and affiliated branches.</li>

                                <li>6.5 CGPA and above throughout in undergraduation.</li>

                                <li>Each team must be made up of two-four members.</li>

                                <li>A participant is required to collaborate with a minimum of one more participant to form a team.
                                    Participants can be members of one team only.</li>

                                <li>The Amazon jury will make the final decision about the winners and it will be binding.
                                    Each of the team members have to be individually eligible as per the criteria mentioned to move to the coding challenge stage.</li>

                                <li>In case you have a disability, please write to us with your accommodation request for us to make this hackathon journey seamless for you at support@devdash.com.</li><br />

                                Please Note: CGPA details are mandatory for all participating team members.


                            </CardBody>
                            <CardHeader className='border-l-4 border-indigo-700 rounded-none p-1 m-3 font-bold text-2xl'>Rewards: Attractive cash prizes to be won:</CardHeader>
                            <CardBody className='m-3'>

                                <li>
                                    Winner - INR 1,00,000 + an opportunity to experience ‘A day at Amazon'</li>

                                <li>
                                    1st runner-up - INR 75,000
                                </li>

                                <li>2nd runner-up - INR 50,000</li>

                                <li>Mentorship for the Top 8 teams.</li>

                                <li>The Wonder Woman - Top 50 Female Coders - Exciting Prizes
                                </li>




                            </CardBody>
                        </div>
                    </Card>

                </div>


                <div className='w-1/5' >
                    <Card className="m-3 sticky top-20">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-1 items-start justify-center">

                                    <h1 className="text-large tracking-tight ">Free</h1>
                                </div>
                            </div>
                            <Button
                                className="border-default-200 bg-emerald-800 text-white"
                                color="primary"
                                radius="full"
                                size="sm"
                                variant="solid"
                                as={Link}
                                href='/registerform'
                            >
                                Register
                            </Button>

                        </CardHeader>
                        <Divider className="my-1" />

                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <div className='flex m-2 '>
                                <GroupsOutlinedIcon size='large' color='red' />
                                <div className='mx-2'>
                                    <h1>Registered</h1>
                                    <h2>20510</h2>
                                </div>
                            </div>
                            <div className='flex m-2 '>
                                <AccessTimeOutlinedIcon />
                                <div className='mx-2'>
                                    <h1>Registration Deadline</h1>
                                    <h2>8 days left</h2>
                                </div>
                            </div>
                            <div className='flex m-2 '>
                                <GroupOutlinedIcon />
                                <div className='mx-2'>
                                    <h1>Team Size</h1>
                                    <h2>2-5</h2>
                                </div>
                            </div>
                            <div className='flex m-2 '>
                                <RemoveRedEyeOutlinedIcon />
                                <div className='mx-2'>
                                    <h1>Impressions</h1>
                                    <h2>204510</h2>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">4</p>
                                <p className=" text-default-400 text-small">Following</p>
                            </div>
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">97.1K</p>
                                <p className="text-default-400 text-small">Followers</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </section>


        </div>






    )
}
