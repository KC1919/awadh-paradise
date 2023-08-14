import React from 'react'
import '../css/location.css'

function Location() {
  return (
    <>
        <section className='location-section'>
        <div className='location-header-div'>
            <h2>Reach Us</h2>
        </div>
        <div className='location-body-div'>
        <div style={{"width": "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=8/67,%20Gokhale%20Vihar%20Marg,%20Block%20I,%20Gokhale%20Vihar,%20Butler%20Colony,%20Lucknow,%20Uttar%20Pradesh%20226001+(Awadh%20paradise)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
        </div>
        </section>
    </>
  )
}

export default Location;