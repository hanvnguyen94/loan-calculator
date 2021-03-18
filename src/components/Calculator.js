import React, { useState } from 'react'
import { Form, Button, Row, Col, Card, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


const Calculator = () => {
  // using hooks to manage state

  // initiate state with empty properties
  const [userInput, setUserInput] = useState({
    amount: '',
    interest: '',
    years: ''
  })

  // const [amount, setAmount] = useState(0)
  // const [interest, setInterest] = useState(0)
  // const [terms, setTerms] = useState(0)
  // const [monthsOrYears, setMonthsOrYears] = useState(0)

  // create state to store results value
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
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


    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    })
  }

  const handleSelect = (e) => {
    console.log(e)
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

            {/* testing dropdown options */}

            <DropdownButton
              alignRight
              title="Choose Loan Term Options"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="option-1">In Years</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">In Months</Dropdown.Item>
            </DropdownButton>

            <Form.Group controlId='months' key='1'>
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

        {/* displaying results card */}
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Monthly Payment</Card.Title>
            <Card.Text>
              ${results.monthlyPayment}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Total Principal Paid ${userInput.amount}</ListGroup.Item>
            <ListGroup.Item>Total Interest Paid ${results.totalInterest}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button
              className='btn-block'
              target='blank'
              href="https://www.bankrate.com/loans/personal-loans/rates/">
              COMPARE LOAN RATES
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}

export default withRouter(Calculator)
