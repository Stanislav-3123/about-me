import {Link} from "react-scroll";
import {useState} from "react";

const WriteToUs = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return (
        <Link to={"ContactForm"} offset={-300} className="contact_button"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
        >
            {isVisible ?
                <svg className="button_dote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                     viewBox="0 0 24 24">
                    <g clipPath="url(#a)">
                        <path fill="#4DD0E1"
                              d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12Z"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#4DD0E1" d="M0 0h24v24H0z"/>
                        </clipPath>
                    </defs>
                </svg> : null}
            write to us
            {isVisible ? <svg className="button_arrow_right" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              fill="none"
                              viewBox="0 0 24 24">
                <path fill="#4DD0E1" d="M14 17.308 8.692 12 14 6.692l.708.708-4.6 4.6 4.6 4.6-.708.708Z"/>
            </svg> : null}

        </Link>
    );
};

export default WriteToUs;