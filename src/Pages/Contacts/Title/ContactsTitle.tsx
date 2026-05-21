
const ContactsTitle = () => {
    return (
        <div className="home-title-container">
            <div className="w-full inline-flex sm:flex-row flex-col items-center gap-4 sm:gap-8">
                <h1 className="animate-jump-in animate-once animate-duration-[900ms] animate-delay-0 animate-ease-linear
                sm:whitespace-nowrap leading-snug">Our main contacts</h1>
                <h5 className="sm:self-end sm:pb-4 animate-fade-right animate-once animate-duration-[900ms] animate-delay-700 animate-ease-linear"
                >Ornare amet, amet non sit<span> habitasse orci, velit arcu ultricies.</span></h5>
            </div>
            <div
                className="relative bg-title-dt w-full sm:h-[260px] h-[220px]
                bg-cover sm:bg-fixed sm:bg-top sm:bg-contain
                bg-center rounded-tl-[1000px] rounded-tr-[300px] rounded-bl-[1000px] sm:rounded-br-[1500px] rounded-br-[1000px]">
            </div>
        </div>
    );
};
export default ContactsTitle;