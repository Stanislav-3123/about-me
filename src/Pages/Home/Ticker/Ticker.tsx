import TickerButton from "./TickerButton.tsx";

const Ticker = () => {
    return (
        <div className="animate-flip-up animate-once animate-duration-1000 animate-delay-500 animate-ease-linear
        bg-white py-8 w-full sm:w-[1920px] sm:self-center rounded-[100px]">
            <div className="flex overflow-hidden">
                <div className="flex gap-8 animate-marquee">
                    <div className="whitespace-nowrap ticker">/ React-vue-angular<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Node.js<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Strategies for Business<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Marketing Insights<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Strategies for Business<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Marketing Insights<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Expectstar Limitada<TickerButton/></div>
                    <div className="whitespace-nowrap ticker">/ Strategies for Business<TickerButton/></div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;