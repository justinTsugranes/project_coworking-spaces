import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import CategoryScroll from './CategoryScroll'
import Search from './Search'

export default function Header() {
  return (
    <>
      <Container fluid>
        <Navbar className='bg-light fixed-top d-flex flex-column'>
          <Search />
          <CategoryScroll />
        </Navbar>
      </Container>
    </>
  )
}
