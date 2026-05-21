import BlueTicker from "../Ticker/BlueTicker.tsx";
import {useState} from "react";
import Ten from "../../../components/SVG/Ten.tsx";
import imgOne from "../../../../public/images/Image/Slider-img-1.jpg";
import imgTwo from "../../../../public/images/Image/Slider-img-2.jpg";
import imgThree from "../../../../public/images/Image/Slider-img-3.jpg";

const SwipeCards = () => {
    const initialData = [
        {
            svg: Ten,
            img: imgOne,
            title: "Increased brand awareness",
            number: "01",
            id: 1,
            scrolled: false,
            test: {rotate: '0deg', zIndex: 3},
            delay: "[1000ms]"
        },
        {
            svg: Ten,
            img: imgTwo,
            title: "Enhanced customer engagement",
            number: "02",
            id: 2,
            scrolled: false,
            test: {rotate: '4deg', zIndex: 2},
            delay: "500"
        },
        {
            svg: Ten,
            img: imgThree,
            title: "Improved conversion rates",
            number: "03",
            id: 3,
            scrolled: false,
            test: {rotate: '8deg', zIndex: 1},
            delay: "0"
        },
    ]

    const [cards, setCards] = useState(initialData)

    const handleChangeScrolled = (id: number): void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return {...c, scrolled: true};
            }
            return c;
        });
        setCards(updatedData);
        checkScrolledStatus(cards)
    };
    function disableScroll() {
        // Сохраняем текущую позицию прокрутки страницы
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        // Устанавливаем фиксированные значения для position, width и overflow
        // document.documentElement.style.position = 'fixed';
        // document.documentElement.style.width = '100%';
        document.documentElement.style.overflow = 'hidden';

        // Устанавливаем прокрутку страницы в сохраненную позицию
        window.scrollTo(scrollLeft, scrollTop);
    }
    function checkScrolledStatus(data: {svg: () => JSX.Element, img: string, title: string, number: string, id: number, scrolled: boolean,test: {rotate: string, zIndex: number}, delay: string}[]) {
        // Итерируемся по каждому объекту в массиве данных
        for (let i = 0; i < data.length; i++) {
            // Проверяем свойство scrolled в текущем объекте
            if (!data[i].scrolled) {
                // Вызываем функцию alert, если свойство scrolled равно false
               return
            }
        }
    }
// Создаем функцию, которая включает скролл на странице
    const enableScroll = () => {
        // Удаляем фиксированные значения для position, width и overflow
        document.documentElement.style.position = '';
        document.documentElement.style.width = '';
        document.documentElement.style.overflow = '';
        setCards(initialData)
    }


    return (
        <div className="hidden sm:flex h-[650px] w-full relative">
            <div className="absolute max-w-[1920px] top-1/2 right-[-350px]">
                <BlueTicker/>
            </div>
            <div onMouseEnter={disableScroll}
                 onMouseLeave={enableScroll}
                className="mx-auto relative py-[46px] px-[60px]  h-full w-[550px] z-[2]">
                {cards.map(c => (
                    <div onWheel={() => handleChangeScrolled(c.id)}
                         key={c.id}
                         className={c.scrolled ? "swipe_card animate-card-swipe-up animate-fill-forwards"
                             : `swipe_card animate-ping animate-once animate-duration-300 animate-delay-${c.delay} animate-ease-linear animate-fill-both animate-reverse`}
                         style={c.test}
                    >
                        <div className="absolute w-12 h-12 m-2 p-[10px] bg-white rounded-[40px]">
                            <c.svg/>
                        </div>
                        <img src={c.img} alt={c.title} className="w-[388px] h-auto rounded-[20px]"/>
                        <div className="fr justify-end items-start gap-[13px]">
                            <p className="card-title">{c.title}</p>
                            <div className="cart-number">{c.number}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwipeCards;
