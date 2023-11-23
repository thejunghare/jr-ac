class Counter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Funfact Section Start -->
        <div class="funfact-section section section-padding-top" data-bg-color="#faf8f6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="row row-cols-md-4 row-cols-1 max-mb-n30">
    
                            <!-- Funfact Start -->
                            <div class="col max-mb-30" data-aos="fade-up">
                                <div class="funfact">
                                    <div class="number"><span class="counter">1.926</span></div>
                                    <h6 class="text">Finished Sessions</h6>
                                </div>
                            </div>
                            <!-- Funfact End -->
    
                            <!-- Funfact Start -->
                            <div class="col max-mb-30" data-aos="fade-up">
                                <div class="funfact">
                                    <div class="number"><span class="counter">3.092</span>+</div>
                                    <h6 class="text">Online Enrollment</h6>
                                </div>
                            </div>
                            <!-- Funfact End -->
    
                            <!-- Funfact Start -->
                            <div class="col max-mb-30" data-aos="fade-up">
                                <div class="funfact">
                                    <div class="number"><span class="counter">200</span></div>
                                    <h6 class="text">Subjects Taught</h6>
                                </div>
                            </div>
                            <!-- Funfact End -->
    
                            <!-- Funfact Start -->
                            <div class="col max-mb-30" data-aos="fade-up">
                                <div class="funfact">
                                    <div class="number"><span class="counter">100</span>%</div>
                                    <h6 class="text">Satisfaction rate</h6>
                                </div>
                            </div>
                            <!-- Funfact End -->
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Funfact Section End -->
    `;
    }
}
customElements.define("counter-component", Counter);