import React from "react";
import { Button, Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

export default function HackathonComp() {
    const hackathons = [
        {
            id: 1,
            title: "CodeFest 2023",
            description: "A coding marathon for innovative solutions.",
            date: "2023-04-15",
            location: "Virtual",
            imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/355/944/datas/original.png",
            link: "https://codefest2023.com",
        },
        {
            id: 2,
            title: "HackHub Expo",
            description: "Explore and showcase your tech skills.",
            date: "2023-05-20",
            location: "In-Person",
            imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/355/944/datas/original.png",
            link: "https://hackhubexpo.com",
        },
        {
            id: 3,
            title: "TechBlast Hackathon",
            description: "Ignite the tech world with your creations.",
            date: "2023-06-10",
            location: "Virtual",
            imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/355/944/datas/original.png",
            link: "https://techblasthackathon.com",
        },
        {
            id: 4,
            title: "Innovate-a-Thon",
            description: "Innovation starts here, join us!",
            date: "2023-07-05",
            location: "In-Person",
            imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/355/944/datas/original.png",
            link: "https://innovateathon.org",
        },
    ];

    return (
        <div className="w-10/12 m-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                <span>Happening </span>
                <span className='text-blue-500'>Now</span>
            </h1>
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                {hackathons.map((item, index) => (
                    <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        isFooterBlurred
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[200px]"
                                src={item.imageUrl}
                            />
                            <div className="flex my-2 justify-between px-2">
                                <b className="text-lg">{item.title}</b>
                                <p className="text-md text-default-500">{item.location}</p>
                            </div>
                            <div className="text-md flex mt-1 px-2">
                                <p className="text-default-500">{item.description}</p>
                            </div>
                        </CardBody>
                        <CardFooter className="justify-between">
                            <p className="text-md text-black/80">{item.date}</p>
                            <Button className="text-md text-white font-semibold" variant="shadow" color="success" radius="lg" size="md" as={Link}>
                                Apply
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="w-full text-center mt-10 mb-5">
                <Button color="primary" size="lg" variant="ghost" as={Link} href="/hackathon">
                    See All Hackathons
                </Button>
            </div>
        </div>
    );
}
