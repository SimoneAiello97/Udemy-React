import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data'
import Card from 'react-bootstrap/Card';
import starCreator from "./StarCreator";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Recensioni = () => {





  return (
    <>
    <div className='container-fluid h-100 d-flex justify-content-center'>
      
      <div className='col-6'>

      <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-100"
    >
        {data.map(dato =>
           // const {id, voto, recensione, autore} = dato
            (
        <SwiperSlide key={dato.id} className='mt-5' >
            
        <div className='text-white mt-5'>
          <div className='bg-secondary card'>
          
            <div className='fs-5'>{dato.autore}</div>
            <div className='fs-6'>{dato.recensione}</div>
            <div className='fs-6'>{starCreator(dato.voto)}</div>
          </div>
        </div>
            
            </SwiperSlide>

))}
    {/*   <div class="swiper-button-prev">prev</div>
  <div class="swiper-button-next">next</div> */}
    </Swiper>
      </div>
</div>
  </>
  )
}

export default Recensioni