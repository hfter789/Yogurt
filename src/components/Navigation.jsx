import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
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
			<div className="header-container">
				<Nav>
					<LinkContainer to={'/' + site}>
						<NavItem eventKey={1}>HOME</NavItem>
					</LinkContainer>
					<LinkContainer to={'/' + site + '/about'}>
						<NavItem eventKey={2}>ABOUT ME</NavItem>
					</LinkContainer>
					{ /*<NavItem eventKey={2} href='#'>Projects</NavItem> */}
					{ /*<NavItem eventKey={2} href='#'>Contact Me</NavItem> */}
				</Nav>
				<Nav pullRight>
			        <NavItem eventKey={1} href="#">Resume</NavItem>
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