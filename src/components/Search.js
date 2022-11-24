import React from 'react'
import { InputGroup, Button, Row, Col } from 'react-bootstrap'
import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from 'react-icons/hi2'

export default function Search() {
  return (
    <>
      <InputGroup className='text-center justify-content-center mt-4 rounded-pill'>
        <Row className='search-bar text-center justify-content-center mt-4 no-gutters align-items-center rounded-pill'>
          <Col>
            <Button className='bg-light text-dark border-light fs-3'>
              <HiMagnifyingGlass />
            </Button>
          </Col>
          <Col>
            <input
              label='Search'
              placeholder='Where to?'
              className='bg-light text-dark border-0 fs-3 rounded-pill'
            />
          </Col>
          <Col>
            <Button className='bg-light text-dark border-light fs-3'>
              <HiAdjustmentsHorizontal />
            </Button>
          </Col>
        </Row>
      </InputGroup>
      {/* <Row class='no-gutters mt-3 align-items-center'>
        <Col class='col-md-4'>
          <input
            class='form-control border-secondary rounded-pill pr-5'
            type='search'
            value='search'
            id='example-search-input2'
          />
        </Col>
        <Col class='col-auto'>
          <button
            class='btn btn-outline-light text-dark border-0 rounded-pill ml-n5'
            type='button'
          >
            <HiMagnifyingGlass />
          </button>
        </Col>
      </Row> */}
    </>
  )
}
