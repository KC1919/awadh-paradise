import React from 'react'
import '../css/contact.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

const styles = {
    formDiv: {
      width:"100vw",
      marginBottom:"1rem",
      paddingBottom:"1rem",
    //   backgroundColor:"lightblue",
      borderRadius:"0.5rem",
      // boxShadow:"-2px 2px 12px"
    },


};

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    {/* <section> */}
        <div className="container mt-5" style={styles.formDiv}>
        <div style={{"padding":"0.5rem"}}>
          <h2 className="mb-3" style={{"textAlign":"center"}}>Contact Us</h2>
        </div>

        <div className='contact-details-div'>

          <div className='email-div details-card-div'>
            <div className='icon-div'>
            <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "0a396b",}} />
            </div>
            <div>
              <h4>Email Us</h4>
            </div>
            <div>
              <h6>info@awadparadise.in</h6>
            </div>
          </div>

          <div className='mobile-div details-card-div'>
            <div className='icon-div'>
                <FontAwesomeIcon icon={faPhoneVolume} size="2xl" style={{color: "0a396b",}} />
            </div>
            <div>
                <h4>Call Us</h4>
            </div>
            <div>
              <h6>9987463250</h6>
            </div>
          </div>

        </div>

        {/* <div>
          <form onSubmit={onSubmit}>
              <div className="mb-3">
              <label className="form-label" htmlFor="name">
                  Name
              </label>
              <input className="form-control" type="text" id="name" required />
              </div>
              <div className="mb-3">
              <label className="form-label" htmlFor="email">
                  Email
              </label>
              <input className="form-control" type="email" id="email" required />
              </div>
              <div className="mb-3">
              <label className="form-label" htmlFor="message">
                  Message
              </label>
              <textarea className="form-control" id="message" required />
              </div>
              <div style={{"textAlign":"center"}}>
                  <button className="btn btn-danger" type="submit">
                  {formStatus}
                  </button>
              </div>
          </form>
        </div> */}
        </div>
    {/* </section> */}
    </>
  )
}
export default ContactForm;