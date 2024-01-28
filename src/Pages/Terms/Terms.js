import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async"
import logo from '../../logo.svg'
export const Terms = () => {
    return (

        <>
            <Helmet>
                <title>Adroid - Terms and Conditions</title>
                <meta name="description" content="Optimize operations seamlessly through RaaS and SaaS"/>
                <meta property="og:title" content="Adroid - Terms and Conditions" data-rh="true" />
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
                        <h1>Terms and Conditions</h1>
                        <p>Welcome to Adroid Corporation!</p>
                        <p>These terms and conditions outline the rules and regulations for the use of Adroid Corporation's
                            Website, located
                            at <a href="/"><u>www.adroid.ai</u></a>.</p>
                        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use
                            Adroid
                            Corporation if
                            you do not agree to take all of the terms and conditions stated on this page.</p>
                        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                            Notice and all
                            Agreements: "Client", "You" and "Your" refers to you, the person log on this website and
                            compliant to the
                            Company's
                            terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
                            "Party",
                            "Parties", or
                            "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and
                            consideration of
                            payment
                            necessary to undertake the process of our assistance to the Client in the most appropriate
                            manner for the
                            express
                            purpose of meeting the Client's needs in respect of provision of the Company's stated services,
                            in accordance
                            with and
                            subject to, prevailing law of ca. Any use of the above terminology or other words in the
                            singular, plural,
                            capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to
                            same.</p>
                        <h3>Cookies</h3>
                        <p>We employ the use of cookies. By accessing Adroid Corporation, you agreed to use cookies in
                            agreement with the
                            Adroid
                            Corporation's Privacy Policy.</p>
                        <p>Most interactive websites use cookies to let us retrieve the user's details for each visit.
                            Cookies are used by
                            our
                            website to enable the functionality of certain areas to make it easier for people visiting our
                            website. Some of
                            our
                            affiliate/advertising partners may also use cookies.</p>
                        <h3>License</h3>
                        <p>Unless otherwise stated, Adroid Corporation and/or its licensors own the intellectual property
                            rights for all
                            material
                            on Adroid Corporation. All intellectual property rights are reserved. You may access this from
                            Adroid
                            Corporation for
                            your own personal use subjected to restrictions set in these terms and conditions.</p>

                        <p>You must not:</p>
                        <ul class="check-ul-list">
                            <li>Republish material from Adroid Corporation</li>
                            <li>Sell, rent or sub-license material from Adroid Corporation</li>
                            <li>Reproduce, duplicate or copy material from Adroid Corporation</li>
                            <li>Redistribute content from Adroid Corporation</li>
                        </ul>
                        <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the
                            help of the Free
                            Terms and
                            Conditions Generator.</p>
                        <p>Parts of this website offer an opportunity for users to post and exchange opinions and
                            information in certain
                            areas of
                            the website. Adroid Corporation does not filter, edit, publish or review Comments prior to their
                            presence on the
                            website. Comments do not reflect the views and opinions of Adroid Corporation,its agents and/or
                            affiliates.
                            Comments
                            reflect the views and opinions of the person who post their views and opinions. To the extent
                            permitted by
                            applicable
                            laws, Adroid Corporation shall not be liable for the Comments or for any liability, damages or
                            expenses caused
                            and/or
                            suffered as a result of any use of and/or posting of and/or appearance of the Comments on this
                            website.</p>
                        <p>Adroid Corporation reserves the right to monitor all Comments and to remove any Comments which
                            can be considered
                            inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                        <p>You warrant and represent that:</p>
                        <ul class="check-ul-list">
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and
                                consents to do so;
                            </li>
                            <li>The Comments do not invade any intellectual property right, including without limitation
                                copyright, patent
                                or trademark
                                of any third party;
                            </li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise
                                unlawful material
                                which is an
                                invasion of privacy
                            </li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial
                                activities or
                                unlawful
                                activity.
                            </li>
                        </ul>
                        <p>
                            You hereby grant Adroid Corporation a non-exclusive license to use, reproduce, edit and
                            authorize others to
                            use,
                            reproduce and edit any of your Comments in any and all forms, formats or media.
                        </p>
                        <h3>Hyperlinking to our Content</h3>
                        <p>The following organizations may link to our Website without prior written approval:</p>
                        <ul class="check-ul-list">
                            <li>Government agencies;</li>
                            <li>Search engines;</li>
                            <li>News organizations;</li>
                            <li>Online directory distributors may link to our Website in the same manner as they hyperlink
                                to the Websites
                                of other
                                listed businesses; and
                            </li>
                            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity
                                shopping malls, and
                                charity
                                fundraising groups which may not hyperlink to our Web site.
                            </li>
                        </ul>
                        <p>These organizations may link to our home page, to publications or to other Website information so
                            long as the
                            link: (a)
                            is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of
                            the linking
                            party and
                            its products and/or services; and (c) fits within the context of the linking party's site.</p>
                        <p>We may consider and approve other link requests from the following types of organizations:</p>
                        <ul class="check-ul-list">
                            <li>commonly-known consumer and/or business information sources;</li>
                            <li>dot.com community sites;</li>
                            <li>associations or other groups representing charities;</li>
                            <li>online directory distributors;</li>
                            <li>internet portals;</li>
                            <li>accounting, law and consulting firms; and</li>
                            <li>educational institutions and trade associations.</li>
                        </ul>
                        <p>We will approve link requests from these organizations if we decide that: (a) the link would not
                            make us look
                            unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any
                            negative
                            records with
                            us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Adroid
                            Corporation;
                            and (d)
                            the link is in the context of general resource information.</p>
                        <p>These organizations may link to our home page so long as the link: (a) is not in any way
                            deceptive; (b) does not
                            falsely
                            imply sponsorship, endorsement or approval of the linking party and its products or services;
                            and (c) fits
                            within the
                            context of the linking party's site.</p>
                        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to
                            our website, you
                            must
                            inform us by sending an e-mail to Adroid Corporation. Please include your name, your
                            organization name, contact
                            information as well as the URL of your site, a list of any URLs from which you intend to link to
                            our Website,
                            and a list
                            of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                        <p>Approved organizations may hyperlink to our Website as follows:</p>
                        <ul class="check-ul-list">
                            <li>By use of our corporate name; or</li>
                            <li>By use of the uniform resource locator being linked to; or</li>
                            <li>By use of any other description of our Website being linked to that makes sense within the
                                context and
                                format of content
                                on the linking party's site.
                            </li>
                        </ul>
                        <p>No use of Adroid Corporation's logo or other artwork will be allowed for linking absent a
                            trademark license
                            agreement.
                        </p>
                        <h3>iFrames</h3>
                        <p>Without prior approval and written permission, you may not create frames around our Webpages that
                            alter in any
                            way the
                            visual presentation or appearance of our Website.</p>
                        <h3>Content Liability</h3>
                        <p>We shall not be hold responsible for any content that appears on your Website. You agree to
                            protect and defend us
                            against all claims that is rising on your Website. No link(s) should appear on any Website that
                            may be
                            interpreted as
                            libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the
                            infringement or other
                            violation
                            of, any third party rights.</p>
                        <h3>Reservation of Rights</h3>
                        <p>We reserve the right to request that you remove all links or any particular link to our Website.
                            You approve to
                            immediately remove all links to our Website upon request. We also reserve the right to amen
                            these terms and
                            conditions
                            and it's linking policy at any time. By continuously linking to our Website, you agree to be
                            bound to and follow
                            these
                            linking terms and conditions.</p>
                        <h3>Removal of links from our website</h3>
                        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and
                            inform us any
                            moment.
                            We will consider requests to remove links but we are not obligated to or so or to respond to you
                            directly.</p>
                        <p>We do not ensure that the information on this website is correct, we do not warrant its
                            completeness or accuracy;
                            nor do
                            we promise to ensure that the website remains available or that the material on the website is
                            kept up to date.
                        </p>
                        <h3>Disclaimer</h3>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                            conditions
                            relating to
                            our website and the use of this website. Nothing in this disclaimer will:</p>
                        <ul class="check-ul-list">
                            <li>limit or exclude our or your liability for death or personal injury;</li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law;
                                or
                            </li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                        </ul>
                        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this
                            disclaimer: (a) are
                            subject to
                            the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
                            liabilities
                            arising in
                            contract, in tort and for breach of statutory duty.</p>
                        <p>As long as the website and the information and services on the website are provided free of
                            charge, we will not
                            be
                            liable for any loss or damage of any nature.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Terms;
