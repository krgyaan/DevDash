import React from "react";
import { Button, Card, CardBody, CardFooter, Image, Input, Link } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import hackathons from "./Hackathons.js";

export default function Upcoming() {
    return (
        <>
            <div className="bg-blue-500 h-40">
                <div className="w-10/12 m-auto py-3">
                    <Button className="mb-4 text-white font-semibold" variant="bordered" radius="sm" size="md" as={Link} href="/hackathons" >
                        Back to All Hackathons
                    </Button>
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                        <span>Upcoming Hackathons</span>
                    </h1>
                </div>
            </div>
            <div className="w-10/12 m-auto">
                <div className="py-10">
                    <Input
                        classNames={{
                            base: "max-w-full h-10",
                            mainWrapper: "h-full",
                            input: "text-lg",
                            inputWrapper: "h-full font-normal text-primary-500 bg-primary-400/20 dark:bg-primary-500/20 text-xl",
                        }}
                        placeholder="Type to search..."
                        size="lg"
                        startContent={<SearchIcon size={30} />}
                        type="search"
                    />
                </div>
                <div className="mb-10">
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
                </div>
            </div>
        </>
    );
}
