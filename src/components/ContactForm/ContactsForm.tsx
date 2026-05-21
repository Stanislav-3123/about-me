import 'aos/dist/aos.css';
import Form from "./Form.tsx";

const ContactsForm = () => {


    return (
        <div
            className=" h-[804px] sm:h-auto px-4 flex-col sm:w-full sm:px-8 justify-start items-center gap-8 inline-flex">
            <div className="flex-col relative justify-start items-center gap-8 inline-flex">
                <h3 className="text-center text-stone-900 text-5xl sm:text-[140px] sm:py-4 font-medium uppercase">contact
                    us</h3>
                <div
                    className="bg-green p-4 w-[260px] rounded-[20px] sm:h-[207px] sm:absolute top-[-10px] fc sm:justify-between gap-4">
                    <p className="text-xs text-white font-normal font-['Arial'] uppercase">Our contacts</p>
                    <a href="mailto:info@expectstarlimitada.com"
                        className="text-xs text-white font-normal font-['Arial'] uppercase">info@expectstarlimitada.com</a>
                    <p className="text-xs text-white font-normal font-['Arial'] uppercase">10th avenue, San Jose, San
                        Jose
                        city, 2135, Costa Rica</p>
                </div>
            </div>
            <Form/>
        </div>
    );
};

export default ContactsForm;
