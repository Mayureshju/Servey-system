import React from "react"


import ContactDetails from "../components/Serveyforms/ContactDetails"
import ContactForm from "../components/Serveyforms/ContactForm"

const Servey = () => {
  return (
    <div>
      <div className="mx-auto mt-24 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
   
          <ContactForm />
        </div>
      </div>

    </div>
  )
}

export default Servey
