import React from 'react'
import { Map } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'

export default function MapBox() {
  return (
    <Container
      fluid
      className='chatbox-container d-flex justify-content-center'
    >
      <div className='chatbox-bg bg-dark d-flex justify-content-center align-items-center rounded-pill'>
        <div>
          <h3 className='text-light fs-5 fw-bold'>Map</h3>
          <Map className='chatbox-img text-light mx-2' />
        </div>
      </div>
    </Container>
  )
}
