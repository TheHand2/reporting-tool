import styled from "styled-components";

export const StyledTable = styled.table`
	border: none;
	border-collapse: collapse;
	width: 100%;
	td,
	th {
		height: 35px;
		border: none;
		padding-left: 10px;
		font-size: ${(props) => props.theme.fontSizes.LARGE};
		font-weight: ${(props) => props.theme.fontWeights.NORMAL};
		color: ${(props) => props.theme.colors.BLACK};
		text-align: left;
	}

	td {
		text-align: left;
		font-size: ${(props) => props.theme.fontSizes.LARGE};
		font-weight: ${(props) => props.theme.fontWeights.NORMAL};
		color: ${(props) => props.theme.colors.BLACK};
		padding: 5px 10px;
	}

	tbody tr {
		:nth-of-type(even) {
			background-color: ${(props) => props.theme.colors.LIGHT};
		}
		:hover {
			background-color: ${(props) => props.theme.colors.GRAY};
		}
	}
	thead > tr {
		background-color: ${(props) => props.theme.colors.LIGHT};
	}
`;
