
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {

  return (
<>
<div className='container' style={{backgroundColor:"#A7C7E7",color:"black"}}>
<h1>✨ Soph was here ✨</h1>
  
    <Router>
    <div>
        <Routes>   
          <Route path = '/'
            element= {<Main/>}
             />
        <Route path = '/about' element = {<About />} />
        </Routes>
        <Footer /> 
    </div>
    </Router>
    </div>
  </>)
}

export default App;
