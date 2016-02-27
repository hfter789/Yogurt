import React from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import config from '../../configs/config.json';

const Navigation = React.createClass({

	renderBrand(brand) {
		if (brand) {
			return (
					<Navbar.Brand>
						<a href='#' style={{
							paddingRight: '80px',
							fontFamily: 'cursive'
						}}>{brand}</a>
					</Navbar.Brand>
			);
		}
	},

	renderNavItems(site) {
		return (
			<div className='header-container'>
				<Nav>
					<LinkContainer to={'/' + site}>
						<NavItem eventKey={1}>Home</NavItem>
					</LinkContainer>
					<LinkContainer to={'/' + site + '/about'}>
						<NavItem eventKey={2}>About</NavItem>
					</LinkContainer>
				</Nav>
				<Nav pullRight>
					<NavDropdown eventKey={3} title='Find Me' id='nav-dropdown'>
						{ config[site].contacts.map(function (contact) {
							return <a style={{
								display: 'block',
								padding: '0 10px',
								textAlign: 'center',
								height: '30px',
								lineHeight: '30px'
							}}class='dropdown-item' href={contact.link}>{contact.name}</a>;
						})}
					</NavDropdown>
				</Nav>
			</div>
		);
	},

	render: function() {
		// let site = this.props.route.site;
		let site = 'jimmy';
		let siteConfig = config[site];
		return (
			<div>
				<Navbar inverse fixedTop>
					<Navbar.Header>
						{ this.renderBrand(siteConfig.brand) }
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						{ this.renderNavItems(site) }
					</Navbar.Collapse>
				</Navbar>
				{ this.props.children }
			</div>
		);
	}
});

module.exports = Navigation;