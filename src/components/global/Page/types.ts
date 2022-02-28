import { ReactElement } from "react";

export interface PageProps {
	/** Title of the page */
	title: string;
	/** SubTitle of the page */
	subTitle: string;
	/**
	 * Determines if page is in loading state
	 * Default is false
	 */
	loading?: boolean;
	/** Page action component which will be rendered on right side */
	actionComponent?: ReactElement;
}
