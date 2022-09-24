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
        <form onChange={handleData}>
            <input type="text" name='name' value={data.name} />
            <select name="category" id="" value={data.category}>
                <option default>please select a category</option>
                {
                categories.map((category)=>(
                        <option key={category.id} value={category.id}>
                            {category.name}
                            </option>
                    )
                )}
            </select>
        </form>
    </div>
  )
}

export default StartForm