
import {Link} from "react-scroll";

export const WriteToUsMobile = ({setIsOpen} : any) => {
    return (
        <Link
            onClick={() => setIsOpen(false)}
            to={"ContactForm"} offset={-70}
            className="w-full h-[47px] px-8 py-4 bg-teal-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-medium font-['Outfit'] uppercase">Write to us</div>
        </Link>
    );
};
