import Link from "next/link";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import Verdana from "next/font/local";

const verdana = Verdana({
	src: [
		{
			path: "../public/font/Verdana.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/font/Verdana-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/font/Verdana-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/font/Verdana-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
});

export const metadata = {
	title: "dalechyn.eth",
	description: "The personal website of Vladyslav Dalechyn",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`p-10 mx-auto max-w-3xl antialiased min-h-screen ${verdana.className}`}
			>
				<header>
					<nav className="flex justify-between items-center">
						<Link href="/">Home</Link>
						<Link href="/essays">Essays</Link>
					</nav>
				</header>
				<main>{children}</main>
				<Analytics />
				<footer>
					<hr />
					<address>
						<a
							href="https://rainbow.me/dalechyn.eth"
							target="_blank"
							rel="noreferrer"
						>
							dalechyn.eth
						</a>
					</address>
				</footer>
			</body>
		</html>
	);
}
