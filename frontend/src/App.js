import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
        <HomeScreen/>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
