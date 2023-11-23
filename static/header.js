class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
    <!-- Header Section Start -->
    <div class="header-section header-transparent sticky-header section">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">

                    <!-- Header Logo Start -->
                    <div class="col-xl-3 col-auto">
                        <div class="header-logo">
                            <a href="index.html">
                                <img class="dark-logo" src="assets/images/jr1.png" alt="Learts Logo">
                                <img class="light-logo" src="assets/images/logo.pn" alt="Learts Logo">
                            </a>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Main Menu Start -->
                    <div class="col d-none d-xl-block position-static">
                        <nav class="site-main-menu menu-hover-1">
                            <ul>
                                <!--<li class="has-children position-static">
                                    <a href="#"><span class="menu-text">Home</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>

                                    <ul class="mega-menu">
                                        <li>
                                            <ul>
                                                <li><a href="index.html"><span class="menu-text">MaxCoach Education
                                                            <span class="badge">Hot</span></span></a></li>
                                                <li><a href="index-2.html"><span class="menu-text">Course
                                                            Portal</span></a></li>
                                                <li><a href="index-3.html"><span class="menu-text">Distant Learning
                                                            <span class="badge">Hot</span></span></a></li>
                                                <li><a href="index-4.html"><span class="menu-text">Multimedia
                                                            Pedagogy</span></a></li>
                                                <li><a href="index-5.html"><span class="menu-text">Modern
                                                            Schooling</span></a></li>
                                                <li><a href="index-6.html"><span class="menu-text">Remote
                                                            Training</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="index-7.html"><span class="menu-text">Health
                                                            Coaching</span></a></li>
                                                <li><a href="index-8.html"><span class="menu-text">Gym
                                                            Coaching</span></a></li>
                                                <li><a href="index-9.html"><span class="menu-text">Business</span></a>
                                                </li>
                                                <li><a href="index-10.html"><span class="menu-text">Artist <span
                                                                class="badge primary">New</span></span></a></li>
                                                <li><a href="index-11.html"><span class="menu-text">Kitchen Coach <span
                                                                class="badge primary">New</span></span></a></li>
                                                <li><a href="index-12.html"><span class="menu-text">Motivation <span
                                                                class="badge primary">New</span></span></a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-50">
                                            <ul>
                                                <li><a href="#"><img src="assets/images/menu/mega-menu.jpg"
                                                            alt="menu-image"></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>-->
                                <li><a href="index.html"><span class="menu-text">Home</span></a></li>
                                <li class="has-children">
                                    <a href="#"><span class="menu-text">About Us</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                    <ul class="sub-menu">
                                        <!-- <li><a href="start-here.html"><span class="menu-text">Start Here</span></a></li>
                                        <li><a href="success-story.html"><span class="menu-text">Success
                                                    Story</span></a></li>
                                        <li><a href="about-me.html"><span class="menu-text">About me</span></a></li> 
                                        <li><a href="about-us-1.html"><span class="menu-text">About us </span></a>
                                        </li>
                                         <li><a href="about-us-2.html"><span class="menu-text">About us 02</span></a>
                                        </li>-->
                                        <li><a href="about-us-3.html"><span class="menu-text">About us</span></a>
                                        </li>
                                        <!-- <li><a href="contact-me.html"><span class="menu-text">Contact me</span></a></li> -->
                                        <li><a href="contact-us.html"><span class="menu-text">Contact us</span></a></li>
                                        <!-- <li><a href="purchase-guide.html"><span class="menu-text">Purchase
                                                    Guide</span></a></li>
                                        <li><a href="privacy-policy.html"><span class="menu-text">Privacy
                                                    Policy</span></a></li>
                                        <li><a href="terms-of-service.html"><span class="menu-text">Terms of
                                                    Service</span></a></li> -->
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#"><span class="menu-text">Courses</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                    <ul class="sub-menu">
                                      <!--   <li><a href="courses-grid-1.html"><span class="menu-text">Courses Grid
                                                    01</span></a></li>
                                        <li><a href="courses-grid-2.html"><span class="menu-text">Courses Grid
                                                    02</span></a></li> -->
                                        <li><a href="#"><span class="menu-text">Courses</span></a>
                                        </li>
                                      <!--  <li><a href="courses-grid-3.html"><span class="menu-text">Courses</span></a>
                                        </li>-->
                                       <!--  <li><a href="membership-levels.html"><span class="menu-text">Membership
                                                    Levels</span></a></li>
                                        <li><a href="become-a-teacher.html"><span class="menu-text">Become a
                                                    Teacher</span></a></li>
                                        <li><a href="#"><span class="menu-text">Profile</span></a></li>
                                        <li><a href="checkout.html"><span class="menu-text">Checkout</span></a></li>
                                        <li class="has-children">
                                            <a href="course-details-sticky-feature-bar.html"><span
                                                    class="menu-text">Single Layout</span></a>
                                            <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                            <ul class="sub-menu">
                                                <li><a href="course-details-free.html"><span class="menu-text">Free
                                                            Course</span></a></li>
                                                <li><a href="course-details-sticky-feature-bar.html"><span
                                                            class="menu-text">Sticky Features Bar</span></a></li>
                                                <li><a href="course-details-standard-sidebar.html"><span
                                                            class="menu-text">Standard Sidebar</span></a></li>
                                                <li><a href="course-details-no-sidebar.html"><span class="menu-text">No
                                                            Sidebar</span></a></li>
                                            </ul> -->
                                        </li>

                                    </ul>
                                </li>
                                <!--  <li class="has-children">
                                    <a href="#"><span class="menu-text">Event</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                    <ul class="sub-menu">
                                        <li><a href="event.html"><span class="menu-text">Event</span></a></li>
                                        <li><a href="zoom-meetings.html"><span class="menu-text">Zoom Meetings</span></a></li>
                                        <li><a href="event-details.html"><span class="menu-text">Event Details</span></a></li>
                                        <li><a href="zoom-event-details.html"><span class="menu-text">Zoom Meeting Details</span></a></li>
                                    </ul>
                                </li> -->
                                <!--<li class="has-children">
                                    <a href="#"><span class="menu-text">Blog</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                    <ul class="sub-menu">
                                        <li><a href="blog-grid.html"><span class="menu-text">Blog Grid</span></a></li>
                                        <li><a href="blog-masonry.html"><span class="menu-text">Blog Masonry</span></a>
                                        </li>
                                        <li><a href="blog-classic.html"><span class="menu-text">Blog Classic</span></a>
                                        </li>
                                        <li><a href="blog-list.html"><span class="menu-text">Blog List</span></a></li>
                                    </ul>
                                </li>-->
                                <!--<li class="has-children">
                                    <a href="#"><span class="menu-text">Shop</span></a>
                                    <span class="menu-toggle"><i class="fas fa-angle-down"></i></span>
                                    <ul class="sub-menu">
                                        <li><a href="shop.html"><span class="menu-text">Shop Left Sidebar</span></a></li>
                                        <li><a href="shop-right-sidebar.html"><span class="menu-text">Shop Right Sidebar</span></a></li>
                                        <li><a href="shopping-cart.html"><span class="menu-text">Cart</span></a></li>
                                        <li><a href="shopping-cart-empty.html"><span class="menu-text">Cart Empty</span></a></li>
                                        <li><a href="wishlist.html"><span class="menu-text">Wishlist</span></a></li>
                                        <li><a href="product-details.html"><span class="menu-text">Single Product</span></a></li>
                                        <li><a href="my-account.html"><span class="menu-text">My Account</span></a></li>
                                        <li><a href="login-register.html"><span class="menu-text">Login Register</span></a></li>
                                    </ul>
                                </li>-->
                            </ul>
                        </nav>
                    </div>
                    <!-- Header Main Menu End -->

                    <div class="col-xl-3 col-auto">
                        <div class="header-right">
                            <div class="inner">

                                <div class="header-cart">

                                    <a class="header-cart-btn" href="shopping-cart.html"><span
                                            class="cart-count">2</span><i class="fas fa-shopping-basket"></i></a>

                                    <div class="header-mini-cart">
                                        <div class="inner">

                                            <div class="mini-cart-products">
                                                <div class="mini-cart-product">
                                                    <a href="#" class="thumb"><img
                                                            src="assets/images/products/mini-cart/product-1.jpg"
                                                            alt=""></a>
                                                    <div class="content">
                                                        <a href="#" class="title">Online Student: Strategies for
                                                            Effective Learning</a>
                                                        <span class="quantity">1 x <span
                                                                class="price">$67.00</span></span>
                                                    </div>
                                                    <a href="#" class="remove"><i class="fas fa-times"></i></a>
                                                </div>
                                                <div class="mini-cart-product">
                                                    <a href="#" class="thumb"><img
                                                            src="assets/images/products/mini-cart/product-2.jpg"
                                                            alt=""></a>
                                                    <div class="content">
                                                        <a href="#" class="title">Principles of Business
                                                            Administration</a>
                                                        <span class="quantity">1 x <span
                                                                class="price">$52.00</span></span>
                                                    </div>
                                                    <a href="#" class="remove"><i class="fas fa-times"></i></a>
                                                </div>
                                            </div>

                                            <div class="mini-cart-footer">
                                                <div class="mini-cart-total">
                                                    <b>Total:</b>
                                                    <span class="amount">$119.00</span>
                                                </div>
                                                <div class="mini-cart-buttons">
                                                    <a href="shopping-cart.html"
                                                        class="btn btn-primary btn-hover-secondary">View Cart</a>
                                                    <a href="checkout.html"
                                                        class="btn btn-primary btn-hover-secondary">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="header-login">
                                    <a href="profile.html"><i class="far fa-user-circle"></i></a>
                                </div>

                                <div class="header-search">
                                    <button class="header-search-toggle"><i class="fas fa-search"></i></button>
                                    <div class="header-search-form light">
                                        <form action="#">
                                            <input type="text" placeholder="Search...">
                                            <button><i class="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>


                                <!-- Header Mobile Menu Toggle Start -->
                                <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                    <button class="toggle">
                                        <i class="icon-top"></i>
                                        <i class="icon-middle"></i>
                                        <i class="icon-bottom"></i>
                                    </button>
                                </div>
                                <!-- Header Mobile Menu Toggle End -->
                            </div>
                        </div>
                    </div>
                    <!-- Header Right End -->

                </div>
            </div>
        </div>
    </div>
    <!-- Header Section End -->
    `;
    }
}
customElements.define("header-component", Header);
