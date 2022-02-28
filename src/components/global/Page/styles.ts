import styled, { keyframes } from "styled-components";

export const PageHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const PageTitleSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 319px;
	gap: 4px;
`;

export const PageTitle = styled.span`
	font-size: ${(props) => props.theme.fontSizes.H1};
	color: ${(props) => props.theme.colors.BLACK};
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
`;

export const PageSubTitle = styled.span`
	font-size: ${(props) => props.theme.fontSizes.LARGE};
	color: ${(props) => props.theme.colors.GRAY1};
	font-weight: ${(props) => props.theme.fontWeights.BOLD};
`;

export const PageContent = styled.div`
	display: flex;
	margin-top: 25px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);

	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 70px;
	height: 70px;
	border-radius: 50%;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
`;
