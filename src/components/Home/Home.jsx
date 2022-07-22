import React from 'react'
import FormContainer from '../form/Form'
import Table from '../table/Table'
import './Home.css'

const Home = () => {
  return (
    <div className="   d-flex justify-content-center flex-column align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div
        className="container  text-center   "
       
      >
        <div
          className="row 
  "
        >
          <FormContainer />
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
