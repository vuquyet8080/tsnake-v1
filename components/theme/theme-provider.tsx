"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function ThemeProviderWrap({ children }: any) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
