import React from 'react'

const styles = {
    formDiv: {
      width:"40vw",
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
        </div>
    {/* </section> */}
    </>
  )
}
export default ContactForm;