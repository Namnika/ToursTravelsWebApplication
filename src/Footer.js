import React from "react";

function Footer() {
    return (
        <>
            <footer class="bg-black bg-opacity-10 d-flex flex-column align-items-center justify-content-center px-5 mt-5 pb-5 pt-2">
                {/* navbar logo  */}
                <a href="#logo" class="py-4">
                    <img src="images/brand-logo.png" width="100" height="30" alt="logo" />
                </a>
                <p class="text-muted">
                    Discover the world with us, where every journey is crafted with care
                    and passion. From unforgettable destinations to seamless travel
                    experiences, we turn your wanderlust into reality!
                </p>
                <ul class="d-flex gap-3">
                    <a href="#x" class="text-black">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#facebook" class="text-black">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#instagram" class="text-black">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#youtube" class="text-black">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#pinterest" class="text-black">
                        <i class="fa-brands fa-pinterest"></i>
                    </a>
                </ul>
                <p>Designed By Namnika Janbandhu</p>
                <small>&copy; Copyright | All Rights Reserved</small>
            </footer>
        </>
    );
}

export default Footer;
