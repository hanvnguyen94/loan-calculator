import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


const Calculator = () => {
  // using hooks to manage state
  // initiate state with empty properties
  const [userInput, setUserInput] = useState({
    amount: '',
    interest: '',
    years: '',
  })

  // create state to store results value
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    isResult: false
  })

  // handle errors

  const [error, setError] = useState('')

  const calculateLoan = ({ amount, interest, years }) => {

    const inputAmount = Number(amount)

    const calculatedInterest = Number((interest / 100 / 12))

    // calculate for payments
    const calculatedPayments = Number((years * 12))

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)

    const monthlyPayment = (inputAmount * x * calculatedInterest) / (x - 1)

    // check condition if monthly value passed in 
    // is a finite number
    if (isFinite(monthlyPayment)) {
      const monthlyPaymentCalculated = monthlyPayment.toFixed(2)
      const totalPaymentCalculated = (monthlyPayment * calculatedPayments).toFixed(2)
      const totalInterestCalculated = (monthlyPayment * calculatedPayments - inputAmount).toFixed(2)

      // set results to state so we can display

      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true
      })
    }
    return
  }

  const handleInputChange = (e) =>
    setUserInput({ ...userInput, [e.target.name]: e.target.value })

  const submitHandler = (e) => {
    e.preventDefault()
    // call the calculate function to calculate 
    // based on user input
    if (isValid()) {
      setError('')
      calculateLoan(userInput)
    }
  }

  // function to check if there's any error occurs
  const isValid = () => {
    const { amount, interest, years } = userInput

    let error = ''

    // valid all input numbers are numbers
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      // throw new Error('Must be a valid number')
      error = 'Must be a valid number'
    }

    // valid all input numbers are positive numbers
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      error = 'Numbers must be positive'
    }

    if (error) {
      setError(error)
      return false
    }
    return true
  }

  // function to reset the calculator

  const resetCalculator = () => {
    // set state to be empty again
    setUserInput({
      amount: '',
      interest: '',
      years: ''
    })

    setError('')

    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    })
  }


  return (
    <Container >
      <h1>Han's Loan Calculator</h1>
      <Row className='py-3 my-3 box-around'>
        <Col md={6}>
          {error ? (
            <div className="form-group has-danger">
              <input type="text"
                value={error}
                className="form-control is-invalid"
                id="inputInvalid">
              </input>
            </div>
          ) : ''}
          <Form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="control-label">Loan Amount</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    required
                    type="number"
                    name='amount'
                    value={userInput.amount}
                    onChange={handleInputChange}
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)">
                  </input>
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label">Loan term in years</label>
              <fieldset className="form-group">
                <input
                  value={userInput.years}
                  onChange={(e) => setUserInput({ years: e.target.value })}
                  min="1" max="99" step="0.5"
                  type="range"
                  className="custom-range"
                  id="customRange1"></input>
              </fieldset>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    required
                    type="number"
                    name='years'
                    value={userInput.years}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                  </input>
                </div>
              </div>
            </div>

            <h6>Or</h6>

            <div className="form-group">
              <fieldset>
                <label className="control-label" htmlFor="readOnlyInput">Loan term in months</label>
                <input
                  className="form-control"
                  id="readOnlyInput"
                  type="number"
                  name='months'
                  value={userInput.years * 12}
                  onChange={handleInputChange}
                  readOnly='readOnly'
                >
                </input>
              </fieldset>
            </div>

            <div className="form-group w-75">
              <label className="control-label">Interest rate per year</label>
              <fieldset className="form-group w-75">
                <input
                  onChange={(e) => setUserInput({ interest: e.target.value })}
                  min="1" max="99" step="0.5"
                  type="range"
                  className="custom-range"
                  id="customRange1"></input>
              </fieldset>
              <div className="form-group w-75">
                <div className="input-group mb-3">
                  <input
                    required
                    type="number"
                    name='interest'
                    value={userInput.interest}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                  </input>
                  <div className="input-group-append">
                    <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-75'>
              <Button md={6}
                className='mr-2'
                type='submit'
                variant='primary'>
                CALCULATE
              </Button>

              <Button
                type='submit'
                onClick={resetCalculator}>
                RESET
              </Button>
            </div>

          </Form>
        </Col>

        <Col md={6} className='results'>
          {/* displaying results card */}
          <Card.Body>
            <Card.Title className='px-4'>Monthly Payments</Card.Title>
            <Card.Title className='px-4'>
              $ <span style={{ fontSize: '3rem' }}>{results.monthlyPayment}</span>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Total Principal Paid <span style={{ fontWeight: 'bold' }}>${userInput.amount}</span></ListGroup.Item>
            <ListGroup.Item>Total Interest Paid <span style={{ fontWeight: 'bold' }}>${results.totalInterest}</span></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Calculator)
