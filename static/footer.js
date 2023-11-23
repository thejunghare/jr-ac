class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    
        <div class="footer-section section">
            <div class="container">

                <!--<div class="row">

                    <div class="col-xl-6 col-md-5 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Address</h4>
                            <div class="footer-widget-content">
                                <div class="content">
                                    <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                                    <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday) </p>
                                    <p><a href="#">info@example.com </a></p>
                                </div>
                                <div class="footer-social-inline">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Explore</h4>
                            <div class="footer-widget-content">
                                <ul class="column-2">
                                    <li><a href="#">Start here</a></li>
                                    <li><a href="#">Success story</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Information</h4>
                            <div class="footer-widget-content">
                                <ul>
                                    <li><a href="#">Membership</a></li>
                                    <li><a href="#">Purchase guide</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>-->

                <!-- Footer Copyright Start -->
                <div class="row max-mt-20">
                    <div class="col">
                        <p class="copyright">&copy; 2023 loremcodes. <a href="loremcodes.html">All Rights Reserved</a></p>
                    </div>
                </div>
                <!-- Footer Copyright End -->

            </div>
        </div>

        

    

    `;
    }
}
customElements.define("footer-component", Footer);