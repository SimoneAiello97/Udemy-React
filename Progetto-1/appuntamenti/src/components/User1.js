import React, { useState } from 'react'
import data from './Data'

const User1 = () => {

    const[people,setPeople] =useState(data)

    const removePerson = (id) => {
    let newPeople = people.filter((el) => el.id !== id)
    setPeople(()=>{
        return newPeople})
    }

    const reset = () => {
        setPeople(()=>{
            return data
        }
            )}

    const deleteAll = () => {
        let arr = []
        setPeople(()=> arr)
    }

  return (
      <div className=''>
        <h1 className='mb-3 text-white'>Prossimi Incontri</h1>
    <div className='card bg-dark offset-3 col-6'>

    
    {people.map(el =>{
        const {id, nome, stato, img} = el
        return (
            <div key={id} className='d-flex text-white justify-content-between p-2 m-1'>
                <div className='d-flex'><img src={img} alt={nome} className='img-fluid rounded-circle immagine'/>
                <div className='d-flex flex-column text-start ps-3'>{nome}<p className='fst-italic'>{stato}</p></div>
                </div>
                <button type='button' className='btn svg'
                onClick={() => removePerson(id)}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
                </button>
                
            </div>
        )
    })}
    </div>
<div className='d-flex justify-content-between offset-3 col-6 mt-5'>
<button type='button' className='btn btn-primary' 
onClick={reset}> RELOAD</button>
<button type='button' className='btn btn-outline-danger' 
onClick={deleteAll}> DELETE ALL</button>
</div>

    </div>
  )
}

export default User1