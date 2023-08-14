import React from 'react'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faInstagram} from "@fortawesome/free-solid-svg-icons";
import '../css/footer.css';

const Footer = () => {
  return (
    <>
        <section>
            <div className='footer-container'>
                <div className='social-handles-div'>
                    <div className='instagram-div'>
                        {/* <FontAwesomeIcon icon={faInstagram} size="xl" /> */}
                        <a href="https://www.instagram.com"><img src={require("../img/instagram.png")} alt="" srcset="" /></a>
                    </div>

                    <div className='facebook-div'>
                        <a href="https://www.facebook.com"><img src={require("../img/facebook.png")} alt="" srcset="" /></a>
                    </div>

                    <div className='twitter-div'>
                        <a href="https://www.twitter.com"><img src={require("../img/twitter.png")} alt="" srcset="" /></a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer;