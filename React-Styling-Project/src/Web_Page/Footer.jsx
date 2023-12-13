import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <>
            {/* ============footer========== */}
            <div className='footer'>
                <div className="container footer-p">
                    <div className="footer-main">
                        <div className="footer-sub-grid">
                            <h3>About</h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
                            </p>
                            <div className="social">
                                <div className="icons">
                                    <a href="">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <FontAwesomeIcon icon={faGooglePlusG} />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-sub-grid">
                            <h3>contact info</h3>
                            <ul className='p-0'>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Food, 10001, 5th Avenue, #06 lane street, NY - 62617.</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> +91 9589656657</a></li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> info@example.com</a></li>
                            </ul>
                        </div>
                        <div className="footer-sub-grid">
                            <h3>quick Links</h3>
                            <ul className='p-0'>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Home</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> About</a></li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> Blog Posts</a></li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-sub-grid">
                            <h3>Help & support</h3>
                            <ul className='p-0'>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Live Chart</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> Faq's</a></li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> Support</a></li>
                                <li><FontAwesomeIcon icon={faAngleRight} /><a href="" className='text-decoration-none'> Terms of Use</a></li>
                            </ul>
                        </div>
                        <div className="footer-sub-grid"></div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2023 Salads. All Rights Reserved. Design by <span className='fw-bold'>W3Layouts</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
