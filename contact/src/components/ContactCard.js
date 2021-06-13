import React from 'react'
import './style.css'

const ContactCard = (props) => {
  // const {id, name, email } = props.contact;
  return (
    <div>
      <br />

      <div class="chip">
        <img src="https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png" />
        <div className="content1">
          <span className="span1"> {props.contact.name}</span>
        </div>
        <div className="content2">
          <span className="span2">{props.contact.email}</span>
        </div>
        <span class="closebtn" onClick={() => props.clickHandler(props.contact.id)}>&times;</span>
      </div>
    </div>
  )
}

export default ContactCard
