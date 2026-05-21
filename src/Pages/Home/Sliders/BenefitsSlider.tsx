import cube from '../../../components/SVG/BenefitsCubeSVG.tsx'
import {useState} from "react";
import image1 from '../../../../public/images/Image/abstract-shape (4)-min.png'
import image2 from '../../../../public/images/Image/abstract-shape (3)-min.png'
import image3 from '../../../../public/images/Image/spiral-abstract-shape (2)-min.png'

const BenefitsSlider = () => {

    const initialData = [
        {
            svg: cube,
            title: "Performance-driven Marketing Solutions",
            description: "Our company is dedicated to providing marketing solutions that are focused on performance and results. We use data-driven strategies and advanced analytics to optimize your marketing campaigns and achieve maximum ROI.",
            image: image1,
            id: 11,
            isHovered: false,
            delay: "100"
        },
        {
            svg: cube,
            title: "Individual Approach to Each Client",
            description: "We offer a personalized approach to each client, working closely with you to understand your business goals, target audience, and challenges, and then developing a tailored marketing strategy that fits your specific needs.",
            image: image2,
            id: 12,
            isHovered: false,
            delay: "400"
        },
        {
            svg: cube,
            title: "Expertise and Experience in Marketing",
            description: "Our team consists of highly-skilled and experienced marketing professionals who have a deep understanding of the latest trends and best practices in the industry. We are constantly learning and adapting to new technologies and methods.",
            image: image3,
            id: 13,
            isHovered: false,
            delay: "700"
        }
    ]
    const [cards, setCards] = useState(initialData);
    const touchStart = (id: number): void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return {...c, isHovered: true};
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return {...c, isHovered: false};
            }
            return c;
        });

        setCards(updatedContent);
    };

    return (
        <div className="sm:hidden px-4 w-full h-[400px] justify-start items-start inline-flex flex-row gap-4 overflow-y-hidden">
            {cards.map(c => (
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay={c.delay} data-aos-offset="100"
                    key={c.id} onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                    className="w-[260px] h-[340px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-[120px] bg-grey rounded-[100px] relative duration-500">
                        <img src={c.image} alt={c.title}></img>
                        <div
                            className={c.isHovered ? "p-[2px] w-10 h-10 absolute top-0 duration-500 right-0 bg-green rounded-[50px]" : "duration-500 p-[3px] w-[30px] h-[30px] absolute top-0 right-0 bg-white rounded-[50px]"}>

                            <svg
                                className={c.isHovered ? "fill-current text-white duration-500" : "fill-current duration-500 text-green"}
                                xmlns="http://www.w3.org/2000/svg"
                                width={c.isHovered ? "37" : "24"}
                                height={c.isHovered ? "34" : "24"}
                                fill="none"
                                viewBox="0 0 30 30">
                                <path id="Vector"
                                      d="M14.375 24.6417V15.3581L6.25 10.6538V19.5047C6.25 19.6329 6.28205 19.7531 6.34616 19.8653C6.41026 19.9775 6.50642 20.0736 6.63462 20.1538L14.375 24.6417ZM15.625 24.6417L23.3654 20.1538C23.4936 20.0736 23.5897 19.9775 23.6538 19.8653C23.7179 19.7531 23.75 19.6329 23.75 19.5047V10.6538L15.625 15.3581V24.6417ZM15 14.2836L23.0312 9.64174L15.3846 5.21627C15.2564 5.13615 15.1282 5.09609 15 5.09609C14.8718 5.09609 14.7436 5.13615 14.6154 5.21627L6.96875 9.64174L15 14.2836ZM6.00959 21.2596C5.69391 21.0785 5.44672 20.8325 5.26803 20.5216C5.08934 20.2107 5 19.8741 5 19.512V10.4879C5 10.1257 5.08934 9.7892 5.26803 9.4783C5.44672 9.16739 5.69391 8.92139 6.00959 8.7403L13.9904 4.14174C14.3061 3.96066 14.6426 3.87012 15 3.87012C15.3574 3.87012 15.6939 3.96066 16.0096 4.14174L23.9904 8.7403C24.3061 8.92139 24.5533 9.16739 24.732 9.4783C24.9107 9.7892 25 10.1257 25 10.4879V19.512C25 19.8741 24.9107 20.2107 24.732 20.5216C24.5533 20.8325 24.3061 21.0785 23.9904 21.2596L16.0096 25.8581C15.6939 26.0392 15.3574 26.1297 15 26.1297C14.6426 26.1297 14.3061 26.0392 13.9904 25.8581L6.00959 21.2596Z"
                                      fill="current"/>
                            </svg>
                        </div>
                    </div>
                    <h6 className={c.isHovered ? "w-[260px] text-green" : "w-[260px]"}>{c.title}</h6>
                    <p className={c.isHovered ? "text-primary text-base font-normal font-['Arial'] leading-snug duration-300" : "duration-300 text-secondary text-base font-normal font-['Arial'] leading-snug"}>{c.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BenefitsSlider;