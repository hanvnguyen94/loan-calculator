import React, { useState } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


const Calculator = () => {
  // using hooks to manage state

  // initiate state with empty properties
  const [userInput, setUserInput] = useState({
    amount: '',
    interest: '',
    years: '',
  })

  // const [amount, setAmount] = useState('')
  // const [interest, setInterest] = useState('')
  // const [years, setYears] = useState('')
  // const [months, setMonths] = useState('')

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
    // const { amount, interest, years, months } = userInput

    let error = ''

    // valid all input numbers are numbers
    if (isNaN(userInput.amount) || isNaN(userInput.interest) || isNaN(userInput.years)) {
      // throw new Error('Must be a valid number')
      error = 'Must be a valid number'
    }

    // valid all input numbers are positive numbers
    if (Number(userInput.amount) <= 0 || Number(userInput.interest) <= 0 || Number(userInput.years) <= 0) {
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
    // setAmount('')
    // setInterest('')
    // setYears('')
    // setMonths('')


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
          {error ? (
            <div class="form-group has-danger">
              <input type="text"
                value={error}
                class="form-control is-invalid"
                id="inputInvalid">
              </input>
            </div>
          ) : ''}
          <Form onSubmit={submitHandler}>
            {/* checking if the page has calculated results or not */}

            <div class="form-group">
              <label class="control-label">Loan Amount</label>
              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
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
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>


            </div>

            <div class="form-group">
              <label class="control-label">Loan term in years</label>
              <div class="form-group">
                <div class="input-group mb-3">
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

            <div class="form-group">
              <fieldset>
                <label class="control-label" for="readOnlyInput">Loan term in months</label>
                <input
                  class="form-control"
                  id="readOnlyInput"
                  type="number"
                  placeholder='months'
                  name='months'
                  value={userInput.years * 12}
                  readonly="">
                </input>
              </fieldset>
            </div>

            <div class="form-group">
              <label class="control-label">Interest rate per year</label>
              <div class="form-group">
                <div class="input-group mb-3">
                  <input
                    required
                    type="number"
                    name='interest'
                    value={userInput.interest}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                  </input>
                  <div class="input-group-append">
                    <span class="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>


            <Button
              className='mr-3'
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
            <Card.Title>Monthly Payments</Card.Title>
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
