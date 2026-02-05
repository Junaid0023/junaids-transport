import truckhead from "../assets/truck head.jpg";
import { Check, MessageCircle, Lock} from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative h-screen w-full border-b-[30px] border-b-amber-500">
            {/* Background Image */}
            <img
                src={truckhead}
                alt="Transport truck"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            {/* hero-content */}
            <div className="relative z-10 flex h-full items-center px-[15%] ">
                <div className="text-white max-w-xl  ">
                    <h1 className="text-5xl  md:text-6xl font-bold leading-tight">
                        Reliable <span className="text-amber-500">Transport & Logistics</span> Services
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Safe, fast and affordable transportation across the country
                    </p>

                {/* cta */}
                    <div className="flex flex-col md:flex-row mt-12 gap-4">
                        <button className="bg-amber-500 px-6 py-3 rounded-full text-white font-semibold">
                            Book A Truck Now
                        </button>

                        <button className="border border-white px-6 py-3 rounded-full text-white">
                            Contact Us

                        </button>
                    </div>

                    <div className="mt-8 flex gap-5 sm:text-center">
                        <span className="flex flex-col text-center text-sm md:flex md:flex-row items-center gap-2">
                            <Check className="w-6 h-6 text-amber-500 bg-white/10 rounded-full"/>
                            On-time delivery
                        </span>
                        <span className="flex flex-col text-center text-sm md:flex md:flex-row items-center gap-2">
                            <MessageCircle className="w-6 h-6 text-amber-500 bg-white/10 rounded-full"/>
                            24/7 support
                        </span>
                        <span className="flex flex-col text-center text-sm md:flex md:flex-row items-center gap-2">
                            <Lock className="w-6 h-6 text-amber-500 bg-white/10 rounded-full"/>
                            secure and reliable
                        </span>
                    </div>
                </div>

            </div>
        </section>

        
    );
};

export default Hero;
