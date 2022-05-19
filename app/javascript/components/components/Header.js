import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    // console.log("logged_in:", logged_in)
    // console.log("current_user:", current_user)
    return (
      <>
        <h3>Sustainable Living Community</h3>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={`/apartmentindex/`} className="nav-link">Our Domes</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Book a Tour!</a>
            </NavItem>
          }
            <img src="https://pacificdomes.com/WP/wp-content/uploads/2021/02/dome-homes-featured.jpg"alt="logo for dome" className="domehome" />
        </Nav>
      </>
    )
  }
}
export default Header
