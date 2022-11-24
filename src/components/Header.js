import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CategoryScroll from './CategoryScroll'
import Search from './Search'

export default function Header() {
  return (
    <>
      <Navbar className='bg-light fixed-top d-flex flex-column'>
        <Container fluid></Container>
        <Search />
        <CategoryScroll />
      </Navbar>
    </>
  )
}
