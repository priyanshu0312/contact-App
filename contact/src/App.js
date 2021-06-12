import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Nikhil",
  //     email: "nikhil05@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Riya",
  //     email: "riyasingh01@gmail.com"
  //   },
  //   {
  //     id: "3",
  //     name: "priyanshu",
  //     email: "sinhal05@gmail.com"
  //   },
  // ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
