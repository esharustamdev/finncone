import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

const Categories = () => {
  return (
    <>
      <div className='cateContainer'>
        <h2>Blogs</h2>
        <h1>
          {' '}
          <span>Event & product latest tips.</span>
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='categoryMain'>
            <div className='categoryImg'>
              <img src='images/cat.png' alt='' />
            </div>
            <div className='cateDetail'>
              <p>Product Update</p>
              <p>March 22,2024</p>
            </div>
            <div className='catHead'>
              <h2>Easily get access to loans</h2>
              <p>
                By
                <span>Fin</span>
                Conne
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Categories
