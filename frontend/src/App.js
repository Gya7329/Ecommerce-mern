import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container >
        <Route path='/' component={HomeScreen} exaxt />
        <Route path='/product/:id' component={ProductScreen} />
        
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
