import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Chat, Heart } from 'react-bootstrap-icons'
import { FaRegUser } from 'react-icons/fa'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import MapBox from './MapBox'

const Footer = () => {
  return (
    <Container fluid className='fixed-bottom bg-light text-center p-0'>
      {/* <Row className='pb-4'> */}
      <MapBox />
      {/* </Row> */}
      <Row className='footer-icons fs-3 border-top pt-2 pb-4 text-muted'>
        <Col>
          <HiMagnifyingGlass />
          <h3>Explore</h3>
        </Col>
        <Col>
          <Heart />
          <h3>Wishlist</h3>
        </Col>
        <Col>
          <Chat />
          <h3>Inbox</h3>
        </Col>
        <Col>
          <FaRegUser />
          <h3>Profile</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
