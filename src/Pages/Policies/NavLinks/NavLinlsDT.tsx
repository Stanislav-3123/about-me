import {Link} from "react-scroll";

const NavTabsMobile = () => {
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
        {id: 14, title: "Governing law", isActive: true, href: "Governing law"},
    ]
    return (
        <div
            className="w-[285px] h-auto self-start p-8 sticky top-[105px] z-20 flex-wrap flex-col rounded-[20px] justify-start items-start gap-4 hidden sm:inline-flex">
            {links.map(l => (
                <Link className="p-2" key={l.id}
                      to={l.href} smooth={true} offset={-90}>
                    <button className="police_button">
                        <div className="p-2">{l.title}</div>
                    </button>
                </Link>

            ))}

        </div>

    );
};

export default NavTabsMobile;