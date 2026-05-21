import React, {FormEvent, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import Modal from "../Modal/Modal.tsx";
import emailjs from "@emailjs/browser";

const Form = () => {
        useEffect(() => {
            AOS.init({
                disable: false,
                once: true,
            });
        }, []);

        const [isOpen, setIsOpen] = useState(false);
        const openThanksModal = () => {
            setIsOpen(true);
        };

        const handleClose = () => {
            setIsOpen(false);
        };

        const [name, setName] = useState<string>("")
        const [email, setEmail] = useState<string>("")
        const [phone, setPhone] = useState<string>("")
        const [message, setMessage] = useState<string>("")
        const [checked, setChecked] = useState<boolean>(false);
        const [errorName, setErrorName] = useState<boolean>(false);
        const [errorEmail, setErrorEmail] = useState<boolean>(false);
        const [errorPhone, setErrorPhone] = useState<boolean>(false);
        const [errorMessage, setErrorMessage] = useState<boolean>(false);
        const [checkboxError, setCheckboxError] = useState<boolean>(false);
        const [isFailedSent, setIsFailedSent] = useState<boolean>(false);
        const handleSubmitJs = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const serviceId = 'service_6ulugdw';
            const templateId = 'template_7gz1qo9';
            const publicKey = 'lUn0TlsyIoXLlpzzu';
            const templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message,
            };
            if (name.trim() !== ""
                && phone.trim() !== ""
                && email.trim() !== ""
                && message.trim() !== ""
                && phone.trim() !== ""
                && checked) {
                emailjs.send(serviceId, templateId, templateParams, publicKey)
                    .then((response) => {
                        console.log('Email sent successfully!', response);
                        openThanksModal();
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                    })
                    .catch((error) => {
                        console.error('Error sending email:', error);
                        setIsFailedSent(true);
                        setTimeout(() => {
                            setIsFailedSent(false);
                        }, 5000);
                    });
            } else {
                setErrorName(true);
                setErrorEmail(true);
                setErrorMessage(true);
                setErrorPhone(true);
            }
            if (!checked) {
                setCheckboxError(true);
            }
        }
        const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        }
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };
        const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
        };
        const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(e.target.value);
        };
        return (
            <form id={"ContactForm"}
                  onSubmit={handleSubmitJs}
                  className="fc relative sm:flex-row gap-2">
                <div className="fc gap-2">
                    <div className="fc gap-2 sm:flex-row">
                        <input id={"name"} autoComplete={"off"}
                               data-aos={errorName ? "" : "zoom-in"} data-aos-duration="1000" data-aos-delay="700"
                               data-aos-offset="100"
                               type="text" className={errorName ? "error_input" : "input"} value={name}
                               onChange={handleNameChange} placeholder="Name"/>
                        <input id={"email"} autoComplete={"off"}
                               data-aos={errorEmail ? "" : "zoom-in"} data-aos-duration="1000" data-aos-delay="700"
                               data-aos-offset="100"
                               type="text" className={errorEmail ? "error_input" : "input"}
                               onChange={handleEmailChange}
                               value={email} placeholder="E-mail"/>
                        <input id={"phone"} autoComplete={"off"}
                               data-aos={errorPhone ? "" : "zoom-in"} data-aos-duration="1000" data-aos-delay="700"
                               data-aos-offset="100"
                               className={errorPhone ? "error_input" : "input"} onChange={handlePhoneChange}
                               value={phone}
                               placeholder="Phone"/>
                    </div>
                    <textarea id={"text"}
                              data-aos={errorMessage ? "" : "zoom-in"} data-aos-duration="1000" data-aos-delay="700"
                              data-aos-offset="100"
                              value={message} onChange={handleMessageChange}
                              className={errorMessage ? "error_input h-40 sm:w-full sm:h-[260px]" : "input h-40 sm:w-full sm:h-[260px]"}
                              placeholder="Message"/>
                </div>
                <div className="fc gap-2 sm:flex-col-reverse">
                    <div data-aos={checkboxError ? "" : "zoom-in"} data-aos-duration="1000" data-aos-delay="700"
                         data-aos-offset="0"
                         className="input fr sm:h-[108px] gap-2 items-center">
                        <input id={"checkbox"}
                               onChange={() => {
                                   setChecked(!checked)
                                   setCheckboxError(false)
                               }} checked={checked}
                               className={checkboxError ? "error_check_box" : "check_box"} type={"checkbox"}/>
                        <p className={checkboxError ? "error_check_box_text" : "check_box_text"}>I have read and
                            accept
                            the <Link
                                className="text-sm font-bold" to={'/policies'}>Privacy Policy</Link></p>
                    </div>
                    <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" data-aos-offset="0"
                            type={"submit"}
                            className="w-full rounded-[30px] gradient p-8 h-[110px] sm:h-full bg-green duration-300  fc text-white text-sm font-medium gap-1 justify-center items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#fff"
                                      d="M10.437 18.563a.313.313 0 0 1-.313-.313v-4.375c0-.09.04-.174.106-.233l3.28-2.917-4.79 2.795a.316.316 0 0 1-.298.009l-3.75-1.875a.312.312 0 0 1 .026-.57l14.375-5.626a.313.313 0 0 1 .42.353l-2.5 12.5a.311.311 0 0 1-.46.21l-4.136-2.363-1.71 2.28a.313.313 0 0 1-.25.125Zm1.875-3.125c.053 0 .107.013.155.041l3.998 2.285L18.768 6.25 5.58 11.41l2.97 1.485 7.355-4.29a.313.313 0 0 1 .365.504l-5.52 4.907v3.297l1.312-1.75a.312.312 0 0 1 .25-.125Z"/>
                            </svg>
                        </div>
                        Send
                    </button>
                </div>
                {isFailedSent ? <div
                    className="animate-fade w-full h-[110px] sm:text-base mx-[200px] sm:max-w-[800px] sm:h-[84px] p-8 bg-white absolute bottom-0 left-[-200px] sm:left-0 sm:bottom-[-120px] rounded-[30px] shadow justify-start items-center text-red-600 text-sm font-semibold font-['Outfit']">
                    Your form has not been submitted. Please try again.
                </div> : null}
                {isOpen ? <Modal onClose={handleClose}/> : null}
            </form>
        );
    }
;

export default Form;