import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Divider ,Input} from "@nextui-org/react";
import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"


 const SearchIcon = ({
    size = 24,
    strokeWidth = 1.5,
    width,
    height,
    ...props
}) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
    </svg>
);

export default function Navigation() {
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Hackathons",
        "CodeField",
        "MeetUps",
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

                {/* <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                /> */}
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
                           
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        src={user?.imageUrl}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">
                                            Hi! {user?.firstName}
                                        </p>
                                        <p className="font-medium">
                                            {user?.emailAddresses[0].emailAddress}
                                        </p>
                                    </DropdownItem>
                                    <DropdownItem key="detail">
                                        <Link href="/profile" color="foreground">Profile</Link>
                                    </DropdownItem>
                                    <DropdownItem key="hackathons">
                                        <Link href="/hackathons" color="foreground">Hackathon</Link>
                                    </DropdownItem>
                                    <DropdownItem key="projects">
                                        <Link href="/projects" color="foreground">Project</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Divider />
                                    </DropdownItem>
                                    <DropdownItem key="organize">
                                        <Link href="https://gyaan.notion.site/Organizing-Hackathons-with-DevDash-1fa792502d20464cb612a93967fe7bab?pvs=4" color="foreground">Organize a Hackathon</Link>
                                    </DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        <SignOutButton afterSignOutUrl="/" />
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarItem>
                    </NavbarContent>
                   
                </SignedIn>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-2xl"
                                color="foreground"
                                href={
                                    index === 1
                                        ? "/code-field"
                                        : (index === 5
                                            ?
                                            'https://gyaan.notion.site/Organizing-Hackathons-with-DevDash-1fa792502d20464cb612a93967fe7bab?pvs=4'
                                            : `/${item.toLowerCase()}`)
                                }
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