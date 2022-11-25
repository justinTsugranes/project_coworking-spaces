import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Chat, Heart } from 'react-bootstrap-icons'
import { FaRegUser } from 'react-icons/fa'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function FooterIcons() {
  return (
    <div>
      <Row className='fs-3 border-top pt-2 pb-4 text-muted'>
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
    </div>
  )
}
