import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-solid-svg-icons";
import '../css/footer.css';

const Footer = () => {
  return (
    <>
        <section>
            <div className='footer-container'>
                <div className='social-handles-div'>
                    <div className='instagram-div'>
                        {/* <FontAwesomeIcon icon={faInstagram} size="xl" /> */}
                        <img src={require("../img/instagram.png")} alt="" srcset="" />
                    </div>

                    <div className='facebook-div'>
                        <img src={require("../img/facebook.png")} alt="" srcset="" />
                    </div>

                    <div className='twitter-div'>
                        <img src={require("../img/twitter.png")} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer;