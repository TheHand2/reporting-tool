import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CONTAINER_LEFT_SPACER } from "../utils/constant";

export const SidebarContainer = styled.div`
	position: absolute;
	left: 0;
	top: 123px;
	gap: 26px;
	display: flex;
	flex-direction: column;
	padding-left: ${CONTAINER_LEFT_SPACER};
`;

export const SidebarNavItem = styled(NavLink)<{ active?: boolean }>`
	filter: grayscale(100%);

	&.active {
		filter: unset;
	}
`;
