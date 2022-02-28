import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	gap: 23px;
	justify-content: space-between;
	align-items: center;
	max-width: 720px;
	align-self: flex-start;
`;

export const FilterItem = styled.div<{ width?: number }>`
	width: ${(props) => (props.width ? `${props.width}px` : "145px")};
	height: 32px;
`;

export const GenerateReportButton = styled.button`
	color: ${(props) => props.theme.colors.LIGHT};
	background-color: ${(props) => props.theme.colors.BLUE};
	width: 100%;
	font-weight: 400;
	cursor: pointer;
	border: 1px solid transparent;
	padding: 8px;
	border-radius: 5px;
`;
