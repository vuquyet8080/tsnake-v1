import ThemeProvider from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import AuthProvider from "./auth-provider";

const font = Rubik({ subsets: ["cyrillic"] });
export const metadata: Metadata = {
	title: "Telegram Auth",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <ThemeProvider>
		<AuthProvider>
			<html lang="en">
				<ThemeProvider>
					<body className={font.className}>
						<div
							className={` bg-secondary-100 flex  items-center justify-center `}
						>
							<div className="fixed top-0 z-10 flex flex-row items-center w-full h-16 px-4 bg-white border shadow-md">
								<div className="relative h-12 w-36">
									<Image
										alt="banner"
										src={"/images/logo.png"}
										layout="fill"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
							</div>

							<div className="w-full h-full max-w-screen-xl min-h-screen px-4 pt-16 md:px-10 ">
								<main>{children}</main>
							</div>
						</div>
					</body>
				</ThemeProvider>
			</html>
		</AuthProvider>
		// </ThemeProvider>
	);
}
