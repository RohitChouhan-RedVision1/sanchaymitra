import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const ThankYou = async () => {
    return (
        <section>
            {/* <div className="bg-[url(/images/innerbanner.png)] bg-center bg-cover bg-no-repeat w-full">
                <div className="md:px-0 px-5 md:py-20 main_section max-w-screen-xl mx-auto">
                    <h3 className="text-white text-[35px] md:text-[45px] font-bold tracking-wider">Thank You</h3>
                </div>
            </div> */}
            <div className='max-w-screen-xl mx-auto my-10 text-center flex flex-col items-center space-y-3'>
                <Image src={"/thankyou.gif"} width={300} height={100} alt="thankyou" />
                <h1 className='font-extrabold text-[var(--rv-primary)]'>Thank You!</h1>
                <h4>We sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.</h4>
                <Link href={"/"}>
                    <FaArrowLeft size={30} className="text-[var(--rv-primary)] cursor-pointer" />
                </Link>
            </div>
        </section>
    )
}

export default ThankYou