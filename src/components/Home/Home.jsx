import React, { useEffect, useState } from 'react'
import FormContainer from '../form/Form'
import Table from '../table/Table'
import './Home.css'
import { db } from '../../auth/firebaseConfig'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  // updateDoc,
} from 'firebase/firestore'

const Home = () => {
  const contactsCollectionRef = collection(db, 'contacts')

  const [contactsList, setContactsList] = useState([])

  const getContacts = async () => {
    const data = await getDocs(contactsCollectionRef)

    setContactsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  // const editContact = async (name, phone, gender, eId) => {
  //   const userDoc = doc(db, 'contacts', eId)
  //   const newFields = { name: name, phone: phone, gender: gender }
  //   await updateDoc(userDoc, newFields)
  //   getContacts()
  // }
  const deleteContact = async id => {
    const contactDoc = doc(db, 'contacts', id)
    await deleteDoc(contactDoc)
    getContacts()
  }

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
          <FormContainer createContact={createContact} />
          <Table contactsList={contactsList} deleteContact={deleteContact} />
        </div>
      </div>
    </div>
  )
}

export default Home
