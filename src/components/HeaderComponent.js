import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <i class="fa fa-ship d-none d-sm-block"></i>
                        <a class="navbar-brand" href="#">Marine-Ship</a>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-info fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/about'><span className="fa fa-list fa-lg"></span> About </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <h1>Marine-Ship Implementation</h1>
                                <p id="text1">The app is based on the closest pair approach build to avoid collision of ships taking place in marine ocean</p>
                            </div>
                            <div class="col-12 col-sm-3 align-self-center">
                                <i class="fa fa-ship" id="fa-ship-logo"></i>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;