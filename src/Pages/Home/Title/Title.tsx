const Title = () => {
    return (
        <div className="home-title-container">
            <div className="w-full inline-flex sm:flex-row flex-col items-center gap-4 sm:gap-8">
                <h1 className="sm:whitespace-nowrap leading-snug animate-jump-in animate-once animate-duration-[1.4s] animate-delay-0 animate-ease-linear">Expectstar
                    Limitada</h1>
                <h5 className="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-linear">Marketing
                    Insights and<span> Strategies for Business Growth</span></h5>
            </div>
            <div className="
            relative bg-title-dt w-full sm:h-[480px] h-[220px] sm:bg-cover sm:bg-fixed bg-cover bg-center rounded-tl-[1000px] rounded-tr-[200px] rounded-bl-[1000px] sm:rounded-br-[1500px] rounded-br-[1000px]">
                <div
                    className="animate-fade animate-once animate-duration-700 animate-delay-[2000ms] animate-ease-linear
                    cursor-pointer absolute bottom-0 right-0 w-20 h-20 sm:w-[100px] sm:h-[100px] px-4 py-8 bg-teal-800 bg-opacity-10 rounded-[100px] backdrop-blur-[10px] flex-col justify-center items-center inline-flex">
                    <div className="animate-bounce">
                        <svg className="rotate-[135deg]"
                             xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
                            <path fill="#000" d="M5.708 19 5 18.292 16.292 7H9V6h9v9h-1V7.708L5.708 19Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;