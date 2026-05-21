import CirculeExp from "../../../components/SVG/CirculeExp.tsx";
import SpinerSvg from "../../../components/SVG/SpinerSVG.tsx";
import {useState} from "react";


const Expertise = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    return (
        <div className="w-full px-4">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                 className="sm:hidden w-full h-[720px] bg-expertise bg-cover px-4 py-8 gap-4 fc rounded-[30px]">
                <div className="w-full fr gap-2 justify-end">
                    <CirculeExp/>
                    <SpinerSvg/>
                </div>
                <div className="h-[340px] w-full fr gap-4 items-end">
                    <div data-aos="flip-up" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                         className="light-button">Innovation
                    </div>
                    <div data-aos="flip-up" data-aos-duration="500" data-aos-delay="400" data-aos-offset="100"
                         className="light-button">Experience
                    </div>
                </div>
                <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400" data-aos-offset="100"
                    className="text-white text-[30px] font-medium leading-[2.2rem]">
                    High-Level Expertise in Marketing
                </h2>
                <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400" data-aos-offset="100"
                     className="p-4 bg-white bg-opacity-30 rounded-[20px] border border-white backdrop-blur-[10px] gap-2 fc">
                    <div className="light-button w-fit">Efficiency</div>
                    <p className="text-white text-xl font-[300] font-['Outfit']">Highly skilled marketing experts
                        provide effective solutions</p>
                    <p className="text-white text-sm font-normal font-['Arial'] leading-snug">Experienced Marketing
                        Professionals</p>
                </div>
            </div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hidden sm:flex bg-expertiseDT w-full h-[480px] bg-cover p-8 rounded-[50px] justify-between flex-col">
                <div className="w-full fr gap-2 justify-end">
                    <CirculeExp/>
                    <SpinerSvg/>
                </div>
                <div className="fr justify-end relative">
                    <div
                        className={isHovered ? "animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal flex absolute left-0 flex-col-reverse gap-4"
                            : "hidden"}>
                        <h2 className="text-white text-5xl font-medium leading-[3.2rem]">
                            High-Level Expertise in <br/>Marketing
                        </h2>
                        <div className="gap-2 fc">
                            <div className="fr gap-4">
                                <div className="light-button w-fit">Innovation
                                </div>
                                <div className="light-button w-fit">Efficiency
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={isHovered ? "duration-700 p-4 w-[400px] bg-white mr-0 bg-opacity-30 rounded-[20px] border  border-white backdrop-blur-[10px] gap-2 fc"
                            : "p-4 w-[400px] bg-white bg-opacity-30 rounded-[20px] border  duration-700 border-white backdrop-blur-[10px]  mr-[700px] gap-2 fc"}>
                        <div className="light-button w-fit">Efficiency</div>
                        <p className="text-white text-xl font-medium font-['Outfit']">Highly skilled marketing experts
                            provide effective solutions</p>
                        <p className="text-white text-base font-normal font-['Arial'] leading-snug">Experienced
                            Marketing
                            Professionals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;