import React from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem  } from "reactstrap";
import { Link } from "gatsby";
import reactnavbarStyles from "./reactnavbar.module.css";
import logo from "../../../static/favicon.ico"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faShoppingCart, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faPhone, faShoppingCart, faStoreAlt);

export default class ReactNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    //Panier
    state = {
        items: 0
    }

    updateItemTotal = (qty) => {
        this.setState({ items: qty })
    }

    componentDidMount() {
        if (window.Snipcart) {
            //this allows it to work when switching pages
            var count = window.Snipcart.api.items.count();
            this.updateItemTotal(count)

            //this allows it to work when you add or change items
            window.Snipcart.subscribe('cart.closed', () => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            });

            //this allows it to work on refreshing the page
            window.Snipcart.subscribe('cart.ready', (data) => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            })
        }
    }

    componentWillUnmount () {
        window.Snipcart.unsubscribe('cart.closed');
        window.Snipcart.unsubscribe('cart.ready');
    }

    render() {
        return (
            <div className="bg-dark">
                <Navbar light expand="md">
                    <NavbarBrand>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className={reactnavbarStyles.padRight}>
                                <Link to={"/shop/"}>
                                    <FontAwesomeIcon icon="store-alt" size="2x"/>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <div className="snipcart-summary">
                                    <Link to={"/"} className="snipcart-checkout">
                                        <FontAwesomeIcon icon="shopping-cart" size="2x"/>
                                        ({this.state.items})
                                    </Link>
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}