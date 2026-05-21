import {Swiper, SwiperSlide} from 'swiper/react';
import NextArrow from "../../../components/SVG/NextArrow.tsx";
import PrevArrow from "../../../components/SVG/PrevArrow.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/GrowBusinessDT.css';
import {Navigation} from 'swiper/modules';
import {useState} from "react";

export default function BusinessSliderDT() {

    const initialData = [
        {
            id: 31,
            title: "Boost Your Business",
            greyText: "with Our Marketing Services",
            text: "Our team will help you create a successful marketing strategy to increase sales and brand awareness",
            isHovered: false,
            delay: "200"
        }, {
            id: 32,
            title: "Get More Customers ",
            greyText: "with Our Digital Marketing Solutions",
            text: "We offer a wide range of digital marketing services to help you reach your target audience and generate leads",
            isHovered: false,
            delay: "400"
        }, {
            id: 33,
            title: "Increase Your Brand Awareness",
            greyText: "with Our Creative Marketing Campaigns",
            text: "Our creative team will develop unique and engaging marketing campaigns to make your brand stand out and attract more customers",
            isHovered: false,
            delay: "600"
        }, {
            id: 34,
            title: "Optimize Your Marketing Budget",
            greyText: "with Our Cost-Effective Solutions",
            text: "We understand the importance of budget optimization, so we offer cost-effective marketing solutions to help you achieve your business goals",
            isHovered: false,
            delay: "800"

        }, {
            id: 35,
            title: "Get Personalized Marketing Solutions",
            greyText: "Tailored to Your Business Needs",
            text: "Our team will work closely with you to understand your business goals and create a personalized marketing strategy to help you achieve them",
            isHovered: false,
            delay: "900"
        }, {
            id: 36,
            title: "Boost Your Business",
            greyText: "with Our Marketing Services",
            text: "Our team will help you create a successful marketing strategy to increase sales and brand awareness",
            isHovered: false,
            delay: "200"
        }, {
            id: 37,
            title: "Get More Customers ",
            greyText: "with Our Digital Marketing Solutions",
            text: "We offer a wide range of digital marketing services to help you reach your target audience and generate leads",
            isHovered: false,
            delay: "400"
        }, {
            id: 38,
            title: "Increase Your Brand Awareness",
            greyText: "with Our Creative Marketing Campaigns",
            text: "Our creative team will develop unique and engaging marketing campaigns to make your brand stand out and attract more customers",
            isHovered: false,
            delay: "600"
        }, {
            id: 39,
            title: "Optimize Your Marketing Budget",
            greyText: "with Our Cost-Effective Solutions",
            text: "We understand the importance of budget optimization, so we offer cost-effective marketing solutions to help you achieve your business goals",
            isHovered: false,
            delay: "800"

        }, {
            id: 40,
            title: "Get Personalized Marketing Solutions",
            greyText: "Tailored to Your Business Needs",
            text: "Our team will work closely with you to understand your business goals and create a personalized marketing strategy to help you achieve them",
            isHovered: false,
            delay: "900"
        },

    ]
    const [content, setContent] = useState(initialData);
    const handleMouseEnter = (id: number): void => {
        const updatedData = content.map(c => {
            if (id === c.id) {
                return {...c, isHovered: true};
            }
            return c;
        });
        setContent(updatedData);
        setTimeout((id) => {
            const updatedDataFalse = content.map(c => {
                if (id === c.id) {
                    return {...c, isHovered: false};
                }
                return c;
            });
            setContent(updatedDataFalse)
        }, 3000);
    };

    const handleMouseLeave = (id: number): void => {
        const updatedContent = content.map(c => {
            if (id === c.id) {
                return {...c, isHovered: false};
            }
            return c;
        });
        setContent(updatedContent);
    };
    return (
        <div className="sm:flex flex-col gap-8 p-[-10px] hidden">
            <div className="fr px-4 justify-between gap-4">
                <div className="px-4 fc gap-8">
                    <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100"
                    >Grow Your Business with Us</h2>
                </div>
                <div className="fr gap-8">
                    <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="900" data-aos-offset="100"
                         className="custom-prev cursor-pointer"><PrevArrow/></div>
                    <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" data-aos-offset="100"
                         className="custom-next cursor-pointer"><NextArrow/></div>
                </div>
            </div>
            <Swiper
                data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100"
                slidesPerView={5}
                spaceBetween={300}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation]}
                className="BusinessSwiperDT"
            >{content.map(c => (
                <SwiperSlide className={c.isHovered ? "z-20" : "z-10"}
                             onMouseEnter={() => handleMouseEnter(c.id)}
                             onMouseLeave={() => handleMouseLeave(c.id)}
                             key={c.id}>
                    <div
                        className={c.isHovered ? "business-slide-bg absolute animate-card-bg-slide-up animate-fill-forwards"
                            : "business-slide-bg animate-card-bg-slide-up-reverse"}>
                        <div
                            className={c.isHovered ? "business-slide animate-card-slide-up animate-fill-forwards"
                                : "business-slide animate-card-slide-up-reverse"}>
                            <div className="fc gap-2">
                                <h5 className="text-xl">{c.title}</h5>
                                <p className="text-sm text-secondary">{c.greyText}</p>
                            </div>
                            <p className="text-base text-primary font-normal">{c.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}
