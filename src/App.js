import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import ChangePassword from './components/ChangePassword/ChangePassword'
import SignOut from './components/SignOut/SignOut'

import Calculator from './components/Calculator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <>
        <Header user={user} />
        <main className='py-3'>
          <Container>
            <Route path='/sign-up' render={() => (
              <SignUp setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-pw' render={() => (
              <ChangePassword user={user} />
            )} />
            <Route exact path='/' render={() => (
              <Calculator />
            )} />
          </Container>
        </main>
        <Footer />
      </>
    )
  }
}
export default App
