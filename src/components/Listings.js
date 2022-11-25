import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'
import data from '../constants/data.json'

export default function Listings() {
  return (
    <Container fluid className='mt-5 pt-5'>
      <Row xs={1} md={2} lg={3} xl={4} className='g-2'>
        {data.map(({ title, desc, src, alt }, index) => {
          return (
            <Col key={index}>
              <Card border='light' className='p-5'>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card.Img
                      variant='top'
                      src={src}
                      className='item-img rounded'
                      alt={alt}
                    />
                  </SwiperSlide>
                </Swiper>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{desc}</Card.Text>
                  <Button variant='success'>Book</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
