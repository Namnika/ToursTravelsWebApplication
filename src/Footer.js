import React from "react";

export const FooterLinks = [
    {
        id: 1,
        footerLink: "x",
        footerIcon: <i className="fa-brands fa-x-twitter"></i>,
    },
    {
        id: 2,
        footerLink: "facebook",
        footerIcon: <i className="fa-brands fa-facebook"></i>,
    },
    {
        id: 3,
        footerLink: "instagram",
        footerIcon: <i className="fa-brands fa-instagram"></i>,
    },
    {
        id: 4,
        footerLink: "youtube",
        footerIcon: <i className="fa-brands fa-youtube"></i>,
    },
    {
        id: 5,
        footerLink: "pinterest",
        footerIcon: <i className="fa-brands fa-pinterest"></i>,
    },
];

function Footer({ Logo }) {
    return (
        <>
            <footer className="bg-black bg-opacity-10 d-flex flex-column align-items-center justify-content-center px-5 mt-5 pb-5 pt-2">
                {/* navbar logo  */}
                <a href="#logo" className="py-4">
                    <img src={Logo} width="100" height="30" alt="logo" />
                </a>
                <p className="text-muted">
                    Discover the world with us, where every journey is crafted with care
                    and passion. From unforgettable destinations to seamless travel
                    experiences, we turn your wanderlust into reality!
                </p>
                <ul className="d-flex gap-3">
                    {FooterLinks.map((footer, index) => {
                        return (
                            <a
                                key={index}
                                id={footer.id}
                                href={`#${footer.footerLink}`}
                                className="text-black"
                            >
                                {footer.footerIcon}
                            </a>
                      );
                  })}
                </ul>
                <p>Designed By Namnika Janbandhu</p>
                <small>&copy; Copyright | All Rights Reserved</small>
            </footer>
        </>
    );
}

export default Footer;
