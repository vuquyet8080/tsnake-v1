"use client";

import { ThemeProvider } from "@material-tailwind/react";
import AuthContextProvider from "../../context/authContext";
export default function ThemeProviderWrap({ children }: any) {
	return (
		<ThemeProvider>
			<AuthContextProvider>{children}</AuthContextProvider>
		</ThemeProvider>
	);
}
