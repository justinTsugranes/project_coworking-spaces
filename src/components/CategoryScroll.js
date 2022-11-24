import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'

import { HiFire, HiKey } from 'react-icons/hi2'
import { FaAccessibleIcon, FaSkiing } from 'react-icons/fa'
import { Container, Col } from 'react-bootstrap'

export default function CategoryScroll() {
  return (
    <Container fluid className='pt-4'>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Col>
            <HiKey />
            <h3>New</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <HiFire />
            <h3>Trending</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaSkiing />
            <h3>Play</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Adapted</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />

            <h3>Cabin</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Amazing Views</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Treehouses</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Mansions</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />

            <h3>OMG!</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Tiny homes</h3>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col>
            <FaAccessibleIcon />
            <h3>Beachfront</h3>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
