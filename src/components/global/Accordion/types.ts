import { ReactElement } from "react";

export interface AccordionElementProp {
	/** Titles of the Accordion element */
	titles: string[];
	/** Component which will be rendered inside Accordion element */
	component: ReactElement;
}
