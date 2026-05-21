import {Link} from "react-scroll";
import BenefitsSlider from "../Sliders/BenefitsSlider.tsx";
import BenefitsCards from "./BenefitsCards.tsx";

const WhyUs = () => {
    return (
        <div className="fc gap-8 sm:gap-16 justify-start items-start w-full">
            <div className="fc px-4 gap-8 justify-start items-start sm:flex-row">
                <h4 data-aos="fade-right" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100"
                    className="sm:pr-4 sm:text-5xl">
                    <span
                    >Benefits of Our Marketing Company:</span> Performance, Individual Approach, and Expertise</h4>
                <Link data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100"
                    to={"contactForm"} className="green-button w-full text-center sm:whitespace-nowrap sm:self-end">Write to us</Link>
            </div>
            <BenefitsSlider/>
            <BenefitsCards/>
        </div>
    );
};

export default WhyUs;