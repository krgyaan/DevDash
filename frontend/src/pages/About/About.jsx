import React from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { ResumeImg, HackathonImg, ProjectImg } from '../../assets/images/about'

const faqs = [
    {
        id: 1,
        question: "What is DevDash?",
        answer: "DevDash is a comprehensive platform for developers, offering features such as project tracking, collaboration tools, and a virtual event platform.",
    },
    {
        id: 2,
        question: "How can I participate in a hackathon?",
        answer: "To participate in a hackathon, you can visit our events page, browse the upcoming hackathons, and register for the ones that interest you. Follow the provided links for more details and registration.",
    },
    {
        id: 3,
        question: "Is there a fee for attending events on DevDash?",
        answer: "The majority of events on DevDash are free to attend. However, some may have registration fees or specific ticket prices. Check the event details for accurate information on pricing.",
    },
    {
        id: 4,
        question: "Can I organize my own hackathon on DevDash?",
        answer: "Absolutely! DevDash provides a platform for individuals and organizations to organize and host their hackathons. Visit the 'Organize a Hackathon' section for more information on how to get started.",
    },
    {
        id: 5,
        question: "How do I contact support?",
        answer: "For any support-related inquiries, you can reach out to our support team through the 'Contact Us' page on the website. We're here to help you with any questions or issues you may have.",
    },
    {
        id: 6,
        question: "Is DevDash open-source?",
        answer: "DevDash is currently a proprietary platform. While certain features may be accessible to the public, the core platform is not open-source. Stay tuned for updates on any changes to our licensing model.",
    },
];

export default function About() {

    return (
        <section className="w-10/12 m-auto my-10">
            <div className="w-10/12 m-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                    <span>About </span>
                    <span className='text-blue-500'>DevDash</span>
                </h1>
                <div className="container mx-auto my-2">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:mr-8">
                            <h2 className="text-2xl font-semibold mb-4">Your digital up-to-date resumé</h2>
                            <p className="text-gray-600 lg:w-2/3">
                                Showcase to the world your skills, links to your social profile, where you have worked and what you have worked on and the projects you have built.
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-0 hidden lg:block">
                            <Image
                                src={ResumeImg}
                                alt="Resume"
                                width={600}
                            />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto my-2">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:mr-8">
                            <h2 className="text-2xl font-semibold mb-4">Your portal to the best hackathons</h2>
                            <p className="text-gray-600 lg:w-2/3">
                                Applying to hackathons on DevDash is as simple as a click of a button. We save all the required info so that you don't have to fill them over and over again.
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-0 hidden lg:block">
                            <Image
                                src={HackathonImg}
                                width={600}
                                alt="Hackathon"
                            />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto my-2">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:mr-8">
                            <h2 className="text-2xl font-semibold mb-4">A showcase of all your projects</h2>
                            <p className="text-gray-600 lg:w-2/3">
                                Give your weekend projects, side projects, hobby projects, serious ventures a place to breathe, invite collaborators and inspire other builders.
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-0 hidden lg:block">
                            <Image
                                src={ProjectImg}
                                alt="Project"
                                width={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Accordion variant="splitted">

                {
                    faqs.map((faq) => {
                        return (
                            <AccordionItem key={faq.id} aria-label={faq.question} title={faq.question}>
                                {faq.answer}
                            </AccordionItem>
                        );
                    })
                }
            </Accordion>
        </section>
    );
}
