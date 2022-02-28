import styled from "styled-components";
import * as globalStyles from "../../../styles";

export const FooterContainer = styled(globalStyles.Container)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 40px;

	span {
		color: ${(props) => props.theme.colors.BLUE};
		font-size: ${(props) => props.theme.fontSizes.LARGE};
		font-weight: ${(props) => props.theme.fontWeights.BOLD};
	}
`;
