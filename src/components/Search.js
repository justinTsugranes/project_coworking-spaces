import React from 'react'
import { InputGroup, Button, Row, Col } from 'react-bootstrap'
import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from 'react-icons/hi2'

export default function Search() {
  return (
    <>
      <InputGroup className='text-center justify-content-center mt-4 rounded-pill'>
        <Row className='search-bar text-center justify-content-center mt-2 no-gutters align-items-center rounded-pill'>
          <Col>
            <Button className='bg-light text-dark border-light fs-3'>
              <HiMagnifyingGlass />
            </Button>
          </Col>
          <Col>
            <input
              label='Search'
              placeholder='Where to?'
              className='bg-light text-dark border-0 fs-3'
            />
          </Col>
          <Col>
            <Button className='bg-light text-dark border-light fs-3'>
              <HiAdjustmentsHorizontal />
            </Button>
          </Col>
        </Row>
      </InputGroup>
    </>
  )
}
