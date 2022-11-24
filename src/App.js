import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Listings from './components/Listings'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <Container fluid>
        <Header />
        <Listings />
        <Footer />
      </Container>
    </div>
  )
}

export default App
