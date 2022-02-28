import "@fontsource/roboto";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/global/Footer";
import NavBar from "./components/global/NavBar";
import SidebarNav from "./components/global/SideBarNav";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReportsPage from "./pages/ReportsPage";
import * as styles from "./styles";
import { GlobalStyle } from "./styles/DefaultStyles";
import theme from "./theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<NavBar />
				<SidebarNav />
				<styles.PageContainer>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="reports" element={<ReportsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</styles.PageContainer>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
