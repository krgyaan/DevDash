import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Avatar } from "@nextui-org/react";

import { SignOutButton, SignInButton, SignedIn, SignedOut, UserProfile, UserButton } from "@clerk/clerk-react"


export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Hackathons",
        "Blog",
        "About",
        "Organize a hackathon",
    ];

    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="bg-transparent font-semibold"
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <Link className="font-bold text-inherit text-2xl" href="/">DevDash</Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <Link className="font-bold text-inherit text-2xl" href="/">DevDash</Link>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" className="text-lg" href="/hackathons">
                            Hackathons
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/code-field" color="foreground" className="text-lg">
                            CodeField
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="text-lg" href="/meet-ups">
                            MeetUps
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <SignedOut>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button className="text-lg font-semibold" as={Link} color="#005BC4" href="#" variant="ghost">
                                <SignInButton mode="modal" />
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </SignedOut>
                <SignedIn>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            {/* <SignOutButton afterSignOutUrl="/" /> */}
                            <UserButton afterSignOutUrl="/" />
                        </NavbarItem>
                    </NavbarContent>
                </SignedIn>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-2xl"
                                color="foreground"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <SignOutButton afterSignOutUrl="/" className="text-2xl " />
                </NavbarMenu>
            </Navbar>
        </>
    );
}