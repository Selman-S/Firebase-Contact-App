import React, { useEffect, useState } from 'react'
import FormContainer from '../form/Form'
import Table from '../table/Table'
import './Home.css'
import { db } from '../../auth/firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const Home = () => {
  const contactsCollectionRef = collection(db, 'contacts')

  const [contactsList, setContactsList] = useState([])

  const getContacts = async () => {
    const data = await getDocs(contactsCollectionRef)
    console.log(data)
    setContactsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  const updateContact = async () => {}

  useEffect(() => {
    getContacts()
  }, [])

  const createContact = async (name, phone, gender) => {
    await addDoc(contactsCollectionRef, {
      name: name,
      phone: phone,
      gender: gender,
    })
    getContacts()
  }
  console.log(contactsList)
  return (
    <div
      className="   d-flex justify-content-center flex-column align-items-center"
      style={{ height: '100vh', width: '100%' }}
    >
      <div className="container  text-center   ">
        <div
          className="row 
  "
        >
          <FormContainer
            contactsList={contactsList}
            createContact={createContact}
            updateContact={updateContact}
          />
          <Table contactsList={contactsList} updateContact={updateContact} />
        </div>
      </div>
    </div>
  )
}

export default Home
