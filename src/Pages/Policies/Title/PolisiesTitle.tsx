
const PoliciesTitle = () => {
    return (
        <div className="home-title-container
        ">
            <div className="w-full inline-flex sm:justify-between sm:flex-row flex-col items-center sm:gap-8">
                <h1 className="animate-jump-in animate-once animate-duration-700 animate-delay-0 animate-ease-linear
                sm:font-medium sm:whitespace-nowrap leading-snug self-start">Privacy Policy</h1>
                <div className="fr gap-[10px] self-end">
                    <div
                        className="animate-fade-right animate-once animate-duration-500 animate-delay-[1000ms] animate-ease-linear
                        w-12 h-12 p-2.5 bg-zinc-100 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="deployed_code_FILL0_wght200_GRAD0_opsz24 1">
                                <path id="Vector"
                                      d="M11.5 19.7134V12.2865L5 8.52307V15.6038C5 15.7064 5.02564 15.8026 5.07692 15.8923C5.12821 15.982 5.20513 16.059 5.3077 16.1231L11.5 19.7134ZM12.5 19.7134L18.6923 16.1231C18.7949 16.059 18.8718 15.982 18.9231 15.8923C18.9744 15.8026 19 15.7064 19 15.6038V8.52307L12.5 12.2865V19.7134ZM12 11.4269L18.425 7.71345L12.3077 4.17307C12.2051 4.10897 12.1026 4.07692 12 4.07692C11.8974 4.07692 11.7949 4.10897 11.6923 4.17307L5.575 7.71345L12 11.4269ZM4.80768 17.0077C4.55513 16.8628 4.35737 16.666 4.21442 16.4173C4.07147 16.1686 4 15.8994 4 15.6096V8.39037C4 8.10064 4.07147 7.83141 4.21442 7.5827C4.35737 7.33396 4.55513 7.13716 4.80768 6.9923L11.1923 3.31345C11.4449 3.16858 11.7141 3.09615 12 3.09615C12.2859 3.09615 12.5551 3.16858 12.8077 3.31345L19.1923 6.9923C19.4449 7.13716 19.6426 7.33396 19.7856 7.5827C19.9285 7.83141 20 8.10064 20 8.39037V15.6096C20 15.8994 19.9285 16.1686 19.7856 16.4173C19.6426 16.666 19.4449 16.8628 19.1923 17.0077L12.8077 20.6865C12.5551 20.8314 12.2859 20.9038 12 20.9038C11.7141 20.9038 11.4449 20.8314 11.1923 20.6865L4.80768 17.0077Z"
                                      fill="#006064"/>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="animate-fade-right animate-once animate-duration-500 animate-delay-500 animate-ease-linear
                        w-12 h-12 p-2.5 bg-zinc-100 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
                            <path fill="#006064" d="M5.708 19 5 18.292 16.292 7H9V6h9v9h-1V7.708L5.708 19Z"/>
                        </svg>
                    </div>

                </div>
            </div>
            {/*<div className={"animate-fade-up animate-once animate-duration-500 animate-delay-[900ms] animate-ease-linear w-full sm:h-[260px] h-[220px]"}>*/}
            <div
                className="
                relative bg-policies w-full sm:h-[260px] h-[220px] sm:bg-fixed bg-cover bg-center sm:bg-top sm:bg-contain rounded-tl-[1000px] rounded-tr-[300px] rounded-bl-[1000px] sm:rounded-br-[1500px] rounded-br-[1000px]">
            </div>
            {/*</div>*/}
        </div>
    );
};

export default PoliciesTitle;