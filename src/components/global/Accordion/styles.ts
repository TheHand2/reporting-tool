import { Accordion, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import styled from "styled-components";

// export const AccordionItemElement = styled(AccordionItem)`
// 	display: flex;
// 	border: 0;
// `;

export const AccordionContainer = styled(Accordion)`
	display: flex;
	flex-direction: column;
	gap: 4px;

	.accordion__item {
		border: 0;
	}
`;

export const AccordionElementButton = styled(AccordionItemButton)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${(props) => props.theme.fontSizes.LARGE};
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
	padding: 26px 24px;
	color: ${(props) => props.theme.colors.BLACK};
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.LIGHT};
	border-radius: 10px;
`;
