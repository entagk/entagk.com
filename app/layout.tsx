import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";

export const metadata: Metadata = {
	title: "Entagk",
	description:
		"Enhance productivity with Entagk: your all-in-one toolkit featuring a Pomodoro timer, sticky notes, to-do lists, and an activity tracker.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`min-h-screen`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
