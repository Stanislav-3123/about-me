import {Swiper, SwiperSlide} from 'swiper/react';
import NextArrow from "../../../components/SVG/NextArrow.tsx";
import PrevArrow from "../../../components/SVG/PrevArrow.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/RelySliderDT.css';
import {Navigation} from 'swiper/modules';
import {useState} from "react";

export default function RelySliderDT() {

    const initialData  = [
        {
            id: 1,
            text: "Our team creates unique digital assets that help clients stand out from their competitors.",
            isHovered: false,
        },
        {
            id: 2,
            text: "Our team can help you create an effective marketing strategy that will attract new clients and increase sales.",
            isHovered: false,
        },
        {
            id: 3,
            text: "We help clients improve their search engine rankings through website analysis and optimization.",
            isHovered: false,
        },
        {
            id: 4,
            text: "Our team of experts conducts thorough market research to assist clients in making well-informed decisions",
            isHovered: false,
        },
        {
            id: 5,
            text: "We create beautiful, functional, and user-friendly websites to improve our clients' online presence and attract new customers",
            isHovered: false,
        }
    ]
    const [content, setContent] = useState(initialData );
    const handleMouseEnter = (id: number) : void => {
        const updatedData = content.map((c, i) => {
            if (i === id - 1) {
                return { ...c, isHovered: true };
            }
            return c;
        });

        setContent(updatedData);
    };

    const handleMouseLeave = (id: number): void => {
        const updatedContent = content.map((c, i) => {
            if (i === id - 1) {
                return { ...c, isHovered: false };
            }
            return c;
        });

        setContent(updatedContent);
    };
    return (
        <div className="fc gap-8 p-[-10px] ">
            <div className="fr px-8 justify-start gap-6">
                <div className="custom-prev"><PrevArrow/></div>
                <div className="custom-next"><NextArrow/></div>
            </div>
            <div className="border-b w-[1920px] border-primary self-center"/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation]}
                className="mySwiper"
            >{content.map(c => (
                <SwiperSlide key={c.id} onMouseEnter={() => handleMouseEnter(c.id)} onMouseLeave={() => handleMouseLeave(c.id)}>
                    <div
                        className={c.isHovered ? "absolute rounded-[100px] bg-opacity-30 transition-colors w-6 h-6 bg-green top-[-44px] left-[4px]"
                            : "absolute  w-6 h-6 top-[-40px] left-[8px]"}>
                        <svg className={c.isHovered ? "fill-current text-green absolute bottom-[4px] left-[4px] transition-colors hover:text-green"
                            : "fill-current absolute transition-colors text-primary"}
                             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <g clipPath="url(#a)">
                                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill={c.isHovered ? "#fff" :"#006064"} d="M0 0h24v24H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className={c.isHovered ? "text-base text-primary duration-500 font-normal" : "text-base duration-500 text-secondary font-normal"}>{c.text}</p>
                </SwiperSlide>
            ))}
            </Swiper>

        </div>
    );
}
