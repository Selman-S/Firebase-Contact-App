import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FaUserAlt, FaPhone } from 'react-icons/fa'

import './Home.css'
import { db } from '../auth/firebaseConfig'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  // updateDoc,
} from 'firebase/firestore'

const Home = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const contactsCollectionRef = collection(db, 'contacts')
  const getContacts = async () => {
    const data = await getDocs(contactsCollectionRef)

    setContactsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }
  const [contactsList, setContactsList] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
    createContact(name, phone, gender)
    setName('')
    setPhone('')
    setGender('')
  }
  const handleDelete = id => {
    deleteContact(id)
  }

  const createContact = async (name, phone, gender) => {
    await addDoc(contactsCollectionRef, {
      name: name,
      phone: phone,
      gender: gender,
    })
    getContacts()
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
          <div className="mb-3 col-md-4 col-xs-12 mb-5">
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label bg-white  form-control "
              >
                {' '}
                <i className="text-info">{'<Warriors/>'}</i> DESIGN
              </label>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label bg-white form-control mt-5"
                >
                  Add Contact
                </label>
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <div style={{ position: 'relative' }}>
                      <FaUserAlt
                        style={{
                          position: 'absolute ',
                          top: '10px',
                          left: '5px',
                          opacity: '0.5',
                        }}
                      />

                      <input
                        type="text"
                        className="form-control mt-3 ps-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <FaPhone
                        style={{
                          position: 'absolute ',
                          top: '10px',
                          left: '5px',
                          opacity: '0.5',
                        }}
                      />

                      <input
                        type="text"
                        className="form-control mt-3  ps-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <select
                        className="custom-select mt-3"
                        style={{
                          width: '100%',
                          borderRadius: '5px',
                          border: '1px solid #bbb',
                          color: '#777',
                          padding: '.4rem',
                        }}
                        id="inputGroupSelect03"
                        placeholder="Gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        required
                      >
                        <option value="">gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-info form-control text-white"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" col-md-8 col-xs-12 ">
            <div className="mx-5">
              <label htmlFor="" className="bg-white form-control mb-4">
                Contacts
              </label>
              <table className="table bg-white form-control w-100  ">
                <thead className="text-info w-100  ">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">delete</th>
                    <th scope="col">edit</th>
                  </tr>
                </thead>
                <tbody>
                  {contactsList &&
                    contactsList?.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td>
                          <FaTrashAlt
                            onClick={() => handleDelete(user.id)}
                            style={{ cursor: 'pointer', color: '#fc6666' }}
                          />
                        </td>
                        <td>
                          <FaEdit
                            style={{ cursor: 'pointer', color: '#ac8c01' }}
                          />
                        </td>
                      </tr>
                    ))}
                  {contactsList.length === 0 && (
                    <tr>
                      <td colSpan="6">Please Add a Contact</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* <FormContainer createContact={createContact} />
          <Table contactsList={contactsList} deleteContact={deleteContact} /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
