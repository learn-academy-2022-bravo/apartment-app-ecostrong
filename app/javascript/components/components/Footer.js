import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    console.log("current_user:", current_user)
    return (
      <>
      <h3>Footer</h3>
      <p>&copy; Neco Armstrong</p>
      <Nav>
        {logged_in &&
           <NavItem>
           <a href={sign_out_route} className="nav-link">Sign Out</a>
         </NavItem>
       }
       {!logged_in &&
         <NavItem>
           <a href={sign_in_route} className="nav-link">Sign In</a>
         </NavItem>
       }
       {!logged_in &&
         <NavItem>
           <a href={new_user_route} className="nav-link">Sign Up</a>
         </NavItem>
       }
     </Nav>
   </>
 )
}
}