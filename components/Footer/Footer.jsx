import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-[#F9E0AE] mt-[98px]">
            <div className="container mx-auto flex flex-col md:flex-row  md:justify-between px-4 py-[107px] gap-6">
                <Link href={"/"} className="flex items-center pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <path d="M6.327 15.2L19 22.8L38 11.4L19 0L0 11.4H19V15.2H6.327ZM0 15.2V30.4L3.8 26.182V17.48L0 15.2ZM19 38L9.5 32.3L5.7 30.02V18.62L19 26.6L32.3 18.62V30.02L19 38Z" fill="black" />
                    </svg>
                    <h1 className="text-[24px] lg:text-[40px] font-medium text-black font-[Jim Nightshade] ml-2">Educare</h1>
                </Link>
                {/* follow us */}
                <div className="flex flex-col justify-start">
                    <h2 className="font-[Poppins] text-xl font-semibold mb-3">Follow us</h2>
                    <div className="flex md:justify-between items-center gap-[23px]">
                        <Link href={''} className="hover:bg-[#df4c0c] transition-all duration-300 rounded-full"><Image src={'/et_twitter.svg'} width={33} height={33} alt="logo social" /></Link>
                        <Link href={''} className="hover:bg-[#df4c0c] transition-all duration-300 rounded-full"><Image src={'/et_linkedin.svg'} width={33} height={33} alt="logo social" /></Link>
                        <Link href={''} className="hover:bg-[#df4c0c] transition-all duration-300 rounded-full"><Image src={'/bxl_instagram.svg'} width={33} height={33} alt="logo social" /></Link>
                        <Link href={''} className="hover:bg-[#df4c0c] transition-all duration-300 rounded-full"><Image src={'/circum_facebook.svg'} width={33} height={33} alt="logo social" /></Link>


                    </div>
                </div>
                {/* useful link */}
                <div className="flex flex-col justify-start ">
                    <h2 className="font-[Poppins] text-xl font-semibold mb-3">Useful Link</h2>
                    <div className="flex justify-start flex-col items-start gap-4">
                        <li className="text-[#6C6C6C] hover:text-[#c24914] transition-colors duration-300"> <Link href={""} className=" font-[Poppins] text-[16px] font-medium pb-2">Our Projects</Link>
                        </li>
                        <li className="text-[#6C6C6C] hover:text-[#c24914] transition-colors duration-300"> <Link href={""} className=" font-[Poppins] text-[16px] font-medium pb-2">FAQ</Link>
                        </li>
                        <li className="text-[#6C6C6C] hover:text-[#c24914] transition-colors duration-300"> <Link href={""} className=" font-[Poppins] text-[16px] font-medium pb-2">News and Update</Link>
                        </li>
                    </div>
                </div>
                {/* contacts */}
                <div className="flex flex-col justify-start ">
                    <h2 className="font-[Poppins] text-xl font-semibold mb-3">Contacts</h2>
                    <div className="flex justify-start flex-col items-start gap-4">
                        <p className=" font-[Poppins]  text-[#6C6C6C] text-[16px] font-medium pb-2">Address: 4-5 Main Road Dhaka</p>
                        <p className=" font-[Poppins] text-[#6C6C6C] text-[16px] font-medium pb-2">Email: toufiqse7@gmail.com</p>
                        <p className=" font-[Poppins] text-[#6C6C6C] text-[16px] font-medium pb-2">Phone Number: +8801965-087999</p>


                    </div>
                </div>
            </div>

            <div className="font-[Poppins] flex items-center justify-center gap-2 text-[#6C6C6C] text-[16px] font-medium  pb-[56px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.08 8.53282C8.13 8.215 8.24 7.93571 8.38 7.70458C8.68 7.16526 9.19 6.88597 9.88 6.87633C10.33 6.87633 10.74 7.06895 11.03 7.34824C11.31 7.64679 11.5 8.06091 11.5 8.47503H13.3C13.28 8.02239 13.19 7.60827 13 7.22304C12.85 6.85707 12.62 6.52963 12.32 6.25997C10.87 4.96945 8.18 5.15244 6.95 6.6163C5.66 8.22464 5.63 11.0368 6.94 12.6451C8.15 14.0801 10.8 14.2824 12.24 13.0015C12.55 12.7607 12.8 12.4622 13 12.1154C13.16 11.7687 13.27 11.4028 13.28 11.0079H11.5C11.5 11.2102 11.43 11.3931 11.34 11.5569C11.25 11.7398 11.13 11.8843 11 12.0095C10.67 12.2599 10.28 12.3947 9.86 12.3947C9.5 12.3851 9.2 12.3177 8.97 12.1732C8.71076 12.0328 8.50425 11.8171 8.38 11.5569C7.88 10.6901 7.96 9.48626 8.08 8.53282ZM10 0C4.5 0 0 4.33382 0 9.63072C0.53 22.4107 19.5 22.4011 20 9.63072C20 4.33382 15.5 0 10 0ZM10 17.3353C5.59 17.3353 2 13.8779 2 9.63072C2.44 -0.587474 17.56 -0.587474 18 9.63072C18 13.8779 14.41 17.3353 10 17.3353Z" fill="#7D7A74" />
                </svg>
                All Copyrights reserved | 2023</div>

        </div>
    )
}

export default Footer