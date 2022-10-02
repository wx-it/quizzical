import StartForm from '../Components/StartForm'

const Quizz = ({categories, data, setData}) => {

  return (
    <div className='start-form'>
     <div className='start-form-content'>
        <h1>Quizzical</h1>
        <p>Pick your preference to start</p>
        <StartForm categories={categories}  data={data} setData={setData}/>
     </div>
    </div>
  )
}

export default Quizz