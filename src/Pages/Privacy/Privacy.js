import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async"
import logo from '../../logo.svg'

export const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>Adroid - Privacy Policy</title>
                <meta name="description" content="Optimize operations seamlessly through RaaS and SaaS"/>
                <meta property="og:title" content="Adroid - Privacy Policy" data-rh="true" />
                <meta property="og:description" content="Optimize operations seamlessly through RaaS and SaaS" data-rh="true" />
                <meta property="og:image" content={ logo } data-rh="true" />
            </Helmet>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 mb-4 pb-3 d-flex justify-content-between align-items-center">
                        <span>
                            <svg height="2.2em" viewBox="0 0 195 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M74.8738 18.9619C74.8738 30.124 67.6629 37.0936 56.0887 37.0936H45.7122V0.741394H56.0887C67.6629 0.71759 74.8738 7.70938 74.8738 18.9619ZM69.0867 18.9397C69.0867 11.2275 64.0679 6.40179 56.0648 6.40179H51.4087V31.411H56.1332C64.0901 31.411 69.0867 26.6075 69.0867 18.9397Z"
                                    fill="black"/>
                                <path
                                    d="M100.148 37.0936L90.3359 23.0212H85.8595V37.0936H80.1408L80.1185 0.741364H91.4446C98.226 0.741364 103.787 5.95109 103.787 12.4224C103.787 17.1132 100.758 21.1947 96.5764 22.5483L107.179 37.0936H100.148ZM91.5798 18.2859C95.0159 18.3081 97.8872 15.5343 97.8872 12.2875C97.8872 8.90427 94.9713 6.40176 91.5798 6.40176H85.8372V18.2859H91.5798Z"
                                    fill="black"/>
                                <path
                                    d="M109.28 18.9619C109.28 8.5885 117.735 0.109802 128.111 0.109802C138.466 0.109802 146.965 8.5885 146.965 18.9619C146.965 29.2449 138.466 37.6792 128.089 37.6792C117.735 37.6792 109.28 29.2449 109.28 18.9619ZM141.178 18.9175C141.178 11.7242 135.278 5.86065 128.089 5.86065C120.9 5.86065 115.045 11.7242 115.045 18.9175C115.045 26.0664 120.9 31.9077 128.089 31.9077C135.278 31.9061 141.178 26.0664 141.178 18.9175Z"
                                    fill="black"/>
                                <path d="M152.21 0.741364H157.928V37.0936H152.21V0.741364Z" fill="black"/>
                                <path
                                    d="M194.099 18.9619C194.099 30.124 186.888 37.0936 175.314 37.0936H164.937V0.741394H175.314C186.888 0.71759 194.099 7.70938 194.099 18.9619ZM188.312 18.9397C188.312 11.2275 183.293 6.40179 175.29 6.40179H170.632V31.411H175.357C183.315 31.411 188.312 26.6075 188.312 18.9397Z"
                                    fill="black"/>
                                <path
                                    d="M0.345703 45.0614C0.345703 42.4256 2.53934 40.2309 5.17521 40.2309C6.38259 40.242 7.55497 40.7958 8.40602 41.6512L7.78722 42.4827C7.11115 41.7908 6.16466 41.3068 5.13226 41.3068C3.24245 41.3068 1.41628 42.9365 1.41628 45.0598C1.41628 47.1783 3.22496 48.8016 5.14976 48.8016C6.21079 48.8016 7.11592 48.3018 7.79199 47.6385L8.40443 48.4874C7.62337 49.2618 6.56712 49.8664 5.17839 49.8664C2.56798 49.868 0.345703 47.7194 0.345703 45.0614Z"
                                    fill="black"/>
                                <path
                                    d="M18.9527 45.0614C18.9527 42.4018 21.1288 40.2309 23.7822 40.2309C26.4419 40.2309 28.6181 42.4018 28.6181 45.0614C28.6181 47.7035 26.4419 49.868 23.7758 49.868C21.1288 49.868 18.9527 47.7019 18.9527 45.0614ZM27.5443 45.055C27.5443 42.9889 25.8533 41.2957 23.7758 41.2957C21.711 41.2957 20.0248 42.9889 20.0248 45.055C20.0248 47.1148 21.711 48.7969 23.7758 48.7969C25.8533 48.7969 27.5443 47.1148 27.5443 45.055Z"
                                    fill="black"/>
                                <path
                                    d="M45.7091 49.7458L43.0843 46.0849H41.3281V49.7458H40.2671L40.2607 40.3658H43.0366C44.7801 40.3658 46.2038 41.7035 46.2038 43.3571C46.2038 44.5726 45.3702 45.6199 44.2265 45.9643L47.0214 49.7474H45.7091V49.7458ZM43.0716 45.1947C44.1915 45.1947 45.1125 44.3457 45.1125 43.3333C45.1125 42.251 44.1788 41.4131 43.0716 41.4131H41.3218V45.1899L43.0716 45.1947Z"
                                    fill="black"/>
                                <path
                                    d="M58.2664 40.3642H61.2475C63.0673 40.3642 64.5546 41.7258 64.5546 43.3904C64.5546 44.9852 63.0673 46.2833 61.2475 46.2833H59.329V49.7458H58.268V40.3642H58.2664ZM63.4936 43.3793C63.4936 42.297 62.4851 41.4131 61.2475 41.4131H59.329V45.2359L61.2475 45.2423C62.4835 45.247 63.4936 44.4092 63.4936 43.3793Z"
                                    fill="black"/>
                                <path
                                    d="M75.5022 45.0614C75.5022 42.4018 77.6783 40.2309 80.3317 40.2309C82.9914 40.2309 85.1675 42.4018 85.1675 45.0614C85.1675 47.7035 82.9914 49.868 80.3253 49.868C77.6783 49.868 75.5022 47.7019 75.5022 45.0614ZM84.0954 45.055C84.0954 42.9889 82.4044 41.2957 80.3269 41.2957C78.2621 41.2957 76.5759 42.9889 76.5759 45.055C76.5759 47.1148 78.2621 48.7969 80.3269 48.7969C82.4028 48.7969 84.0954 47.1148 84.0954 45.055Z"
                                    fill="black"/>
                                <path
                                    d="M102.259 49.7458L99.6338 46.0849H97.8776V49.7458H96.8166L96.8102 40.3658H99.5861C101.33 40.3658 102.753 41.7035 102.753 43.3571C102.753 44.5726 101.92 45.6199 100.776 45.9643L103.571 49.7474H102.259V49.7458ZM99.6211 45.1947C100.741 45.1947 101.662 44.3457 101.662 43.3333C101.662 42.251 100.728 41.4131 99.6211 41.4131H97.8712V45.1899L99.6211 45.1947Z"
                                    fill="black"/>
                                <path
                                    d="M120.947 48.2034H115.813L115.124 49.7458H113.976L118.322 40.2198H118.438L122.79 49.7458H121.635L120.947 48.2034ZM120.538 47.283L118.386 42.4589L116.227 47.283H120.538Z"
                                    fill="black"/>
                                <path d="M138.742 41.4116H136.017V49.7443H134.956V41.4116H132.22V40.3642H138.742V41.4116Z"
                                      fill="black"/>
                                <path d="M150.186 40.3642H151.247V49.7443H150.186V40.3642Z" fill="black"/>
                                <path
                                    d="M162.89 45.0614C162.89 42.4018 165.066 40.2309 167.719 40.2309C170.379 40.2309 172.555 42.4018 172.555 45.0614C172.555 47.7035 170.379 49.868 167.713 49.868C165.066 49.868 162.89 47.7019 162.89 45.0614ZM171.483 45.055C171.483 42.9889 169.792 41.2957 167.715 41.2957C165.65 41.2957 163.964 42.9889 163.964 45.055C163.964 47.1148 165.65 48.7969 167.715 48.7969C169.791 48.7969 171.483 47.1148 171.483 45.055Z"
                                    fill="black"/>
                                <path
                                    d="M191.757 40.342V49.8918H191.705L185.259 42.7524V49.7585H184.198V40.2214H184.257L190.696 47.356V40.3435H191.757V40.342Z"
                                    fill="black"/>
                                <path
                                    d="M33.8325 37.0412H32.1145C31.0201 31.787 26.1651 27.6024 20.7073 27.6024C15.2367 27.6024 10.3722 31.8045 9.29206 37.0412H7.5836C8.09423 34.0499 9.63726 31.3729 11.8229 29.3972C14.1932 27.2549 17.319 25.9378 20.7073 25.9378C24.0876 25.9378 27.2087 27.2502 29.5773 29.3829C31.7725 31.3602 33.3219 34.0436 33.8325 37.0412Z"
                                    fill="black"/>
                                <path
                                    d="M36.3157 37.0412H34.6247C34.5341 36.4747 34.4068 35.9193 34.2477 35.375C33.7784 33.7722 33.0244 32.2806 32.0477 30.9571C31.1744 29.7765 30.1229 28.7307 28.9362 27.8659C26.6074 26.1663 23.7567 25.1555 20.7073 25.1555C17.6514 25.1555 14.7945 26.1711 12.4624 27.8786C11.2487 28.7656 10.1781 29.8415 9.29525 31.0571C8.03856 32.7868 7.16365 34.8021 6.80255 36.9714L6.77233 37.0412H5.09886C5.59517 33.5628 7.26228 30.4255 9.68021 28.0484C10.1224 27.6136 10.5901 27.2041 11.0801 26.8217C11.8595 26.2139 12.6979 25.6776 13.5823 25.2221C15.7298 24.1161 18.1541 23.4893 20.7073 23.4893C23.2525 23.4893 25.6704 24.1129 27.8131 25.2126C28.6865 25.6601 29.5136 26.187 30.2868 26.7852C30.7831 27.1692 31.2571 27.5802 31.7041 28.0182C34.1395 30.4001 35.8178 33.5485 36.3157 37.0412Z"
                                    fill="black"/>
                                <path
                                    d="M22.0594 7.20948L21.3802 5.59561H20.028L19.7465 6.26369L19.7401 6.28114L12.7535 22.8513L11.683 25.3904C12.437 24.8937 13.2324 24.4557 14.0611 24.0843C16.1052 23.1687 18.3561 22.6577 20.7073 22.6577C23.0489 22.6577 25.2934 23.1655 27.3311 24.0748C28.1504 24.4414 28.9378 24.8714 29.6839 25.3602L22.0594 7.20948ZM20.7089 20.9915C18.7109 20.9915 16.7797 21.3232 14.9694 21.9357L20.6611 8.43454L20.6691 8.4155C21.9369 11.375 23.2397 14.4218 24.2865 16.872C24.2976 16.899 24.3103 16.9275 24.3214 16.9545C25.5416 19.8141 26.4006 21.8405 26.4244 21.9262C26.4244 21.9278 26.4244 21.9278 26.4244 21.9278C24.6205 21.3216 22.6989 20.9915 20.7089 20.9915Z"
                                    fill="black"/>
                                <path d="M26.4244 21.9262L24.3214 16.9545C25.5415 19.8141 26.4021 21.8405 26.4244 21.9262Z"
                                      fill="black"/>
                                <path d="M23.7074 4.76251H23.682L23.0043 3.09628H23.0059L23.7074 4.76251Z" fill="black"/>
                                <path
                                    d="M25.9058 3.63583L25.6784 3.09788L24.6221 0.598541H16.7415L1.39719 37.0428H4.25894C4.3353 36.4795 4.44188 35.9225 4.57709 35.3766C5.07818 33.3422 5.96582 31.4427 7.15569 29.7654C8.07356 28.4721 9.17117 27.3089 10.4104 26.3171L11.6146 23.4623L19.2995 5.25127L19.3058 5.23541L19.5047 4.76251H21.9242L22.2742 5.59562L30.9787 26.2981C32.2036 27.274 33.2901 28.4181 34.2032 29.6892C35.6364 31.6855 36.6402 34.0008 37.0697 36.4858C37.1015 36.6699 37.1302 36.854 37.154 37.0396H40.0158L25.9058 3.63583ZM32.3261 25.2317L23.7074 4.76251H23.682L23.0043 3.09629H18.4118L18.4023 3.1201L18.3975 3.13279L9.06141 25.2555C8.51897 25.7077 8.00356 26.1917 7.51521 26.7027L17.8392 2.26318H23.5277L23.8792 3.09629L24.5823 4.76251L33.78 26.5742C33.3187 26.1013 32.8335 25.6522 32.3261 25.2317Z"
                                    fill="black"/>
                                <path d="M23.7074 4.76251H23.682L23.0043 3.09628H23.0059L23.7074 4.76251Z" fill="black"/>
                                <path
                                    d="M26.4244 21.9262L20.6611 8.43454L20.6691 8.4155C21.9369 11.375 23.2397 14.4218 24.2865 16.872C24.2976 16.899 24.3103 16.9275 24.3214 16.9545C25.5415 19.8141 26.4021 21.8405 26.4244 21.9262Z"
                                    fill="black"/>
                            </svg>
                        </span>

                        <Link to="/">
                            <svg className='me-2' height='1.2em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M148.7 411.3l-144-144C1.563 264.2 0 260.1 0 256s1.562-8.188 4.688-11.31l144-144c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62L54.63 240H496C504.8 240 512 247.2 512 256s-7.156 16-16 16H54.63l116.7 116.7c6.25 6.25 6.25 16.38 0 22.62S154.9 417.6 148.7 411.3z"/></svg>
                            <u>Back to Home</u>
                        </Link>
                    </div>

                    <div className="col-lg-7 mb-80">
                        <h1> Privacy Policy </h1>
                        <p>Last updated: January 21, 2024</p>
                        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                            information when
                            You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
                            and use
                            of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the
                            Privacy
                            Policy Generator.</p>
                        <h2>Interpretation and Definitions</h2>
                        <h3>Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The
                            following
                            definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                        <h3>Definitions</h3>
                        <p>For the purposes of this Privacy Policy:</p>
                        <ul class="check-ul-list">
                            <li>
                                <b>Account</b> means a unique account created for You to access our Service or parts of our Service.
                            </li>
                            <li>
                                <b>Affiliate</b>means an entity that controls, is controlled by or is under common control with a party,
                                where "control" means ownership
                                of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors
                                or other
                                managing authority.
                            </li>
                            <li>
                                <b>Company</b>(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Adroid
                                Corporation, 1713 Thames
                                Circle, Milton, Ontario, L9E 1Y5.
                            </li>
                            <li>
                                <b>Cookies</b> are small files that are placed on Your computer, mobile device or any other device by a
                                website,
                                containing the
                                details of Your browsing history on that website among its many uses.
                            </li>
                            <li><b>Country</b> refers to: Ontario, Canada</li>


                            <li><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital
                                tablet.
                            </li>

                            <li><b>Personal Data</b> is any information that relates to an identified or identifiable individual.</li>
                            <li><b>Service </b> refers to the Website.</li>
                            <li><b>Service Provider</b> means any natural or legal person who processes the data on behalf of the Company.
                                It
                                refers to
                                third-party companies or individuals employed by the Company to facilitate the Service, to provide the
                                Service
                                on behalf
                                of the Company, to perform services related to the Service or to assist the Company in analyzing how the
                                Service
                                is
                                used.</li>
                            <li><b>Third-party Social Media Service</b> refers to any website or any social network website through which a
                                User
                                can
                                log in or
                                create an account to use the Service.</li>
                            <li><b>Usage Data</b> refers to data collected automatically, either generated by the use of the Service or from
                                the
                                Service
                                infrastructure itself (for example, the duration of a page visit).</li>
                            <li><b>Website</b> refers to Adroid Corporation, accessible from https://www.adroid.ai</li>
                            <li><b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on
                                behalf of
                                which such
                                individual is accessing or using the Service, as applicable.
                            </li>
                        </ul>
                        <h2>Collecting and Using Your Personal Data</h2>
                        <h3>Types of Data Collected</h3>
                        <h4>Personal Data</h4>
                        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can
                            be used
                            to contact or identify You. Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul class="check-ul-list">
                            <li>Email address

                            </li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Usage Data</li>
                        </ul>
                        <h4>Usage Data</h4>
                        <p>Usage Data is collected automatically when using the Service.</p>
                        <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser
                            type,
                            browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on
                            those
                            pages, unique device identifiers and other diagnostic data.</p>
                        <p>When You access the Service by or through a mobile device, We may collect certain information automatically,
                            including,
                            but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your
                            mobile
                            device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and
                            other
                            diagnostic data.</p>
                        <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the
                            Service by
                            or through a mobile device.</p>
                        <h4>Information from Third-Party Social Media Services</h4>
                        <p>The Company allows You to create an account and log in to use the Service through the following Third-party
                            Social Media
                            Services:</p>
                        <ul class="check-ul-list">
                            <li>Google</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                        <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may
                            collect
                            Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your
                            name, Your
                            email address, Your activities or Your contact list associated with that account.</p>
                        <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social
                            Media
                            Service's account. If You choose to provide such information and Personal Data, during registration or
                            otherwise, You
                            are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                        </p>
                        <h4>Tracking Technologies and Cookies</h4>
                        <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
                            information.
                            Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and
                            analyze
                            Our Service. The technologies We use may include:</p>
                        <ul class="check-ul-list">
                            <li><b>Cookies or Browser Cookies.</b> A cookie is a small file placed on Your Device. You can instruct Your
                                browser to
                                refuse all
                                Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be
                                able to use
                                some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our
                                Service may
                                use Cookies.</li>
                            <li><b>Web Beacons.</b> Certain sections of our Service and our emails may contain small electronic files known
                                as web
                                beacons
                                (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to
                                count users
                                who have visited those pages or opened an email and for other related website statistics (for example,
                                recording the
                                popularity of a certain section and verifying system and server integrity).</li>
                        </ul>
                        <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile
                            device
                            when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more
                            about
                            cookies on TermsFeed website article.</p>
                        <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                        <ul class="check-ul-list">
                            <li><b>Necessary / Essential Cookies</b></li>
                            <p>Type: Session Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable
                                You to use
                                some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without
                                these
                                Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide
                                You with
                                those services.</p>
                        </ul>
                        <ul class="check-ul-list">
                            <li><b>Cookies Policy / Notice Acceptance Cookies</b></li>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        </ul>

                        <ul class="check-ul-list">
                            <li><b>Functionality Cookies</b></li>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
                                your login
                                details or language preference. The purpose of these Cookies is to provide You with a more personal
                                experience and to
                                avoid You having to re-enter your preferences every time You use the Website.</p>
                        </ul>

                        <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy
                            or the
                            Cookies section of our Privacy Policy.</p>
                        <h4>Use of Your Personal Data</h4>
                        <p>The Company may use Personal Data for the following purposes:</p>
                        <ul class="check-ul-list">
                            <li><b>To provide and maintain our Service,</b> including to monitor the usage of our Service.</li>
                            <li><b>To manage Your Account:</b> to manage Your registration as a user of the Service. The Personal Data You
                                provide
                                can give You
                                access to different functionalities of the Service that are available to You as a registered user.</li>
                            <li><b>For the performance of a contract:</b> the development, compliance and undertaking of the purchase
                                contract for
                                the
                                products, items or services You have purchased or of any other contract with Us through the Service.</li>
                            <li><b>To contact You:</b> To contact You by email, telephone calls, SMS, or other equivalent forms of
                                electronic
                                communication,
                                such as a mobile application's push notifications regarding updates or informative communications related to
                                the
                                functionalities, products or contracted services, including the security updates, when necessary or
                                reasonable for their
                                implementation.</li>
                            <li><b>To provide You</b> with news, special offers and general information about other goods, services and
                                events
                                which we offer
                                that are similar to those that you have already purchased or enquired about unless You have opted not to
                                receive such
                                information.</li>
                            <li><b>To manage Your requests:</b> To attend and manage Your requests to Us.</li>
                            <li><b>For business transfers:</b> We may use Your information to evaluate or conduct a merger, divestiture,
                                restructuring,
                                reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going
                                concern or as
                                part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service
                                users is
                                among the assets transferred.</li>
                            <li><b>For other purposes:</b> We may use Your information for other purposes, such as data analysis,
                                identifying usage
                                trends,
                                determining the effectiveness of our promotional campaigns and to evaluate and improve our Service,
                                products, services,
                                marketing and your experience.</li>
                        </ul>
                        <p>We may share Your personal information in the following situations:</p>
                        <ul class="check-ul-list">
                            <li><b>With Service Providers:</b> We may share Your personal information with Service Providers to monitor and
                                analyze
                                the use of
                                our Service, to contact You.</li>
                            <li><b>For business transfers:</b> We may share or transfer Your personal information in connection with, or
                                during
                                negotiations
                                of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to
                                another
                                company.</li>
                            <li><b>With Affiliates:</b> We may share Your information with Our affiliates, in which case we will require
                                those
                                affiliates to
                                honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture
                                partners or
                                other companies that We control or that are under common control with Us.</li>
                            <li><b>With business partners:</b> We may share Your information with Our business partners to offer You certain
                                products, services
                                or promotions.</li>
                            <li><b>With other users:</b> when You share personal information or otherwise interact in the public areas with
                                other
                                users, such
                                information may be viewed by all users and may be publicly distributed outside. If You interact with other
                                users or
                                register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service
                                may see Your
                                name, profile, pictures and description of Your activity. Similarly, other users will be able to view
                                descriptions of
                                Your activity, communicate with You and view Your profile.</li>
                            <li><b>With Your consent:</b> We may disclose Your personal information for any other purpose with Your consent.
                            </li>
                        </ul>
                        <h3>Retention of Your Personal Data</h3>
                        <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
                            Privacy
                            Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations
                            (for
                            example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce
                            our legal
                            agreements and policies.</p>
                        <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
                            shorter
                            period of time, except when this data is used to strengthen the security or to improve the functionality of Our
                            Service,
                            or We are legally obligated to retain this data for longer time periods.</p>
                        <h3>Transfer of Your Personal Data</h3>
                        <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other
                            places where
                            the parties involved in the processing are located. It means that this information may be transferred to — and
                            maintained on — computers located outside of Your state, province, country or other governmental jurisdiction
                            where the
                            data protection laws may differ than those from Your jurisdiction.</p>
                        <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to
                            that
                            transfer.</p>
                        <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
                            accordance with
                            this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless
                            there
                            are adequate controls in place including the security of Your data and other personal information.</p>
                        <h3>Delete Your Personal Data</h3>
                        <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about
                            You.</p>
                        <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                        <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and
                            visiting the account settings section that allows you to manage Your personal information. You may also contact
                            Us to
                            request access to, correct, or delete any personal information that You have provided to Us.</p>
                        <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful
                            basis to
                            do so.</p>
                        <h2>Disclosure of Your Personal Data</h2>
                        <h3>Business Transactions</h3>
                        <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will
                            provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                        <h3>Law enforcement</h3>
                        <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by
                            law or
                            in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                        <h3>Other legal requirements</h3>
                        <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                        <ul class="check-ul-list">
                            <li>Comply with a legal obligation</li>
                            <li>Protect and defend the rights or property of the Company</li>
                            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li>Protect the personal safety of Users of the Service or the public</li>
                            <li>Protect against legal liability</li>
                        </ul>
                        <h3>Security of Your Personal Data</h3>
                        <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the
                            Internet, or
                            method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect
                            Your
                            Personal Data, We cannot guarantee its absolute security.</p>
                        <h3>Children's Privacy</h3>
                        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
                            information
                            from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided
                            Us with
                            Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the
                            age of
                            13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                        <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent
                            from a
                            parent, We may require Your parent's consent before We collect and use that information.</p>
                        <h3>Links to Other Websites</h3>
                        <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
                            You
                            will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site
                            You
                            visit.</p>
                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third
                            party
                            sites or services.</p>
                        <h3>Changes to this Privacy Policy</h3>
                        <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
                            Policy
                            on this page.</p>
                        <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective
                            and
                            update the "Last updated" date at the top of this Privacy Policy.</p>
                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
                            effective
                            when they are posted on this page.</p>
                        <h3>Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                        <ul class="check-ul-list">
                            <li>By email: <a href="mailto: info@adroid.ai"><u>info@adroid.ai</u></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Privacy
