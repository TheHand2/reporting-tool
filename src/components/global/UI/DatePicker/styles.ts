import styled from "styled-components";

export const DatePickerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: ${(props) => props.theme.colors.GREEN};
	height: 32px;
	border-radius: 5px;
	padding-left: 13px;
	font-size: ${(props) => props.theme.fontSizes.MEDIUM};
	font-weight: ${(props) => props.theme.fontWeights.NORMAL};
	color: ${(props) => props.theme.colors.LIGHT};
	border: 1px solid transparent;
	::placeholder {
		color: ${(props) => props.theme.colors.LIGHT};
	}
	img {
		margin-right: 9px;
	}
`;
