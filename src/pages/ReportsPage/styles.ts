import styled from "styled-components";

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.BLUE1};
	padding: 18px;
	gap: 36px;
	border-radius: 10px;
	width: 100%;
`;

export const SectionTitle = styled.div`
	display: flex;
	font-size: ${(props) => props.theme.fontSizes.LARGE};
	color: ${(props) => props.theme.colors.BLACK};
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
`;
