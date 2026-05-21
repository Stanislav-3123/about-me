import Circule from '../../../components/SVG/HomeCards/CirculeSVGDT.tsx'
import Infinity from '../../../components/SVG/HomeCards/InfinitySVGDT.tsx'
import Cube from '../../../components/SVG/HomeCards/CubeSVGDT.tsx'
import {useState} from "react";
import {Link} from "react-scroll";

const WhyUsCards = () => {

    const initialData = [
        {
            svg: Circule,
            title: "We take feedback into account and improve our work",
            number: "01",
            id: 71,
            button: "Clients",
            isHovered: false,
            delay: "200"
        },
        {
            svg: Infinity,
            title: "We take care of our employees and create conditions for development",
            number: "02",
            id: 72,
            button: "Employees",
            isHovered: false,
            delay: "500"
        },
        {
            svg: Cube,
            title: "We strive for development and responsible attitude towards society",
            number: "03",
            id: 73,
            button: "Liability",
            isHovered: false,
            delay: "800"
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
        <div className="w-full h-[460px] justify-start items-start hidden sm:inline-flex flex-col overflow-y-hidden">
            <div className="flex flex-row gap-4 sm:gap-8 px-4">
                {cards.map(c => (
                    <Link to={"ContactForm"} offset={-300} data-aos="fade-left" data-aos-duration="500" data-aos-delay={c.delay} data-aos-offset="100"
                        key={c.id} onMouseEnter={() => touchStart(c.id)} onMouseLeave={() => touchEnd(c.id)}
                         className="w-[360px] cursor-pointer duration-300 h-[400px] p-8 bg-grey rounded-[20px] flex-col justify-between items-start inline-flex">
                        <div className="fr justify-between w-full h-[70px] items-center">
                            <div className="cart-button">{c.button}</div>
                            <svg className={c.isHovered ? "rotate-45 duration-500" : "duration-300"}
                                 xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={c.isHovered ? "#006064" : "#000"}
                                      d="M5.708 19 5 18.292 16.292 7H9V6h9v9h-1V7.708L5.708 19Z"/>
                            </svg>
                        </div>
                        <h3 className="text-[32px]">{c.title}</h3>
                        <div className="fr w-full justify-between">
                            <div className="h-[88px]  overflow-hidden"><h2
                                className={c.isHovered ? "duration-500 text-8xl text-green" : "duration-500 pt-[22px] text-8xl"}>{c.number}</h2>
                            </div>
                            <c.svg fill={c.isHovered ? "#000" : "#006064" }/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WhyUsCards;