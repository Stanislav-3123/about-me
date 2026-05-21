
import TickerButton from "./TickerButton.tsx";

const BlueBlackTicker = () => {
    return (
        <div className=" bg-white py-8 w-full sm:w-[1920px] rounded-[100px]">
            <div className="flex overflow-hidden">
                <div className="flex gap-8 animate-marquee">
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<TickerButton/></div>
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<TickerButton/></div>
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<TickerButton/></div>
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<TickerButton/></div>
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Marketing Insights<TickerButton/></div>
                    <div className="whitespace-nowrap ticker ">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap blue-ticker">/ Strategies for Business<TickerButton/></div>
                </div>
            </div>
        </div>
    );
};

export default BlueBlackTicker;