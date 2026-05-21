import {Link} from "react-scroll";

const TermsNavLinks = () => {
    const links = [
        {id: 1, title: "Terms and Conditions", isActive: true, href: "Terms and Conditions"},
        {id: 2, title: "About us", isActive: true, href: "About us"},
        {id: 3, title: "Conditions of use", isActive: true, href: "Conditions of use"},
        {id: 4, title: "Intellectual property", isActive: true, href: "Intellectual property"},
        {id: 5, title: "Legal terms", isActive: true, href: "Legal terms"},
        {id: 6,title: "Indemnification and limitation of liability",isActive: true,href: "Indemnification and limitation of liability" },
        {id: 7, title: "Modifications", isActive: true,href: "Modifications"},
        {id: 8, title: "Contacts us", isActive: true, href: "Contacts us"},
    ]

    return (
        <div className="w-full sm:hidden overflow-y-hidden sticky top-[64px]">
            <div className="inline-flex px-4 py-2.5  h-[100px] ">
                <div
                    className="h-20 shadow self-stretch sm:hidden px-4 z-[3] overflow-y-hidden whitespace-nowrap  bg-white rounded-[30px] justify-start items-center gap-4 fr">
                    {links.map(l => (
                        <Link className="w-full" offset={-180} smooth={true} to={l.href}><button className="police_button">{l.title}</button></Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TermsNavLinks;