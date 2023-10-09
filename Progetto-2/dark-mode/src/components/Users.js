import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import data from 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [darkmode, setDarkMode] = useState(false);

    const getData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await axios.get(url)
            setUsers(response.data)
            console.log("🚀 ~ file: Users.js:13 ~ getData ~ users.data:", response.data)
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    useEffect(()=>{
        getData();
    }, [])

    const toggleDarkmode = ()=>{
        setDarkMode(!darkmode);
        console.log(darkmode);
    }

    useEffect(()=>{
        let container = document.querySelector('#container');
        let bottone = document.querySelector('#button');
        let cards = document.querySelectorAll('.card');

        if(darkmode){
            container?.classList.remove('bg-dark')
            container?.classList.add('bg-light')

            bottone?.classList.remove('btn-danger')
            bottone?.classList.remove('text-white')
            bottone?.classList.add('btn-primary')
            bottone?.classList.add('text-dark')

            cards.forEach(card =>{
                card.classList.remove('bg-secondary');
                card.classList.remove('text-light');
                card.classList.add('text-dark');
                card.classList.add('bg-light');
            })
        }
        else{
            container?.classList.remove('bg-light')
            container?.classList.add('bg-dark')

            bottone?.classList.remove('btn-primary')
            bottone?.classList.remove('text-dark')
            bottone?.classList.add('btn-danger')
            bottone?.classList.add('text-white')
            cards.forEach(card =>{
                card.classList.remove('text-dark');
                card.classList.remove('bg-light');
                card.classList.add('bg-secondary');
                card.classList.add('text-light');
            })
        }
    },[darkmode])

    if (isLoading) {
        return <Loading />;
      }
    
      //Se si verifica un errore Ritorna Error Component
      if (isError) {
        return <ErrorComponent />;
      }


  return (
    <div className='container-fluid' id='container'>
        <div className='row  flex-column align-items-center'>
                    <div className='col-6'>
            <button className='btn btn-primary 
            text-dark btn-sm my-5'
            id='button'
            onClick={() => {
                toggleDarkmode(!darkmode);
              }}> 
             Cambia</button>
                    </div>
            <div className='col-6 d-flex'>
                <div className='row justify-content-center'>
            {users.map(user =>{
            const {id, name, email} = user
            return(
            <div  key={id}  className='card col-5 shadow m-3 p-2'>
                 <div className='fs-2'>{name}</div>
                 <div className='fs-6'>{email}</div>
            </div>
            )
        
        })}
        </div>
        </div>
        </div>

        
    </div>
)
}

const Loading = () => {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  };
  
  const ErrorComponent = () => {
    return (
      <div>
        <h2> Sorry, there is an Error</h2>
      </div>
    );
  };

export default Users