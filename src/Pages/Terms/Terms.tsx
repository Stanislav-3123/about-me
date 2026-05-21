import {useEffect} from 'react';
import Ticker from "../Home/Ticker/Ticker.tsx";
import PoliciesTitle from "./Title/TermsTitle.tsx";
import TermsNavLinks from "./NavLinks/TermsNavLinks.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import TermsNavLinlksDT from "./NavLinks/TermsNavLinlksDT.tsx";

const Terms = () => {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])
    const initialState = [
        {
            id: 1,
            idForLink: "Terms and Conditions",
            title: "",
            allText: [
                {
                    id: 1,
                    text: "These Terms and Conditions (“Agreement” or “Terms”) is an agreement between you and EXPECTSTAR LIMITADA and applies to your use of the website at https://expectstarlimitada.com (referred to herein below as the “website”)."
                },
                {
                    id: 2,
                    text: "Please read carefully, agree and accept all the terms and conditions contained in this Agreement and the Privacy Policy and other Policies contained on the website, which are an integral part of this Agreement, before you become a member of EXPECTSTAR LIMITADA."
                },
                {
                    id: 3,
                    text: "These Terms apply in full force and effect to your use of this website and by using this website, you expressly accept all terms and conditions contained herein in full. You must not use this website, if you have any objection to any of these Terms."
                },
                {id: 4,
                text: "You understand and agree that your access to and use of the website is entirely at your own discretion and risk, and that you will be solely responsible for any loss or damage that may arise from such access and use."
                }, {id: 5,
                    text: "Please note that any actions on the website that are made by using your Internet connection or electronic device, unless you prove otherwise, shall be deemed as have been taken by you."
                }, {id: 6,
                    text: "The following definitions will apply here:\n" +
                        "\"you\" or \"your\" means any natural person or entity using the website (\"Client\"), unless otherwise stated herein. \"We\", \"our\", \"Partners\" or \"our\" together will refer to EXPECTSTAR LIMITADA and its subsidiaries, Partners, unless otherwise stated.\n"
                },
            ],
        },
        {
            id: 2,
            idForLink: "About us",
            title: "About us",
            allText: [
                {
                    id: 1,
                    text: "This website is owned and maintained by EXPECTSTAR LIMITADA, a company incorporated under the laws of Costa Rica, with the registered office at: 10th avenue, San Jose, San Jose city, 2135, Costa Rica, registration number 3-102-720330."
                },
            ],
        },
        {
            id: 3,
            idForLink: "Conditions of use",
            title: "Conditions of use",
            allText: [
                {
                    id: 1,
                    text: "You are specifically restricted from using this website in any way that is or may be damaging to this website, using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity."
                },
                {
                    id: 2,
                    text: "You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website:"
                },
                {
                    id: 3,
                    text: "• In any way that violates any applicable federal, state, local or international law or regulation;"
                },
                {
                    id: 4,
                    text: "• In any manner that involves transmitting or sending of, any advertising or promotional material, including any “junk mail”, “chain letter” or “spam” or any other similar solicitation;"
                },
                {
                    id: 5,
                    text: "• In any manner that involves impersonating or attempt to impersonate the Company, a Company`s employee, another user or any other person or entity (including, without limitation, by using e-mail addresses associated with any of the foregoing);"
                },
                {
                    id: 6,
                    text: "• In any manner that involves engaging in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website or our digital assets, or which, as determined by us, may harm the Company or users of the Website or expose them to liability;"
                },
                {
                    id: 7,
                    text: "• In the manner that is or may be considered as defamatory, harassing, pornographic, embarrassing, vulgar, malicious, harmful, threatening, indecent, derogatory, discriminatory, untrue, political, abusive, sexist, hateful, offensive, menacing, obscene, racist, profane."
                },
                {
                    id: 8,
                    text: "In addition, you agree not to:"
                },
                {
                    id: 9,
                    text: "• Use any robot, spider or another automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website;"
                },
                {
                    id: 10,
                    text: "• Use any manual process to monitor or copy any of the material on the Website or for any other unauthorized purpose without our prior written consent;"
                },
                {
                    id: 11,
                    text: "• Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use of the Website, including their ability to engage in real time activities through the Website;"
                },
                {
                    id: 12,
                    text: "• Use any device, software or routine that interferes with the proper working of the Website;"
                },
                {
                    id: 13,
                    text: "• Introduce any viruses, trojan horses, worms, logic bombs or other material which is malicious or technologically harmful;"
                },
                {
                    id: 14,
                    text: "• Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer or database connected to the Website;"
                },
                {
                    id: 15,
                    text: "• Attack the Website via a denial-of-service attack or a distributed denial-of-service attack;"
                },
                {
                    id: 16,
                    text: "• Otherwise attempt to interfere with the proper working of the Website."
                },
            ],
        },
        {
            id: 4,
            idForLink: "Intellectual property",
            title: "Intellectual property",
            allText: [
                {id: 1,
                    text: "EXPECTSTAR LIMITADA owns all rights to the intellectual property and material contained in this website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this website. You must not republish material from this website (including republication on another website), or reproduce or store material from this website in any public or private electronic retrieval system; you must not reproduce, duplicate, copy, sell, re-sell, visit, or otherwise exploit our website or material on our website for a commercial purpose, without our express written consent. Elements of the website are protected by trade dress, trade secret and other laws and may not be copied or imitated in whole or in part. All custom graphics, icons, and other items that appear on the website are trademarks, service marks or trade dress of EXPECTSTAR LIMITADA and may not be used or interfered with in any manner without the express written consent of EXPECTSTAR LIMITADA. In consideration of this, users agree that copies of the information will retain all copyright and other proprietary notices."
                },
            ],
        },
        {
            id: 5,
            idForLink: "Legal terms",
            title: "Legal terms",
            allText: [
                {
                    id: 1,
                    text: "This website may contain other proprietary notices and copyright information, the terms of which must be observed and followed. Information on this website may contain typographical errors or technical inaccuracies. Information may be changed or updated without notice."
                }
            ],
        },
        {id: 6,
            idForLink: "Indemnification and limitation of liability",
            title: "Indemnification and limitation of liability",
            allText: [
                {
                    id: 1,
                    text: "You hereby indemnify to the fullest extent EXPECTSTAR LIMITADA from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms."
                },
                {
                    id: 2,
                    text: "IN NO EVENT WILL EXPECTSTAR LIMITADABE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL DAMAGES FOR ANY USE OF THIS WEBSITE, OR ON ANY OTHER HYPER LINKED WEBSITE, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR INFORMATION HANDLING SYSTEM OR OTHERWISE, EVEN IF WE ARE EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. EXPECTSTAR LIMITADAIS NOT RESPONSIBLE FOR CONTENT OF THIRD-PARTIES WEBSITES."
                },
            ],
        },
        {
            id: 7,
            idForLink: "Modifications",
            title: "Modifications",
            allText: [
                {
                    id: 1,
                    text: "We can revise and update these Terms at any time without notice. In case of any changes, amendments, modifications, or corrections, we will post the revised version of the Terms on the website. It is your responsibility to check these Terms for any changes whenever you access the website. Your continued usage of the website after any changes to these Terms of Use will mean you accept those changes."
                },
            ],
        },
        {
            id: 8,
            idForLink: "Contacts us",
            title: "Contacts us",
            allText: [
                {
                    id: 1,
                    text: "Any questions, comments and requests regarding these Terms should be addressed by writing to us at: 10th avenue, San Jose, San Jose city, 2135, Costa Rica or by sending an e-mail to: info@expectstarlimitada.com"
                },
            ],
        }
    ]
    return (
        <div className="policies-page">
            <PoliciesTitle/>
            <Ticker/>
            <TermsNavLinks/>
            <div className="fr">
                <TermsNavLinlksDT/>
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
            <ContactForm/>
        </div>
    );
};

export default Terms;