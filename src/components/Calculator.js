import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


const Calculator = () => {
  // using hooks to manage state

  // initiate state with empty properties
  const [userInput, setUserInput] = useState({
    amount: '',
    interest: '',
    years: '',
    month: ''
  })

  // create state to store results value
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isResult: false
  })

  // handle errors

  const [error, setError] = useState('')

  const calculateLoan = ({ amount, interest, years, months }) => {

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
      years: '',
      month: ''
    })


    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    })
  }


  return (
    <>
      <h1>Han's Loan Calculator</h1>
      <Row>
        <Col md={6}>

          {error}
          <Form onSubmit={submitHandler}>
            {/* checking if the page has calculated results or not */}
            <Form.Group controlId='amount'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Loan Amount'
                name='amount'
                value={userInput.amount}
                onChange={handleInputChange}
              >
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='years'>
              <Form.Label>Loan term in years</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Years'
                name='years'
                value={userInput.years}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <h5>Or</h5>

            <Form.Group controlId='months'>
              <Form.Label>Loan term in months</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Months'
                name='months'
                value={userInput.years * 12}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='interest'>
              <Form.Label>Interest</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Interest Rate'
                name='interest'
                value={userInput.interest}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>


            <Button className='mr-3'
              type='submit'
              variant='primary'>
              CALCULATE
              </Button>

            <Button
              type='submit'
              onClick={resetCalculator}>
              RESET
              </Button>

          </Form>
        </Col>
        <Col md={6}>
          <Row className='py-3'>
            <Col>
              <h1>Results</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                Loan amount: ${userInput.amount} <br />
                Interest: {userInput.interest}%
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <h4>
                Monthly Payment: ${results.monthlyPayment} <br />
                Total Interest: {results.totalInterest}% <br />
              </h4>
            </Col>
          </Row>

        </Col>
      </Row>
    </>
  )
}

export default withRouter(Calculator)
