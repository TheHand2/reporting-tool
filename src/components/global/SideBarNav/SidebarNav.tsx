import { FC } from "react";
import appsIcon from "../../../assets/images/appsIcon.svg";
import infoIcon from "../../../assets/images/infoIcon.svg";
import logoutIcon from "../../../assets/images/logoutIcon.svg";
import reportsIcon from "../../../assets/images/reportsIcon.svg";
import statisticIcon from "../../../assets/images/statisticIcon.svg";
import * as styles from "./styles";
import { SidebarNavItem } from "./types";

/**
 * Sidebar component
 */
const SidebarNav: FC = () => {
	// Navigation elements
	const navItems: SidebarNavItem[] = [
		{
			icon: statisticIcon,
			url: "/statistic",
		},
		{
			icon: appsIcon,
			url: "/apps",
		},
		{
			icon: infoIcon,
			url: "/info",
		},
		{
			icon: reportsIcon,
			url: "/reports",
		},
		{
			icon: logoutIcon,
			url: "/logout",
		},
	];
	return (
		<styles.SidebarContainer>
			{navItems.map((navItem, index) => (
				<styles.SidebarNavItem key={navItem.url + index} to={navItem.url}>
					<img src={navItem.icon} alt={"sidebarNavItem" + index} />
				</styles.SidebarNavItem>
			))}
		</styles.SidebarContainer>
	);
};

export default SidebarNav;
