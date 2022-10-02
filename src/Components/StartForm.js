import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StartForm = ({categories, data, setData}) => {


    function handleData(e){
        const{name, value, type, checked} = e.target
        setData(prevData =>{
            return{
                 ...prevData,
                 [name] : type === 'checkbox' ? checked : value
        }})
    }

    function handleSubmit(e){
        e.preventDefault()
        setData(data => data)
    }

  return (
    <div>
        <form 
        className='form-container' 
        onSubmit={handleSubmit} 
        >
            <input 
            type="text" 
            name='name' 
            placeholder='Name'
            value={data.name}  
            onChange={handleData} 
            />
            
            <select 
            name="category" 
            id="" 
            value={data.category}  
            onChange={handleData}
            >
                <option default>Select a category</option>
            
                {
                categories.map((category)=>(
                        <option key={category.id} value={category.id}>
                            {category.name}
                            </option>
                    )
                )}
            </select>

            <select 
            name="difficulty"
            id=""
            value={data.difficulty}
            onChange={handleData}
            >
                <option default>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

        <button type='submit' ><Link to='/Quiz'>Start</Link></button>

        </form>
    </div>
  )
}

export default StartForm