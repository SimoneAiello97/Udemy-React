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

/* 
const Slide = ( props ) => {
    const [reviews, setReviews] = useState([]);
    const [length, setLength] = useState(0);

    useEffect(() => {
        setReviews(dataJS);
    }, [])
    
    useEffect(() => {
        setLength(reviews.length);
        sendDataToParent();
    }, [reviews]);
    

    
    const sendDataToParent = () => {
        props.sendDataToParent(reviews.length);
    };    

    const FillCards = ({id, voto, recensione, autore}) => {

        function TextExample() {
            return (
                <Card style={{ width: '600px', marginRight: '600px' }} key={id}>
                    <Card.Body>
                        <Card.Title>{autore}</Card.Title>
                        <Card.Text>
                            {recensione}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>{voto}</Card.Footer>
                </Card>
            );
        }

        return <TextExample />
    };

    return (
        <React.Fragment>
            <div className='card-container d-flex position-absolute left-0' style={{top: '40%'}}>
            {
                reviews.map((review) => {
                    const { id, voto, recensione, autore } = review;
                    return (
                        <FillCards
                            key={id}
                            id={id}
                            voto={voto}
                            recensione={recensione}
                            autore={autore}
                        />
                    )
                })
            }
            </div>
        </React.Fragment>
    )
}
 */



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