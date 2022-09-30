import React, { useState } from 'react'

const StartForm = ({categories}) => {
    const [data, setData] = useState({
        name: '',
        category: '',
        difficulty: ''
    })

    function handleData(e){
        const{name, value, type, checked} = e.target
        setData(prevData =>{
            return{
                 ...prevData,
                 [name] : type === 'checkbox' ? checked : value
        }})
    }
    console.log(data)
  return (
    <div>
        <form className='form-container' >
            <input 
            type="text" 
            name='name' 
            value={data.name}  
            onChange={handleData} 
            />
            
            <select 
            name="category" 
            id="" 
            value={data.category}  
            onChange={handleData}
            >
                <option default>please select a category</option>
            
                {
                categories.map((category)=>(
                        <option key={category.id} value={category.name}>
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
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

        </form>
    </div>
  )
}

export default StartForm