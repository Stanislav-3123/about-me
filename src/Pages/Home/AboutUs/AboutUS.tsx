import wave from '../../../../public/images/Image/about_1.png'
import star from '../../../../public/images/Image/about_2.png'
import infinity from '../../../../public/images/Image/about_3.png'
import dnc from '../../../../public/images/Image/about_4.png'
import shape from '../../../../public/images/Image/about_5.png'
import {useState} from "react";

const AboutUs = () => {
    const initialData = [
        {
            id: 1,
            title: "Our Mission",
            description: "Helping Businesses Grow and Succeed",
            text: "Our mission is to help businesses grow and succeed by providing them with effective marketing strategies and solutions.",
            img: wave,
            isHovered: false,
            delay: "200"
        }, {
            id: 2,
            title: "Our Values",
            description: "Integrity, Innovation, and Customer Satisfaction",
            text: "Our values are integrity, innovation and customer satisfaction. We strive for long-term relationships with our clients based on trust and mutual benefit.",
            img: star,
            isHovered: true,
            delay: "200"
        }, {
            id: 3,
            title: "Our Task",
            description: "Comprehensive and Customized Marketing Solutions",
            text: "Our approach is to provide comprehensive and customized marketing solutions that address each client's unique needs and goals.",
            img: infinity,
            isHovered: false,
            delay: "200"
        }, {
            id: 4,
            title: "Our Team",
            description: "Experts in Marketing Strategy and Execution",
            text: "Our team consists of experts in the field of marketing strategy and its implementation. We have the in-depth knowledge and experience to help our clients succeed.",
            img: dnc,
            isHovered: false,
            delay: "200"
        }, {
            id: 5,
            title: "Our Result",
            description: "Delivering Results and Exceeding Expectations",
            text: "We are committed to delivering results and exceeding our clients' expectations. We are committed to continuous improvement and development to stay one step ahead in the marketing industry.",
            img: shape,
            isHovered: false,
            delay: "200"
        }
    ]
    const [content, setContent] = useState(initialData)
    const handleMouseEnter = (id: number): void => {
        const updatedData = content.map((c, i) => {
            if (i === id - 1) {
                return {...c, isHovered: !c.isHovered};
            } else if (i !== id + 1) {
                return {...c, isHovered: false};
            }
            return c;
        });
        setContent(updatedData);
    };
    const handleMouseLeave = (id: number): void => {
        const updatedData = content.map((c, i) => {
            if (i === id - 1) {
                return {...c, isHovered: false};
            }
            return c;
        });
        setContent(updatedData);
    };
    return (
        <>
            <div
                className="flex sm:hidden flex-col relative w-full duration-500 gap-4 p-4">
                <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                    className="text-sm font-medium text-accent pb-8">More about us</p>
                {content.map(c => (
                    <div
                        key={c.id}
                         className={`${c.isHovered ? "h-[384px]" : "h-[72px]"} overflow-hidden transition-all duration-[1s] fc justify-start`}>
                        <div className="w-full py-4 fr transition-all duration-500 justify-between">
                            <h3 className="text-[32px] font-medium text-primary">{c.title}</h3>
                            <div
                                onTouchStart={() => handleMouseEnter(c.id)}
                                className={c.isHovered ? "rounded-[100px] flex w-10 h-10 bg-white rounded-45 duration-500" : "rounded-[100px] flex w-10 h-10 bg-green"}>
                                <svg
                                    className={c.isHovered ? "flex self-center justify-center duration-500 m-[7.5px] rotate-45" : "duration-500 m-[7.5px] "}
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path fill={c.isHovered ? "#006064" : "#fff"}
                                          d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={c.isHovered ? "fc h-fit gap-4 transition-all duration-500" : "transition-all duration-500 hidden h-0 gap-4"}>
                            <h3 className="text-green text-[16px]">{c.description}</h3>
                            <p>{c.text}</p>
                            <div className="rounded-[120px] bg-green bg-opacity-10 w-[120px] h-[120px]">
                                <img src={c.img}
                                     alt={c.title}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                onMouseLeave={() => setContent(initialData)}
                className="hidden sm:flex flex-col w-full px-8">
                <p className="text-sm font-medium text-accent pb-8">More about us</p>
                <div className="fr gap-8 h-[500px] justify-between">
                    <div className="self-end">{content.map(c => (
                        <div key={c.id} className="fc">{c.isHovered &&
                            <div className="rounded-[120px]  bg-green bg-opacity-10 w-[120px] h-[120px]"><img
                                src={c.img} alt={c.title} className="w-[120px] h-[120px]"/></div>}</div>
                    ))}</div>
                    <div className="fc gap-4 w-4/5">{content.map(c => (
                        <div key={c.id}
                             onMouseEnter={() => handleMouseEnter(c.id)}
                             onMouseLeave={() => handleMouseLeave(c.id)}
                             className={c.isHovered ? "fr h-fit duration-1000 gap-8" : "fr h-[128px] duration-1000 py-6"}>
                            <div
                                className={c.isHovered ? "self-center text-5xl font-medium duration-1000 text-primary whitespace-nowrap"
                                    : "duration-500 whitespace-nowrap text-secondary text-xl font-medium"}>{c.title}</div>
                            <div className={c.isHovered ? "fc gap-4 duration-1000 w-[632px]" : "hidden duration-500"}>
                                <div className="text-xl font-medium text-green">{c.description}</div>
                                <p className="text-xl font-medium">{c.text}</p>
                            </div>
                        </div>
                    ))}</div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;