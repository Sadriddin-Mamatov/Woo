import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
} from './NavbarStyles';
import Logo from "../../img/LOGO.png"
    const Navbar = () => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
	<Fragment>
		<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="#"><img src={Logo} alt="logotip"/></NavLogo>
			<MobileIcon>
			<FaBars />
			</MobileIcon>
			<NavMenu>
				<NavItem>
				<NavLinks href="#">Sell</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Marketplace</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Community</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Develop</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Resources</NavLinks>
				</NavItem>
			</NavMenu>
		</NavContainer>
		</Nav>
	</Fragment>
	)
}

export default Navbar;
