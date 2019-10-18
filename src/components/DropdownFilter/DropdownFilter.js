import React, {useEffect} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import dropdownFilterStyles from "./DropdownFilter.module.css"

export default class DropdownFilter extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={dropdownFilterStyles.padTop}>
                <DropdownToggle caret>
                    Trier par
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Choix des filtres</DropdownItem>
                    <DropdownItem id="prixMax">Prix +</DropdownItem>
                    <DropdownItem id="prixMin">Prix -</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}