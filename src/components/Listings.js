import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'

export default function Listings() {
  return (
    <Container fluid className='mt-5 pt-5'>
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        <Col>
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
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/hygge.jpg'
                  className='item-img rounded'
                  alt='A smart coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Skiving in Scandinavia? Relax with a latte at Hygge Lounge.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/sky-garden.jpg'
                  className='item-img rounded'
                  alt='A coworking space with plants'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Bored in Barcelona? Take a siesta at the Sky Garden.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
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
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card.Img
                  variant='top'
                  src='images/generator.jpg'
                  className='item-img rounded'
                  alt='A comfortable coworking space'
                />
              </SwiperSlide>
            </Swiper>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Relaxing in Rio? Take some downtime at the Generator Hub.
              </Card.Text>
              <Button variant='success'>Book</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
