import React, { useState } from 'react'

import { FaUserAlt, FaPhone } from 'react-icons/fa'

const FormContainer = ({ contactsList, createContact, updateContact }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    createContact(name, phone, gender)
    setName('')
    setPhone('')
    setGender('')
  }

  return (
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
  )
}

export default FormContainer
