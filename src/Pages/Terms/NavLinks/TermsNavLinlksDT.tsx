import {Link} from "react-scroll";

const NavTabsMobile = () => {
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