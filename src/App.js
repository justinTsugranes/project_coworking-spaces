import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Listings from './components/Listings'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Header />
      <Listings />
      <Footer />
    </Container>
  )
}

export default App
