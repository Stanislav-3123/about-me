const Modal = ({onClose}: any) => {
    return (
        <div className="fixed w-full inset-0 flex flex-col items-center justify-center z-30 bg-black bg-opacity-40">
            <div className="animate-ping animate-once animate-duration-500 animate-delay-0 animate-ease-linear animate-reverse animate-fill-backwards
            absolute sm:static sm:w-[480px] sm:h-[260px] w-full bottom-0 py-8 px-4 sm:p-8 fc gap-6 bg-white sm:rounded-[30px] rounded-t-[30px] h-[235px]">
                <div className="relative w-full  fc gap-6">
                    <div className="fr justify-center relative">
                        <h3 className="text-[32px] sm:text-5xl font-medium">Thank you</h3>
                        <svg onClick={onClose}
                             className="cursor-pointer absolute right-[10px] sm:top-[5px] top-[-5px]"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                             viewBox="0 0 24 24">
                            <path fill="#1E1E1E"
                                  d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19Z"/>
                        </svg>
                    </div>
                    <div className="self-center fc">
                        <p className="self-center text-secondary text-sm sm:text-base font-medium font-['Outfit'] leading-relaxed">Your
                            form has been successfully submitted!</p>
                        <span
                            className="self-center text-sm font-medium sm:text-base text-accent leading-relaxed">We will contact you shortly!</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-[100px] px-8 py-4 bg-green text-white text-xs sm:text-sm font-medium">OKAY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;