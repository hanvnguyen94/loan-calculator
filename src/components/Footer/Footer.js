import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col className='footer text-center py-5 text-muted'>
          Copyright &copy; Han Ng 2021
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
