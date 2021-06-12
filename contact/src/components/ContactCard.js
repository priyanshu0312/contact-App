import React from 'react'

const ContactCard = (props) => {
  // const {id, name, email } = props.contact;
  return (
    <div>
      <br />
      <div className="item">
          <img className="ui avatar image" src="https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png" />
        <div className="content">
          <div className="header">
            {props.contact.name}
            <i
              className="trash alternate outline icon"
              style={{ color: 'red', marginTop: '10px', float: 'right' }}
            ></i>
          </div>

          <div>{props.contact.email}</div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default ContactCard
