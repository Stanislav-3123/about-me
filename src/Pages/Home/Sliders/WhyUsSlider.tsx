import Circule from '../../../components/SVG/CirculeSVG.tsx'
import Infinity from '../../../components/SVG/InfinitySVG.tsx'
import Cube from '../../../components/SVG/CubeSVG.tsx'
import {useState} from "react";
import {Link} from "react-scroll";

const WhyUsSlider = () => {

    const initialData = [
        {
            svg: Circule,
            title: "We take feedback into account and improve our work",
            number: "01",
            id: 81,
            button: "Clients",
            isHovered: false,
            delay: "100"
        },
        {
            svg: Infinity,
            title: "We take care of our employees and create conditions for development",
            number: "02",
            id: 82,
            button: "Employees",
            isHovered: false,
            delay: "500"
        },
        {
            svg: Cube,
            title: "We strive for development and responsible attitude towards society",
            number: "03",
            id: 83,
            button: "Liability",
            isHovered: false,
            delay: "900"
        }
    ]
    const [cards, setCards] = useState(initialData);
    const touchStart = (id: number) : void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: true };
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: false };
            }
            return c;
        });

        setCards(updatedContent);
    };

    return (
        <div className="sm:hidden w-full h-[460px] justify-start items-start inline-flex flex-col overflow-y-hidden">
            <div className="flex flex-row gap-4 px-4">
                {cards.map(c => (
                    <Link to={"ContactForm"} data-aos="fade-left" data-aos-duration="500" data-aos-delay={c.delay} data-aos-offset="100"
                        key={c.id} onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                        className="w-[300px] duration-300 h-[400px] p-8 bg-grey rounded-[20px] flex-col justify-between items-start inline-flex">
                        <div className="fr justify-between w-full h-[70px] items-center">
                            <div className="cart-button">{c.button}</div>
                            <svg className={c.isHovered ?"rotate-45 duration-300":"duration-300"} xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#000" d="M5.708 19 5 18.292 16.292 7H9V6h9v9h-1V7.708L5.708 19Z"/>
                            </svg>
                        </div>
                        <h3>{c.title}</h3>
                        <div className="fr w-full justify-between">
                            <h2>{c.number}</h2>
                            <c.svg/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WhyUsSlider;