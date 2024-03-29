import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BerryLabs.io',
	description:
		'Automate Without Breaking the Bank: Affordable Solutions for Every Business.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<div className="relative w-full">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
