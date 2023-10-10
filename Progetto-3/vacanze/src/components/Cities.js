import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cities = () => {
    const url = 'https://react--course-api.herokuapp.com/api/v1/data/vacanze'
    const [cities, setCities] = useState([]);
    const [display, setDisplay] = useState(0);


    const getData = async () =>{
        const response = await axios.get(url)
        setCities(response.data.data)
    };

    useEffect(()=>{
        getData()
    },[])

    const next = () => {
        setDisplay(display === cities.length -1 ? 0 : display + 1)
    }

    const back = () => {
        setDisplay(display === 0 ? cities.length -1 : display -1)
    }

    const Cardd = () =>{
        if(cities){
        console.log("🚀 ------------------------------------------------🚀")
        console.log("🚀 ~ file: Cities.js:31 ~ Cardd ~ cities:", cities)
        console.log("🚀 ------------------------------------------------🚀")
        const card = cities[display];
        //const {id, titolo, durata, img, prezzo, descrizione} = card
        const CityDetails = () => {
            return (
                <Card style={{ width: '18rem' }} key={card?.id}>
            <Card.Img variant="top" src={card?.img} />
            <Card.Body>
              <Card.Title>{card?.titolo}</Card.Title>
              <Card.Text>
                {card?.descrizione}
              </Card.Text>
              <Card.Text style={{ fontSize: '0.8rem' }} className='d-flex justify-content-between'>
                <div>{card?.durata} </div>
                <div>{card?.prezzo}$</div>

              </Card.Text>
              <Button variant="primary" onClick={()=> next()}>Back</Button>
              <Button variant="primary" onClick={()=>back()}>Next</Button>
            </Card.Body>
          </Card>)
            
        }
        return(
            <CityDetails/>
            )}
    
    }
  

return (
    
   <Cardd/>
  )}
export default Cities