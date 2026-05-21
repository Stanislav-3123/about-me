import GreyTickerButton from "./GreyTickerButton.tsx";

const Ticker = () => {
    return (
        <div className=" bg-white py-8 w-full sm:w-[1920px] rounded-[100px]">
            <div className="flex overflow-hidden">
                <div className="flex gap-8 animate-marquee">
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Expectstar Limitada<GreyTickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<GreyTickerButton/></div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;