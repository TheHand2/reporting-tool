import { FC } from "react";
import burgerIcon from "../../../assets/images/burgerIcon.svg";
import logo from "../../../assets/images/logo.svg";
import * as styles from "./styles";

/**
 * Navbar component
 */
const NavBar: FC = () => {
	return (
		<styles.NavBarContainer>
			<styles.LogoContainer to={"/"}>
				<img src={logo} alt="logo" />
			</styles.LogoContainer>
			<styles.NavbarElementsContainer>
				<styles.BurgerImage image={burgerIcon} />
				<styles.UserInfoContainer>
					<styles.UserAvatar>JD</styles.UserAvatar>
					<span>John Doe</span>
				</styles.UserInfoContainer>
			</styles.NavbarElementsContainer>
		</styles.NavBarContainer>
	);
};

export default NavBar;
