const Help = () => {
    return (
        <div className="rounded-[20px] w-full px-4 sm:px-8 h-[480px]">
            <div
                className="rounded-[20px] px-4 sm:px-8 py-8 fc justify-center items-center gap-8 w-full h-[480px] bg-help bg-cover bg-center">
                <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                    className="text-center text-white text-5xl sm:text-8xl font-medium">Expectstar Limitada</h2>
                <p data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                    className="sm:px-[220px] text-sm sm:text-xl text-center font-['Outfit'] font-medium">Don't hesitate to contact us
                    today to learn more about our services and how we can help your business grow!</p>
                <svg data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-aos-offset="100"
                    className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"
                     viewBox="0 0 24 24">
                    <path fill="#006064"
                          d="M12 15.038 6.346 9.385l.895-.895L12 13.259 16.759 8.5l.895.895L12 15.038Z"/>
                </svg>
            </div>
        </div>
    );
};

export default Help;