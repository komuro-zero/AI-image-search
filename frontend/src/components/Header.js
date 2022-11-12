import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">AI横断検索</Navbar.Brand>
      </Container>
    </Navbar>
    // <header className="header">
    //   <h1>AI横断検索</h1>
    // </header>
  )
}

export default Header
