import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const LearnMore = () => {

    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    const elements = [
        {
            id: 1,
            title: "Define your target audience",
            description: "Identify your target market and understand their needs, wants, and preferences"
        },
        {
            id: 2,
            title: "Create an effective marketing strategy",
            description: "Develop a comprehensive marketing plan that includes both online and offline strategies"
        },
        {
            id: 3,
            title: "Measure and analyze marketing performances",
            description: "Regularly analyze data to identify areas of improvement and adjust your marketing strategies accordingly"
        }
    ];

    return (
        <div className="flex flex-col-reverse sm:w-full sm:flex-row gap-8 px-4 sm:px-8 ">
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100"
                className="mr-[152px] rounded-[20px] bg-learn-more h-[492px] sm:h-[600px] w-full sm:w-[900px] bg-cover bg-center sm:bg-top"/>
            <div className="flex flex-col sm:w-full gap-8 sm:justify-between sm:gap-0">
                <div className="flex flex-col gap-16 sm:gap-8 sm:flex-row-reverse">
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
                        className="relative bg-secondary bg-opacity-15 rounded-[30px] sm:h-[227px] bg-shape-1 w-full h-[348px] bg-cover sm:bg-bottom bg-center">
                        <h6 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100"
                            className="absolute bottom-[-38px] sm:bottom-[-42px] left-[16px] bg-teal-800 bg-opacity-10 rounded-[20px] w-[180px] sm:h-[107px] h-[92px] p-4">
                            3 main elements of marketing for business
                        </h6>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">Discover how to grow your business with effective marketing strategies</p>
                        <button data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100"
                            className="green-button gradient sm:w-fit">learn more</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8">{elements.map(e => (
                    <div
                        className="flex flex-col  sm:flex-row gap-4 sm:gap-4" key={e.id}>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="100"
                            className="flex flex-row gap-2">
                            <svg

                                className="sm:self-center self-center sm:h-6 sm:w-[24px]"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#A6AAAB"
                                      d="M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4v4Zm.503 4.5a8.772 8.772 0 0 1-3.51-.709 9.094 9.094 0 0 1-2.859-1.922 9.085 9.085 0 0 1-1.925-2.857A8.753 8.753 0 0 1 3 12.003c0-1.244.236-2.414.708-3.51a9.094 9.094 0 0 1 1.924-2.859 9.085 9.085 0 0 1 2.856-1.925A8.753 8.753 0 0 1 11.997 3c1.244 0 2.414.236 3.51.708a9.094 9.094 0 0 1 2.859 1.924 9.083 9.083 0 0 1 1.925 2.856A8.753 8.753 0 0 1 21 11.997a8.772 8.772 0 0 1-.709 3.51 9.093 9.093 0 0 1-1.922 2.859 9.085 9.085 0 0 1-2.857 1.925 8.754 8.754 0 0 1-3.509.709ZM12 20c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z"/>
                            </svg>
                            <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100"
                                className="sm:w-[239px] sm:justify-center sm:self-center">{e.title}</h6>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-offset="100"
                            className="small-grey">{e.description}</div>
                    </div>
                ))}</div>
            </div>
        </div>
    );
};

export default LearnMore;