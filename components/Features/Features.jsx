import Image from "next/image"

const Features = () => {
    return (
        <div className="container mx-auto my-[40px] md:my-[72px]">
            {/* features 1 */}
            <div className="">
                <div className="flex flex-wrap md:flex-nowrap  justify-between  items-center px-4 md:px-0">
                    <Image alt="hero image" src="/image 3.png" width={480} height={379} />
                    <div className="flex flex-col  items-start  justify-center ">
                        <h2 className="text-[25px] md:text-[48px] font-[Poppins] font-semibold mr-10 mt-2 md:mt-0 ">Welcome to the  <br /> online centers</h2>
                        <div className="mt-1 md:mt-5 ">
                            <li className="mb-1 text-xl md:text-2xl font-thin font-[Poppins]">Start learning from your experience</li>
                            <li className="mb-1 text-xl md:text-2xl font-thin font-[Poppins]">Enhance your skills with us now</li>
                            <li className="mb-1 text-xl md:text-2xl font-thin font-[Poppins]">Do your favorite course</li>
                        </div>
                    </div>
                </div>
            </div>

            {/* features 2 */}

            <div className="flex flex-wrap md:flex-nowrap  justify-between   px-4 md:px-0">
                <div className="flex flex-col items-start  justify-center ">
                    <h2 className="text-[25px] md:text-[48px] font-[Poppins] font-semibold mr-10 mt-2 md:mt-0 ">Start Learning by <br /> creating free account <br /> and get register</h2>

                </div>
                <Image alt="hero image" src="/image 1.png" width={439} height={292} />
            </div>



            {/* features 3 */}
            <div className="mt-[70px] md:mt-[109px] bg-[#F9E0AE] px-4 md:px-[45px] py-[38px]">
                <form action="" className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[45px]">
                    <input type="text" name="name" id="name" placeholder="Your Name" className="text-center py-4 px-[94px] w-full " autoComplete="false" />
                    <input type="email" name="email" id="email" placeholder="Your Email" className="text-center py-4 px-[94px] w-full" />
                    <button type="submit" className="py-4 px-[94px] text-xl font-medium bg-[#C24914]  transition-all duration-300 hover:bg-[#df4c0c] text-white w-full">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Features