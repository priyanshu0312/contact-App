import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  console.log(props)

  const deleteContactHandler = (id) => {
    props.getContactID(id)
  }
  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Priyanshu',
  //     email: 'sinha@gmail.com',
  //   },
  // ]
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    )
  })
  return (
    <div className="main">
      <br />
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <br />
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
}

export default ContactList
