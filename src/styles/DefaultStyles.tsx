import { createGlobalStyle } from "styled-components";

/**
 * Global styles for project
 */
export const GlobalStyle = createGlobalStyle`
	html{
		height: 100%;
	}
  body {
    position: relative;
    margin: 0;
    padding-bottom: 80px;
    min-height: 100%;
    width: 100%;
    font-size: 14px;
    font-family: "Roboto",sans-serif;
  }
	*{
		box-sizing: border-box;
	}

`;
