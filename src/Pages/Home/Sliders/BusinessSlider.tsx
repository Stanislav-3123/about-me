import {Swiper, SwiperSlide} from 'swiper/react';
import NextArrow from "../../../components/SVG/NextArrow.tsx";
import PrevArrow from "../../../components/SVG/PrevArrow.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/business/BusinessSlider.css'
import {Navigation} from 'swiper/modules';
import {useState} from "react";

export default function BusinessSlider() {

    const initialData = [
        {
            id: 21,
            title: "Boost Your Business",
            greyText: "with Our Marketing Services",
            text: "Our team will help you create a successful marketing strategy to increase sales and brand awareness",
            isHovered: false,
            delay: "100"
        }, {
            id: 22,
            title: "Get More Customers ",
            greyText: "with Our Digital Marketing Solutions",
            text: "We offer a wide range of digital marketing services to help you reach your target audience and generate leads",
            isHovered: false,
            delay: "300"
        }, {
            id: 23,
            title: "Increase Your Brand Awareness",
            greyText: "with Our Creative Marketing Campaigns",
            text: "Our creative team will develop unique and engaging marketing campaigns to make your brand stand out and attract more customers",
            isHovered: false,
            delay: "500"
        }, {
            id: 24,
            title: "Optimize Your Marketing Budget",
            greyText: "with Our Cost-Effective Solutions",
            text: "We understand the importance of budget optimization, so we offer cost-effective marketing solutions to help you achieve your business goals",
            isHovered: false,
            delay: "700"
        }, {
            id: 25,
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
                return {...c, isHovered: !c.isHovered};
            }
            return c;
        });
        setContent(updatedData);
    };
    return (
        <div className="fc gap-8 p-[-10px] overflow-hidden sm:hidden">
            <div className="fr px-4 justify-end gap-4">
                <div className="custom-prev"><PrevArrow/></div>
                <div className="custom-next"><NextArrow/></div>
            </div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={2}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation]}
                className="BusinessSwiper"
            >{content.map(c => (
                <SwiperSlide className="px-4 w-[290px] relative"
                    key={c.id} onClick={() => handleMouseEnter(c.id)}>
                    <div
                        data-aos="fade-right" data-aos-duration="500" data-aos-delay={c.delay} data-aos-offset="100"
                        className="w-[260px] h-[360px] mb-[20px] rounded-[30px]">
                        <div className={c.isHovered? "bg-cards-bg bg-contain absolute w-[260px] h-[300px] rounded-[30px] animate-card-show animate-fill-forwards"
                                                    :"bg-cards-bg bg-contain absolute w-[260px] h-[300px] rounded-[30px] animate-card-show-reverse"}/>
                        <div className={c.isHovered? "fc z-[3] border absolute border-primary bg-white duration-500 p-8 justify-between w-full rounded-[30px] h-[330px]"
                            :"fc border border-primary  bg-white absolute duration-500 p-8 justify-between w-full rounded-[30px] h-[330px]"}>
                            <div className="fc gap-2">
                                <h5 className="text-[16px]">{c.title}</h5>
                                <p className="text-[14px] text-secondary">{c.greyText}</p>
                            </div>
                            <div className="fc  gap-4">
                                <p className="text-sm text-primary font-normal">{c.text}</p>
                                <div className={c.isHovered ? "rounded-[100px] w-12 h-12 p-2.5 bg-white rounded-45 duration-500 justify-center items-center gap-2.5 inline-flex"
                                    : "rounded-[100px] w-12 h-12 p-2.5 bg-green justify-center items-center gap-2.5 inline-flex"}>
                                    <svg className={c.isHovered ?"duration-500 rotate-45" : "duration-500"}
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill={c.isHovered ? "#006064" : "#fff"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}
