import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Input, Checkbox, ModalFooter, ButtonGroup } from "@nextui-org/react";

export default function Navigation() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Hackathons",
        "Blog",
        "About",
        "Organize a hackathon",
        "Log Out",
    ];

    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit text-2xl">DevDash</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit text-2xl">DevDash</p>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" className="text-lg" href="#">
                            Hackathons
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" color="foreground" className="text-lg">
                            CodeField
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="text-lg" href="#">
                            MeetUps
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link className="text-lg" onClick={onOpen} href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button className="text-lg" onClick={onOpen} as={Link} color="#005BC4" href="#" variant="ghost">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>


            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-4xl">Log in</ModalHeader>
                            <ModalBody>
                                <p>
                                    Don't have an account? <Link href="">Sign up</Link>
                                </p>
                                <Input
                                    autoFocus

                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input

                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <ButtonGroup color="danger" variant="flat" onClick={onClose}>
                                    Close
                                </ButtonGroup>
                                <Button color="primary" onClick={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}