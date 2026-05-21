import WhyUsSlider from "../Sliders/WhyUsSlider.tsx";
import WhyUsCards from "../Sliders/WhyUsCards.tsx";

const WhyUs = () => {
    return (
        <div className="fc gap-8 justify-start items-start w-full">
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
                <h2 data-aos="fade-down-left" data-aos-duration="500" data-aos-delay="500" data-aos-offset="100"
                >Why us</h2>
                <span data-aos="fade-up-left" data-aos-duration="500" data-aos-delay="500"
                    className="sm:self-end">Our main advantages</span>
            </div>
            <WhyUsSlider/>
            <WhyUsCards/>
        </div>
    );
};

export default WhyUs;

