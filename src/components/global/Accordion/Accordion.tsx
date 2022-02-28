import { FC } from "react";
import {
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import * as styles from "./styles";
import { AccordionElementProp } from "./types";

interface AccordionElementProps {
	/** Accordion items */
	items: AccordionElementProp[];
}

const AccordionElement: FC<AccordionElementProps> = ({ items }) => {
	return (
		<styles.AccordionContainer allowZeroExpanded allowMultipleExpanded>
			{items.map((item, index) => (
				<AccordionItem key={item.titles[0] + index}>
					<AccordionItemHeading>
						<styles.AccordionElementButton>
							{item.titles.map((title, index) => (
								<span key={title + index}>{title}</span>
							))}
						</styles.AccordionElementButton>
					</AccordionItemHeading>
					<AccordionItemPanel>{item.component}</AccordionItemPanel>
				</AccordionItem>
			))}
		</styles.AccordionContainer>
	);
};

export default AccordionElement;
