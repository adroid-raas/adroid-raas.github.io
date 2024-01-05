import videoHome from '../../video/hero-video-home.mov'
// import imgOurSolutions from '../../img/img-our-solutions.svg'
// import imgWhyAdroid from '../../img/why-adroid.svg'

import imgAMR from '../../img/img-amr.svg'
import imgAGV from '../../img/img-agv.svg'
import imgCobots from '../../img/img-cobots.svg'
import imgHumanoids from '../../img/img-humanoids.svg'
import imgRCS from '../../img/img-robot-control-system.svg'

import partnerAubo from '../../img/logo-partner-aubo.svg'
import partnerAutox from '../../img/logo-partner-autox.svg'
import partnerElite from '../../img/logo-partner-elite.svg'
import partnerMir from '../../img/logo-partner-mir.svg'
import partnerViggorobot from '../../img/logo-partner-viggorobot.svg'
import partnerInvia from '../../img/logo-pattner-invia.svg'

import './style.css'
export const Homepage = () => {
    return (
        <>
            <div className='ad-hero-home'>
                <video className="w-100" autoPlay loop playsInline muted>
                    <source src={ videoHome }></source>
                </video>
    
                <div className="ad-hero-text">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 px-lg-5">
                                <h1 className='text-white h1_xxlarge'>Optimize operations seamlessly through  <span className='text-gradient'>Robotics and Software as a Service</span></h1>
                                <p className='text-white px-lg-5 mb-3'>Tailored Data Driven Solutions for Your Automation Needs: Customized Design, Seamless Deployment, and On-Site Management.</p>
                                <a href="/" className='btn btn-primary btn-lg'>Try us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-4 pe-lg-5 me-lg-5">
                            <h2 className="h2_xlarge mb-2">Our Products</h2>
                            <p className="mb-4 mb-lg-0 pe-lg-4">Our portfolio of carefully crafted software products powers 2500+
                                customers across the world to run their businesses.</p>
                        </div>

                        <div className="col-lg-6 position-relative">
                            <div className="row text-center">
                                <div className="col-sm-5">
                                    <a href="/">
                                        <div  className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={ imgAMR } alt="Rototic type"/></figure>
                                                <h5>AMR</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div  className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={ imgAGV } alt="Rototic type"/></figure>
                                                <h5>AGV</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={ imgCobots } alt="Rototic type"/></figure>
                                                <h5>Cobots & R. Arms</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-sm-5 mt-md-5 pt-md-5">
                                    <a href="/">
                                        <div  className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={ imgHumanoids } alt="Rototic type"/></figure>
                                                <h5>Humanoids</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div  className="ad-card d-block overflow-hidden bg-grey">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={ imgRCS } alt="Rototic type"/></figure>
                                                <h5>Robot Control System</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>Our Solutions</u></div>
                            <h2 className='mb-2'>We Deliver Exceptional Robotics Products and Services Around the World</h2>
                            <p className='mb-3 px-lg-5'>ADROID offers a range of Autonomous Mobile Robots (AMRs) that can navigate complex environments with ease, making them ideal for a variety of applications, such as material handling, logistics, and cleaning.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <h4>Robot as a Service</h4>
                                    <ul className='check-ul-list'>
                                        <li>Revolutionize your business with seamless robot integration.</li>
                                        <li>Streamline deployment and effortlessly manage multiple robots.</li>
                                        <li>Enhance operational efficiency and offer dynamic solutions for new users.</li>
                                        <li>Provide comprehensive support for robot manufacturers in development and maintenance.</li>                                        
                                    </ul>

                                    <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <h4>Robotic Software as a Service</h4>
                                    <ul className='check-ul-list'>
                                        <li>Elevate your robotics experience with our sophisticated SaaS platform.</li>
                                        <li>Seamlessly integrate and oversee your robots using our intuitive software.</li>
                                        <li>Enhance efficiency with tailored solutions for diverse robotic applications.</li>
                                        <li>Receive continuous professional support and updates for sustained optimal performance.</li>
                                    </ul>

                                    <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">$0</div>
                                    <h4 className='pb-0'>No CapEx</h4>
                                    <p className='pb-0'>Pay only when your system produces</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">30%</div>
                                    <h4 className='pb-0'>OpEx Reduction</h4>
                                    <p className='pb-0'>Profit instantly with 1 lower-than-labor payment</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">2x</div>
                                    <h4 className='pb-0'>Capacity Increase</h4>
                                    <p className='pb-0'>Increase your production and win more customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>FUN FACTS</u></div>
                            <h2 className='mb-2'>ADROID in Numbers</h2>
                            <p className='mb-3'>It starts with our first meeting and continues from deployment through successful adoption and operation.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">100+</div>
                                    <p className='pb-0'>Robot Models</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">50+</div>
                                    <p className='pb-0'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">10M$+</div>
                                    <p className='pb-0'>Investment Raised</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">20+</div>
                                    <p className='pb-0'>Countries Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ad-partners py-80">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 pe-lg-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>OUR PARNERS</u></div>
                            <h2 className='mb-2'>Brand We Serve</h2>
                            <p className='pb-0'>ADROID partners with leading Robotics and AI companies to bring you the latest technology and expertise in the field. Together, we're working to create a safer, more productive world with Robotics.</p>
                        </div>

                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerViggorobot } alt="Viggo Robot" /></figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerAutox } alt="Autox Robots" /></figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerElite } alt="Elite Robots" /></figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerAubo } alt="Aubo Robots" /></figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerMir } alt="Universal Robots" /></figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='mb-0'><img src={ partnerInvia } alt="Invia Robots" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage