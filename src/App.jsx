import './App.css'
import S01SVG from './Sections/S01SVG'
import S02API from './Sections/S02API'
//import S03Specifications from './Sections/S03Specifications'

function App() {

  return (
    <div>
     <S01SVG/>
     <div>
     <hr style={{marginBlock:"3rem"}}/>
     <S02API/>

     </div>
     </div>
    
  )
}

export default App
