import Ten from '../../../components/SVG/Ten.tsx'
import imgOne from '../../../../public/images/Image/Slider-img-1.jpg'
import imgTwo from '../../../../public/images/Image/Slider-img-2.jpg'
import imgThree from '../../../../public/images/Image/Slider-img-3.jpg'

const ImageSlider = () => {

    const cards = [
        {svg: Ten, img: imgOne, title: "Increased brand awareness", number: "01", id: 41, delay: "100"},
        {svg: Ten, img: imgTwo, title: "Enhanced customer engagement", number: "02", id: 42, delay: "500"},
        {svg: Ten, img: imgThree, title: "Improved conversion rates", number: "03", id: 43, delay: "900"}
    ]

    return (
        <div className="sm:hidden w-full h-[477px] justify-start items-start inline-flex overflow-y-hidden">
            <div className="flex flex-row gap-6 px-4">
            {cards.map(c => (
                <div
                    data-aos="fade-up" data-aos-duration="500" data-aos-delay={c.delay} data-aos-offset="100"
                    key={c.id}
                     className="relative bg-grey w-[300px] h-[460px] p-4 rounded-[20px] fc gap-4">
                    <div className="absolute  w-12 h-12 m-2 p-[10px] bg-white rounded-[40px]">
                        <c.svg/>
                    </div>
                    <img src={c.img} alt={c.title} className="w-[268px] h-[280px] rounded-[20px]"/>
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

export default ImageSlider;