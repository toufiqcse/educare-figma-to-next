import Image from "next/image"

const Hero = () => {
    return (
        <div className="container mx-auto mt-[40px] md:mt-[72px]">
            <div className="flex flex-wrap md:flex-nowrap  justify-between items-center px-4 md:px-0">
                <div className="flex flex-col gap-[10px] items-start  justify-start ">
                    <h2 className="text-[40px] md:text-[48px] font-[Poppins] font-semibold">Start Learning with us now</h2>
                    <p className="md:text-xl font-[Poppins] font-medium text-[#00000075]   md:text-left">Unlock Your Potential: Embrace the transformative power of learning. Our platform is your gateway to limitless knowledge, empowering you to grow personally and professionally. Explore, discover, and thrive with our diverse range of courses, designed to fuel your curiosity and drive. Join us on a journey of continuous learning, where knowledge knows no bounds.</p>
                    <button className="rounded-xl outline-none border-none bg-[#682C0E] text-white py-2 px-8 transition-all duration-300 hover:bg-[#df4c0c]">Start Learning</button>
                </div>
                <Image alt="hero image" src="/hero.png" width={987} height={987} />
            </div>
        </div>
    )
}

export default Hero