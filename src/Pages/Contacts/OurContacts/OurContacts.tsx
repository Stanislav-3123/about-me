import Form from "../../../components/ContactForm/Form.tsx";

const OurContacts = () => {
    return (
        <>
            <div className="fc sm:hidden sm:px-8 px-4 gap-8 w-full">
                <p className="px-8 py-2.5 rounded-[40px] text-sm font-['Outfit'] font-medium border w-fit border-primary">Our
                    contacts</p>
                <h3 className="text-primary text-[32px] font-medium leading-snug">10th avenue, San Jose, <span
                    className="text-accent">San Jose city, 2135, Costa Rica</span></h3>
                <p className="text-2xl font-medium text-secondary">expectstar@mail.com</p>
                <Form/>
            </div>
            <div className="hidden sm:flex flex-col sm:px-8 px-4 gap-8 w-full">
                <div className="flex flex-row w-full justify-between">

                    <h3 className="w-1/2 text-primary text-5xl  font-medium leading-snug">10th avenue, San Jose, <span
                        className="text-accent">San Jose city, 2135, Costa Rica</span></h3>
                    <div className="items-end flex justify-between flex-col">
                        <p className="px-8 py-2.5 rounded-[40px] text-sm font-['Outfit'] font-medium border w-fit border-primary">Our
                            contacts</p>
                        <a href="mailto:info@expectstarlimitada.com"
                            className="text-right text-secondary text-[32px] font-medium font-['Outfit']">info@expectstarlimitada.com</a>
                    </div>
                </div>
                <div className="mt-[128px]">
                    <Form/>
                </div>
            </div>
        </>
    );
};

export default OurContacts;