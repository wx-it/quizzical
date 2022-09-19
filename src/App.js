import Nav from './components/Nav';
import Content from './components/Content';
import Card from './components/Card';

import Data from './data';


function App() {
  const getData = Data.map((data)=>{
    return <Card 
                  key={data.id} 
                  data={data}
                  Star={"images/Star 1.png"}
                  />
  })
  return (
    <div>
     <Nav Logo={'images/airbnb 1.png'}/>
     <Content Image={'images/Group 77.png'} />
     <div className="row">
    {getData}

     </div>
    </div>
  );
}

export default App;
