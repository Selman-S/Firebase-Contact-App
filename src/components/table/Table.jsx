import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Table = ({ contactsList, updateContact, deleteContact }) => {
  const editContact = () => {}
  const handleDelete = id => {
    deleteContact(id)
  }

  return (
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
                      onClick={editContact}
                      style={{ cursor: 'pointer', color: '#ac8c01' }}
                    />
                  </td>
                </tr>
              ))}
            {contactsList.length === 0 && (
              <tr>
                <td colSpan="6">Please Add a Contact</td>{' '}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
