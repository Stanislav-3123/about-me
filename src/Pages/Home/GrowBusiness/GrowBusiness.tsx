import BusinessSlider from "../Sliders/BusinessSlider.tsx";
import BusinessSliderDT from "../Sliders/GrowBusinessDT.tsx";

const GrowBusiness = () => {
    return (
        <div className="fc gap-8 sm:gap-0 overflow-y-hidden sm:overflow-visible w-full">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100"
                className="sm:hidden px-4 fc gap-8">
                <h2>Grow Your Business with Us</h2>
            </div>
            <BusinessSlider/>
            <BusinessSliderDT/>
        </div>
    );
};

export default GrowBusiness;