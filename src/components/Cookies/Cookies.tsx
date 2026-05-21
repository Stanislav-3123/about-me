import {FC, useEffect, useState} from "react";
import { useLocalStorage } from './../../utils/useLocalStorage.ts'
import {classNames} from "../../utils/classNames.ts";
import {Link} from "react-router-dom";
const Cookies: FC = () => {
    const [agreed, setAgreed] = useLocalStorage('agreedCookies', false)
    const [classes, setClasses] = useState("")
    useEffect(() => {
        setClasses(classNames({ ["hidden"]: agreed, ["animate-fade-up animate-once animate-duration-500 animate-delay-[3000ms] animate-ease-linear animate-fill-backwards z-[40] sm:px-8 sm:w-[800px] sm:h-28 sm:rounded-[40px] sm:bottom-0 sm:flex-row  \n" +
            "h-auto  p-8 bg-white shadow  sm:rounded-[30px] rounded-t-[30px] flex-col \n" +
            "justify-center items-center gap-4 sm:gap-8 flex fixed bottom-0"]: !agreed }))
    }, [agreed])
    return (
        <div
            className={classes}
        >
            <p className="font-['Outfit'] leading-[1.3rem] text-center sm:text-start text-primary text-base sm:text-sm font-medium  sm:leading-snug">
                We care about your data, and we’d love to use cookies to make your experience better. You can read
                more information about our
                <Link to={"/policies"} className="text-green text-sm sm:text-base font-semibold font-['Outfit']"> Cookie Policy</Link>.
            </p>
            <button onClick={() => setAgreed(true)}
                    className="text-white sm:w-[129px] w-full text-center bg-green px-8 py-4 rounded-[100px]">THANKS
            </button>
        </div>

    );
};

export default Cookies;

