import footerLogo from '../../img/logo.svg'
import pkg from '../../../package.json'
import './style.css'

export const Footer = () => {
    return (
        <>
            <footer className="ad-footer">
                <div className="container my-4">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <div className="footer-logo mb-4">
                                <img src={footerLogo} alt={pkg.name}/>
                            </div>

                            <ul className="ad-social-links p-0">
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                </li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <svg width="1200" height="1227" viewBox="0 0 1200 1227" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                                    </svg>
                                </a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a></li>
                                <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p>
                                <a href="mailto: info@adroid.ai">
                                    <svg className='me-3' height='1em'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38C63.88 127.6 43.25 143.4 18.38 163C6.75 172 0 186 0 200.8v247.2C0 483.3 28.65 512 64 512h384c35.35 0 64-28.67 64-64.01V200.8C512 186 505.3 172 493.6 163zM464 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V276.7l136.1 113.4C204.3 406.8 229.8 416 256 416s51.75-9.211 71.97-26.01L464 276.7V448zM464 214.2l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 214.2l.1055-13.48c23.24-18.33 42.25-32.97 162.9-120.6c3.082-2.254 6.674-5.027 10.63-8.094C229.4 65.99 246.7 52.59 256 48.62c9.312 3.973 26.62 17.37 34.41 23.41c3.959 3.066 7.553 5.84 10.76 8.186C421.6 167.7 440.7 182.4 464 200.8V214.2z" fill='#ffffff'/></svg>
                                    info@adroid.ai</a>
                            </p>
                            <p className='pb-0'><a href="/">Privacy</a> <span className='px-2'>|</span> <a href="/">Terms</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
