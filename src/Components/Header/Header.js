import Navbar from '../Navbar/Navbar'
import {useEffect} from "react";
import './style.css'
import logo from '../../img/logo.svg'
import pkg from '../../../package.json'

export const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.ad-header');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <header className='ad-header'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt={pkg.name}/>
                    <svg width="195" height="50" viewBox="0 0 195 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>

                <Navbar></Navbar>

                <div className='btn-right'>
                    <a href='#contact' className='btn btn-primary'>Try Us</a>
                </div>
            </div>
        </header>
    )
}

export default Header;