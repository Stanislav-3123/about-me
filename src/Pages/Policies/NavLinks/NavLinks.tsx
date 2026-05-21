import {Link} from "react-scroll";

const NavLinks = () => {
    const links = [
        {id: 3, title: "Legal Basis", isActive: true, href: "Legal Basis"},
        {id: 4, title: "Data collocation and storage", isActive: true, href: "Data collocation and storage"},
        {id: 5, title: "What information we collect", isActive: true, href: "What information we collect"},
        {
            id: 6,
            title: "How long do we keep your information",
            isActive: true,
            href: "How long do we keep your information"
        },
        {
            id: 7,
            title: "Information we share with employees and partners",
            isActive: true,
            href: "Information we share with employees and partners"
        },
        {id: 8, title: "Using cookies", isActive: true, href: "Using cookies"},
        {id: 9, title: "Your rights", isActive: true, href: "Your rights"},
        {id: 10, title: "Links to third party website", isActive: true, href: "Links to third party website"},
        {id: 11, title: "Automated decision making", isActive: true, href: "Automated decision making"},
        {id: 12, title: "Changes to the privacy policy", isActive: true, href: "Changes to the privacy policy"},
        {id: 13, title: "Further information", isActive: true, href: "Further information"},
        {id: 14, title: "Governing law", isActive: true, href: "Governing law"},]

    return (
        <div className="w-full sm:hidden overflow-y-hidden sticky top-[64px]">
            <div className="inline-flex px-4 py-2.5 h-[100px]">
                <div
                    className="h-20 shadow self-stretch sm:hidden px-4 z-[3] overflow-y-hidden whitespace-nowrap  bg-white rounded-[30px] justify-start items-center gap-4 fr">
                    {links.map(l => (
                        <Link className="w-full"  offset={-180} smooth={true} to={l.href}><button className="police_button">{l.title}</button></Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NavLinks;