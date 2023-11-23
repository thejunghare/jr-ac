class Courses extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="section section-padding" data-bg-color="#FAF8F6">
        <div class="container">

            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">Choose where you'd like to begin</span>
                <h2 class="title fz-48">Latest Featured <span>Courses</span></h2>
            </div>
            <!-- Section Title End -->

            <!-- Course Wrapper Start -->
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">

                <!-- Course Start -->
                <div class="col max-mb-30" data-aos="fade-up">
                    <div class="course-4">
                        <div class="thumbnail">
                            <a href="course-details-standard-sidebar.html" class="image"><img src="assets/images/courses/frontend.jpg" alt="Course Image"></a>
                        </div>
                        <div class="info">
                            <span class="price">$84<span>.00</span></span>
                            <div class="course-instructor">
                                <div class="instructor-avatar">
                                    <img src="assets/images/courses/course-avatar.jpg" alt="">
                                </div>
                                <span class="instructor-name">Prasad Junghare</span>
                            </div>
                            <h3 class="title"><a href="course-details-standard-sidebar.html">Learning to Write as a Professional Front End Dev</a></h3>
                            <ul class="meta">
                                <li><i class="fas fa-file-alt"></i>20 Lessons</li>
                                <li><i class="fas fa-user-alt"></i>5 Students Pre-batch</li>
                            </ul>
                        </div>
                    </div>z
                </div>
                <!-- Course End -->

                <!-- Course Start -->
                <div class="col max-mb-30" data-aos="fade-up">
                    <div class="course-4">
                        <div class="thumbnail">
                            <a href="course-details-standard-sidebar.html" class="image"><img src="assets/images/courses/github.jpg" alt="Course Image"></a>
                        </div>
                        <div class="info">
                            <span class="price">Free</span>
                            <div class="course-instructor">
                                <div class="instructor-avatar">
                                    <img src="assets/images/courses/course-avatar.jpg" alt="">
                                </div>
                                <span class="instructor-name">Prasad Junghare</span>
                            </div>
                            <h3 class="title"><a href="course-details-standard-sidebar.html">"Mastering GitHub: Open Courses for Enthusiasts"</a></h3>
                            <ul class="meta">
                                <li><i class="fas fa-file-alt"></i>23 Lessons</li>
                                <li><i class="fas fa-user-alt"></i>5 Students Pre-batch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Course End -->

                <!-- Course Start -->
                <div class="col max-mb-30" data-aos="fade-up">
                    <div class="course-4">
                        <div class="thumbnail">
                            <a href="course-details-standard-sidebar.html" class="image"><img src="assets/images/courses/js.png" alt="Course Image"></a>
                        </div>
                        <div class="info">
                            <span class="price">$36<span>.00</span></span>
                            <div class="course-instructor">
                                <div class="instructor-avatar">
                                    <img src="assets/images/courses/course-avatar.jpg" alt="">
                                </div>
                                <span class="instructor-name">Prasad Junghare</span>
                            </div>
                            <h3 class="title"><a href="course-details-standard-sidebar.html">Open Programming Courses for Everyone: Javascript</a></h3>
                            <ul class="meta">
                                <li><i class="fas fa-file-alt"></i>20 Lessons</li>
                                <li><i class="fas fa-user-alt"></i>5 Students Pre-batch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Course End -->

              

            </div>
            <!-- Course Wrapper End -->

            <div class="row max-mt-40">
                <div class="text-center col-lg-7 mx-auto">
                    <a href="#" class="btn btn-primary btn-hover-secondary"> View all courses <i class="fas fa-arrow-right ms-3"></i></a>
                   <!-- <a href="courses-grid-1.html" class="btn btn-primary btn-hover-secondary"> View all courses <i class="fas fa-arrow-right ms-3"></i></a>-->
                </div>
            </div>

        </div>

        <!-- Section Bottom Shape Start -->
        <div class="section-bottom-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
        <!-- Section Bottom Shape End -->
    </div>
    <!-- Course Section End -->
    `;
    }
}
customElements.define("courses-component", Courses);
