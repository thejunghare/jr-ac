class Event extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Event Section Start -->
        <div class="event-section section position-relative section-padding">
            <div class="container">
                <!-- Section Title Start -->
                <div class="section-title text-center" data-aos="fade-up">
                    <span class="sub-title">Get in contact now</span>
                    <h2 class="title fz-48">Upcoming <span>Events</span></h2>
                </div>
                <!-- Section Title End -->
    
                <div class="row row-cols-lg-2 row-cols-1 max-mb-n30">
    
                    <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Online
                                    </div>
                                    <h3 class="title">Last Date For Registration</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">10</div>
                                        <div class="event-date-month">Dec</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="https://docs.google.com/forms/d/e/1FAIpQLScTAx5_XHYNagBzA1Cwtd-PhxoXIA7zSWFn-bUtO-epGWlscQ/viewform?usp=sf_link">Get
                                            Registreted</a>
                                       <!-- <a class="btn btn-primary btn-hover-secondary btn-xs" href="event-details.html">Get
                                            Registreted</a>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Online
                                    </div>
                                    <h3 class="title">Batches Start's</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">15</div>
                                        <div class="event-date-month">Dec</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="#">Get
                                            Registreted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                   <!--  <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Hamburg, Germany
                                    </div>
                                    <h3 class="title">International Art Fair 2022</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">23</div>
                                        <div class="event-date-month">Nov</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="event-details.html">Get
                                            Registreted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Illinois, US
                                    </div>
                                    <h3 class="title">Street Performance: Call for Artist</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">15</div>
                                        <div class="event-date-month">Dec</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="event-details.html">Get
                                            Registreted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Illinois, US
                                    </div>
                                    <h3 class="title">Consumer Food Safety Education Conference</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">22</div>
                                        <div class="event-date-month">JUL</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="event-details.html">Get
                                            Registreted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col max-mb-30" data-aos="fade-up">
                        <div class="event-list-box">
                            <div class="event-caption">
                                <div class="left-box">
                                    <div class="event-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        Dubai
                                    </div>
                                    <h3 class="title">How meditation improve your mental health?</h3>
                                </div>
                                <div class="right-box">
                                    <div class="event-date">
                                        <div class="event-date-day">12</div>
                                        <div class="event-date-month">Aug</div>
                                    </div>
                                    <div class="event-button">
                                        <a class="btn btn-primary btn-hover-secondary btn-xs" href="event-details.html">Get
                                            Registreted</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
    
                </div>
    
                <div class="row max-mt-70">
                    <div class="text-center col-lg-7 mx-auto">
                        <a class="link link-lg" href="#">Excited about our event? <mark>View all events <i
                                    class="fas fa-arrow-right"></i></mark></a><!--event.html-->
                    </div>
                </div>
    
    
            </div>
    
            <!-- Section Bottom Shape Start -->
            <div class="section-bottom-shape-two">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="315">
                    <path class="elementor-shape-fill" d="M 50 0 S75 0 100 100 L100 0"></path>
                </svg>
            </div>
            <!-- Section Bottom Shape End -->
        </div>
        <!-- Event Section End -->
    `;
    }
}
customElements.define("event-component", Event);