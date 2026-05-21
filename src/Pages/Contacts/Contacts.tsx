import {useEffect} from 'react';
import ContactsTitle from "./Title/ContactsTitle.tsx";
import Ticker from "../Home/Ticker/Ticker.tsx";
import OurContacts from "./OurContacts/OurContacts.tsx";

const Contacts = () => {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])
    return (
        <div className="contacts_page">
            <ContactsTitle/>
            <Ticker/>
            <OurContacts/>
        </div>
    );
};

export default Contacts;