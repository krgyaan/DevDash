import { Link } from '@nextui-org/react'

const Footer = () => {
    const link = 'https://gyaan.notion.site/Organizing-Hackathons-with-DevDash-1fa792502d20464cb612a93967fe7bab?pvs=4';
    return (
        <div className='flex flex-col items-center text-white site-footer'>
            <div className='flex items-center justify-between lg:flex-row flex-col border-b-1 gap-10 p-5 w-10/12 m-auto'>
                <div className="flex flex-col gap-5 lg:w-1/2 ">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed'>
                        We admire both <span className='underline underline-offset-8'>software</span><br />
                        and its <span className='underline underline-offset-8'>creators</span>.
                    </h1>
                    <div className="flex gap-2">
                        <Link href='' className=''>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href='' className=''>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
                        </Link>
                        <Link href='' className=''>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/discord.png" alt="discord" />
                        </Link>
                        <Link href='' className=''>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/twitterx--v1.png" alt="twitterx--v1" />
                        </Link>
                        <Link href='' className=''>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github" />
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2  flex flex-row lg:justify-center justify-start gap-5 lg:flex-nowrap flex-wrap">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-slate-300'>Community</h1>
                        <Link className='text-white text-xl' href={link} target='_blank'>Organize a hackathon</Link>
                        <Link className='text-white text-xl' href="/hackathons">Explore hackathons</Link>
                        <Link className='text-white text-xl' href="/code-of-conduct">Code of Conduct</Link>
                        <Link className='text-white text-xl' href="/brand">Brand Assets</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-slate-300'>Company</h1>
                        <Link className='text-white text-xl' href="/about">About</Link>
                        <Link className='text-white text-xl' href="/blog">Blogs</Link>
                        <Link className='text-white text-xl' href="/jobs">Jobs</Link>
                        <Link className='text-white text-xl' href="/privacy">Privacy</Link>
                        <Link className='text-white text-xl' href="/terms">Terms</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-slate-300'>Support</h1>
                        <Link className='text-white text-xl' href="/contact">Help</Link>
                        <Link className='text-white text-xl' href="/policy">Refund Policy</Link>
                        <Link className='text-white text-xl' href="">Status</Link>
                        <Link className='text-white text-xl' href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
            <p className='text-medium mb-2'>
                © 2023 DevDash. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
