import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  console.log(props)
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />
  })
  return (
    <div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
}

export default ContactList
