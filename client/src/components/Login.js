import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter 
} from 'react-router-dom';
const fakeAuth = {
  isAuthenticated: false,
  authenicate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

const PrivateRoute = ({component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
      ? <Component {...props}/>
      : <Redirect to='/login' />
  )} />
)

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  
  login = () => {
    RouteAuth.fakeAuth.authenticate(() =>{
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
    const {from } = this.props.location.state || { from: {pathname: '/' } }
    const { redirectToReferrer } = this.state;
    
    return (
      <>
          <h1>Welcome to the Bubble App!</h1>
          <button onClick={this.login}>Log in</button>
          <p>Build a login page here</p>
          </>
       )
      }
    };
    

    
export default function RouteAuth(){
  return(
      <Router>
          <div>
              <ul>
                  <li><Link to ="/public">Public Page</Link></li>
                  <li><Link to ="/protected">Protected Page</Link></li>
              </ul>
              <Route path="/public" component={Public}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/protected" component={Protected}/>
          </div>
      </Router>
  )
}