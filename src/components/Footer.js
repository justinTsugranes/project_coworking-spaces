import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Chat, Heart } from 'react-bootstrap-icons'
import { FaRegUser } from 'react-icons/fa'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import FooterIcons from './FooterIcons'
import MapBox from './MapBox'

const Footer = () => {
  return (
    <Container fluid className='fixed-bottom bg-light text-center p-0'>
      <MapBox />
      <FooterIcons />
    </Container>
  )
}

export default Footer
