import { Link } from "react-router-dom";
import styled from "styled-components";
import * as globalStyles from "../../../styles/";
import { CONTAINER_LEFT_SPACER, NAVBAR_HEIGHT } from "../utils/constant";

export const NavBarContainer = styled.div`
	height: ${NAVBAR_HEIGHT};
	display: flex;
	position: relative;
	align-items: center;
	border-bottom: 2px solid #f3f6f9;
	justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
	position: absolute;
	text-decoration: none;
	left: ${CONTAINER_LEFT_SPACER};
`;

export const NavbarElementsContainer = styled(globalStyles.Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BurgerImage = styled.div<{ image: string }>`
	width: 31px;
	height: 27px;
	cursor: pointer;
	background-image: url(${(props) => props.image});
`;

export const UserInfoContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	span {
		font-size: ${(props) => props.theme.fontSizes.LARGE};
		margin-left: 11px;
		font-weight: ${(props) => props.theme.fontWeights.BOLD};
		color: ${(props) => props.theme.colors.BLUE};
	}
`;

export const UserAvatar = styled.div`
	width: 43px;
	height: 43px;
	background: #f6ca65;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 23px;
	color: ${(props) => props.theme.colors.LIGHT};
`;
