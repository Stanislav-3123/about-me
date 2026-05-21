import {useEffect} from 'react';
import Ticker from "../Home/Ticker/Ticker.tsx";
import PoliciesTitle from "./Title/PolisiesTitle.tsx";
import NavLinks from "./NavLinks/NavLinks.tsx";
import NavLinlsDT from "./NavLinks/NavLinlsDT.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";

const Policies = () => {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])
    const initialState = [
        {
            id: 1,
            idForLink: "Privacy Terms",
            title: "",
            allText: [
                {
                    id: 1,
                    text: "The purpose of this document (the “Data Protection Policy”) is to inform you of how we manage Personal Data which is subject to General Data Protection Regulation (Regulation (EU) 2016/679) ('GDPR') as may be changed from time to time (the “Act”). Please read this Data Protection Policy (Privacy Policy) so that you know and understand the purposes for which we collect, use and disclose your Personal Data."
                },
                {
                    id: 2,
                    text: "We, EXPECTSTAR LIMITADA, a company incorporated under the laws of Costa Rica with the registered office at: 10th avenue, San Jose, San Jose city, 2135, Costa Rica, registration number 3-102-720330, and from time to time, its subsidiaries and partners (together the “Group”) and each being “member of the Group”, “we”, “us” for the purposes of this Privacy Policy are \"data controller\" of your personal information and “processor” of certain personal information, as described in more details in this Privacy Policy, recognize our responsibilities in relation to the collection, holding, processing, use and/or transfer of personal data under the applicable data protection laws."
                },
                {
                    id: 3,
                    text: "Personal data will be collected only for lawful and relevant purposes and all practicable steps will be taken to ensure that personal data held by us is accurate. We will use your personal data which we may from time to time collect in accordance with this Privacy Policy. We regularly review this Privacy Policy and may from time to time revise it or add specific instructions, policies and terms. Where any changes to this Privacy Policy are material, we will notify you accordingly."
                },
            ],
        }, {
            id: 2,
            idForLink: "Legal Basis",
            title: "Legal Basis",
            allText: [
                {
                    id: 1,
                    text: "We need to collect certain types of information for compliance with legal requirements relating to our anti-fraud/anti-money laundering (AML) and know your customer (KYC) obligations under the applicable legal acts on protection of personal data. If this information is not provided we cannot agree to provide a service to you. Your personal information may also be processed if it is necessary on reasonable request by a law enforcement or regulatory authority, body or agency or in the defence of legal claims. We will not delete personal information if relevant to an investigation or a dispute. It will continue to be stored until those issues are fully resolved."
                },
            ],
        }, {
            id: 3,
            idForLink: "Data collocation and storage",
            title: "Data collocation and storage",
            allText: [
                {
                    id: 1,
                    text: "This Privacy Policy describes how we use your personal information when you use our website(s) or your business supplies services or products to us or we provide services to your business."
                },
                {
                    id: 2,
                    text: "We will collect, store and use your personal information to allow access to this website, register our customers, and provide our services and for the purposes set out in more detail below."
                },

            ],
        }, {
            id: 4,
            idForLink: "What information we collect",
            title: "What information we collect",
            allText: [
                {
                    id: 1,
                    text: "• Basic Personal Data: name, surname, job title etc"
                },
                {
                    id: 2,
                    text: "• Identification information and other background verification data: (your or your representative’s, ultimate beneficiary owners) – name, surname, personal identity code, date of birth, address, nationality, gender, passport or ID card copy, evidence of beneficial ownership or the source of funds, number of shares held, voting rights or share capital part, title. "
                },
                {
                    id: 3,
                    text: "• Transaction data: beneficiary details, date, time, amount and currency which was used, name/IP address of sender and receiver, accounts, amount of transactions, income, location, etc. "
                }, {
                    id: 4,
                    text: "• Information related to legal requirements: data resulting from enquiries made by the authorities, data that enables us to perform anti-money laundering requirements and ensure the compliance with international sanctions, including the purpose of the business relationship and whether you are a politically exposed person and other data that is required to be processed by us in order to comply with the legal obligation to “know your client”. "
                }, {
                    id: 5,
                    text: "• Contact Data: registered/actual place of residence, phone number, e–mail address etc. Purposes and legal basis for Personal Data processing We collect personal data for the purposes listed below:"
                }, {
                    id: 6,
                    text: "• Conclusion of the contract or for performance of measures at your request prior to the conclusion of the contract (to identify and verify the clients). We may process your Basic Personal Data, Identification and other background verification Data, Contact Information and other Personal Data (in order to identify the possibility of providing services). Legal basis: concluding a contract with you, to fulfilling our legitimate interests and/or fulfilling the legal obligations applicable to us. "
                }, {
                    id: 7,
                    text: "• Fulfilment of a contract concluded with you. For this purpose, we may process your Basic Personal Data, Identification and other background verification Data, Transaction Data, Information which is related to legal requirements, Contact Information and other Personal Data provided to us by or on behalf of you or generated by us in the course of providing services. Legal basis: performance of a contract signed with you, fulfilling our or third parties’ legitimate interests and/or compliance with legal obligations applicable to us. "
                }, {
                    id: 8,
                    text: "• Compliance with legal obligations. For this purpose, we may process your Basic Personal Data, Identification and other background verification Data, Transaction Data, Information which is related to legal requirements, Contact Information and other Personal Data provided to us by or on behalf of you or generated by us in the course of providing services. Legal basis: fulfilling our or third parties’ legitimate interests and/or compliance with legal obligations applicable to us. "
                }, {
                    id: 9,
                    text: "• To provide an answer when you contact us through our website or other communication measures For this purpose, we may process your Basic Personal Data, Contact Information and other Personal Data provided to us by or on behalf of you. Legal basis: your consent, fulfilling our or third parties’ legitimate interests. Under Legitimate Interest we mean the interest of ours as a business in conducting and managing our services to enable us to provide to you and offer the most secure experience. Under Legal Obligation we mean processing your Personal Data where it is necessary for compliance with a legal or regulatory obligation that we are subject to."
                },
            ],
        }, {
            id: 5,
            idForLink: "How long do we keep your information",
            title: "How long do we keep your information",
            allText: [
                {
                    id: 1,
                    text: "We will keep customer information for the period when the customer has a business relation with us, and a further five years, and such further period during which you may bring a claim against us and for us to be able to defend ourselves. Where you apply for a business relation but we do not proceed, we will store your information for a reasonable period in case you make a repeat application."
                },
                {
                    id: 2,
                    text: "We will keep information about visitors to our websites (not being customers) for a reasonable length of time that lets us understand how people use our website and any technical issues they have. Usually this will not exceed 12 months."
                },
                {
                    id: 3,
                    text: "We will keep information about individuals who are our contacts at our business customer and suppliers for the duration of our relationship with the relevant business and where we are not made aware that the individual no longer works for it. We may keep our correspondence with these individuals for longer where relevant to our transactions with the business. For deleting your personal data please contact support."
                },
            ],
        }, {
            id: 6,
            idForLink: "Information we share with employees and partners",
            title: "Information we share with employees and partners",
            allText: [
                {
                    id: 1,
                    text: "There are certain circumstances where we may transfer your personal data to our employees, contractors and to other parties, as selected according to different case."
                },
                {
                    id: 2,
                    text: "We may transfer your personal information to potential buyers of our business, contractors, and to our professional advisers (such as lawyers, accountants, auditors, IT consultants, management consultants). Your personal information may be transferred to other third party organizations if we're required to by law, or under any regulatory code or practice we follow, or if we are asked by any public or regulatory authority. Where your information will be held"
                },
                {
                    id: 3,
                    text: "We ensure the implementation of appropriate technical, organizational and administrative security measures required to ensure the security of your Personal Data processing, in order to protect your Personal Data from loss, misuse, accidental or unlawful destruction, modification, disclosure, unauthorized access or any other unlawful handling. Third-party service providers that may engage in the processing of Personal Data on our behalf (for the purposes indicated above) are also contractually obligated to respect the confidentiality of the Personal Data."
                },
            ],
        }, {
            id: 7,
            idForLink: "Using cookies",
            title: "Using cookies",
            allText: [
                {
                    id: 1,
                    text: "If you access our information or services through the EXPECTSTAR LIMITADA website, you should be aware that cookies are used. Cookies are data files stored on your browser. If you have accepted cookies by using tools displayed when entering the EXPECTSTAR LIMITADA website, the website automatically installs and uses them on your browser when you access it. For more information on how to control your Cookie settings and browser settings or how to delete Cookies on your hard drive, please read the Cookies Policy."
                },
            ],
        }, {
            id: 8,
            idForLink: "Your rights",
            title: "Your rights",
            allText: [
                {
                    id: 1,
                    text: "You have certain rights in relation to your information. Under certain circumstances and in accordance with applicable data protection laws, you may have the right: "
                },
                {
                    id: 2,
                    text: "• to be told how we use your information and obtain access to your information; "
                },
                {
                    id: 3,
                    text: "• to have your information rectified or erased or place restrictions on processing your information; "
                },
                {
                    id: 4,
                    text: "• to object to the processing of your information e.g. for direct marketing purposes or where the processing is based on our legitimate interests; "
                }, {
                    id: 5,
                    text: "• to have any information you provided to us on an automated basis returned to you in a structured, commonly used and machine-readable format, or sent directly to another company, where technically feasible (“data portability”); "
                }, {
                    id: 6,
                    text: "• where the processing of your information is based on your consent, to withdraw that consent subject to legal or contractual restrictions;"
                }, {
                    id: 7,
                    text: "• to object to any decisions based on the automated processing of your personal data, including profiling; and "
                }, {
                    id: 8,
                    text: "• to lodge a complaint with the supervisory authority responsible for data protection matters. If we hold any information about you which is incorrect or if there are any changes to your details, please let us know by so that we can keep our records accurate and up to date."
                }
            ],
        }, {
            id: 9,
            idForLink: "Links to third party website",
            title: "Links to third party website",
            allText: [
                {
                    id: 1,
                    text: "Our website, newsletters, email updates and other communications, from time to time, may contain links to and from the websites of others including our partner networks, advertisers and other group companies and/or social networks as offered to you and supported by your browser."
                },
                {
                    id: 2,
                    text: "The personal data that you provide through these websites is not subject to this Privacy Policy and the treatment of your personal data by such websites is not our responsibility. If you follow a link to any of these websites, please note that these websites have their own privacy notices which will set out how your information is collected and processed when visiting those sites. For more information about the purpose and scope of data collection and processing in connection with social sharing features, please visit the privacy notices of entities through which you chose to share."
                },
            ],
        }, {
            id: 10,
            idForLink: "Automated decision making",
            title: "Automated decision making",
            allText: [
                {
                    id: 1,
                    text: "We may use some instances of your data in order customize our Services and the information we provide to you, and to address your needs - such as your country of address and transaction history. For example, if you frequently send funds from one particular currency to another, we may use this information to inform you of new product updates or features that may be useful for you. When we do this, we take all necessary measures to ensure that your privacy and security are protected - and we only use pseudonymized data where ever possible."
                },
            ],
        }, {
            id: 11,
            idForLink: "Changes to the privacy policy",
            title: "Changes to the privacy policy",
            allText: [
                {
                    id: 1,
                    text: "We may change this Privacy Policy from time to time. However, we will not reduce your rights under this Privacy Policy. We will always update this Privacy Policy on our website, so please try to read it when you visit the website (the ‘last updated’ reference tells you when we last updated this Privacy Policy)."
                },
            ],
        }, {
            id: 12,
            idForLink: "Further information",
            title: "Further information",
            allText: [
                {
                    id: 1,
                    text: "If you have any questions, concerns or complaints regarding our compliance with this Privacy Policy and the data protection laws, or if you wish to exercise your rights, we encourage you to first contact us using the contact details below. We will investigate and attempt to resolve complaints and disputes and will make every reasonable effort to honour your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by data protection laws. Any questions, comments and requests regarding this Privacy Policy should be addressed by writing to us at: 110th avenue, San Jose, San Jose city, 2135, Costa Rica or by sending an e-mail to: info@expectstarlimitada.com"
                },
            ],
        }, {
            id: 13,
            idForLink: "Governing law",
            title: "Governing law",
            allText: [
                {
                    id: 1,
                    text: "This Data Protection Policy and your use of this website is governed by laws of Costa Rica."
                },
            ],
        },
    ]
    return (
        <div className="policies-page">
            <PoliciesTitle/>
            <Ticker/>
            <div className="flex flex-colw w-full justify-end">
            <NavLinlsDT/>
            <div className="flex flex-col justify-end w-full">
                <NavLinks/>
                <div className="fc gap-8 px-4 sm:w-2/3">
                    {initialState.map(s => (
                        <div key={s.id} id={s.idForLink} className="fc gap-8">
                            <h2 className="title_policies">{s.title}</h2>
                            {s.allText.map(t => (
                                <p key={t.id} className="big_policies">{t.text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <ContactForm/>
        </div>
    );
};

export default Policies;