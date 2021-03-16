import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'


const Calculator = () => {
  // using hooks to manage state
  // const [state, setState] = useState()

  // initiate state with empty properties
  const [userInput, setUserInput] = useState({
    amount: '',
    interest: '',
    years: ''
  })

  // create state to store results value

  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isResult: false
  })

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
      const totalInterestCalculated = (monthlyPayment * calculatedPayments - userInput).toFixed(2)

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
    calculateLoan(userInput)

  }



  return (
    <FormContainer>
      <h1>Han's Loan Calculator</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='amount'>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type='text'
            placeholder='Loan Amount'
            name='amount'
            value={userInput.amount}
            onChange={handleInputChange}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='interest'>
          <Form.Label>Interest</Form.Label>
          <Form.Control
            type='text'
            placeholder='Interest Rate'
            name='interest'
            value={userInput.interest}
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='years'>
          <Form.Label>Years</Form.Label>
          <Form.Control
            type='text'
            placeholder='Years'
            name='years'
            value={userInput.years}
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          CALCULATE
        </Button>

      </Form>

      <h1>Results</h1>

      <Form>
        <h4>
          Loan amount: ${userInput.amount} <br />
          Interest: {userInput.interest}% <br />
          Years to repay: {userInput.years} years <br />
        </h4>
        <Form.Group>
          <Form.Label>Monthly Payment:</Form.Label>
          <Form.Control
            type='text'
            value={results.monthlyPayment}
            disabled
          >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Payments:</Form.Label>
          <Form.Control
            type='text'
            value={results.totalPayment}
            disabled
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Interest:</Form.Label>
          <Form.Control
            type='text'
            value={results.totalInterest}
            disabled
          ></Form.Control>
        </Form.Group>
      </Form>

    </FormContainer>


  )
}

export default Calculator
