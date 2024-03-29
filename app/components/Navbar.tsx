'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoNavbar from '@/app/assets/logo-navbar.svg';
import menu from '@/app/assets/menu.svg';
import close from '@/app/assets/close.svg';
import down from '@/app/assets/down.svg';
import Button from './Button';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
	};

	return (
		<header className="relative mx-auto max-w-screen-xxl px-4 py-6 md:px-8">
			<nav className="flex w-full items-center justify-between">
				<div className="flex w-full items-center justify-between gap-x-12 lg:w-2/3 lg:justify-start">
					<Link href="/">
						<Image
							src={logoNavbar}
							alt="logo-navbar"
							width={182}
							height={50}
						/>
					</Link>
					<ul className="hidden gap-x-12 text-xl font-medium leading-[30.24px] text-black-3 lg:flex">
						<li>
							<Link
								href="/"
								className="flex items-center gap-4">
								Products
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="flex items-center gap-4">
								Solutions
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="flex items-center gap-4">
								Pricing
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
						</li>
					</ul>
					<button
						className="lg:hidden"
						onClick={handleOpenMenu}>
						<Image
							src={menu}
							alt="image-menu"
							width={24}
							height={24}
						/>
					</button>
				</div>
				<Button className="hidden bg-purple-2 text-xl leading-[30.24px] text-white hover:bg-purple-3 lg:block">
					Get Started
				</Button>
			</nav>
			{isOpen && (
				<div className="fixed left-0 right-0 top-0 z-10 p-4">
					<div className="relative h-screen w-full rounded-lg border bg-white">
						<button
							onClick={handleOpenMenu}
							className="absolute right-0 top-0 p-4">
							<Image
								src={close}
								alt="image-close"
								width={24}
								height={24}
							/>
						</button>
						<ul className="flex h-3/4 flex-col items-center justify-center gap-y-16 text-3xl">
							<Link
								href="/"
								className="flex items-center gap-4">
								Products
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="/"
								className="flex items-center gap-4">
								Solutions
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="/"
								className="flex items-center gap-4">
								Pricing
								<Image
									src={down}
									alt="image-down"
									width={24}
									height={24}
								/>
							</Link>
							<Button className=" bg-purple-2 text-xl leading-[30.24px] text-white hover:bg-purple-3">
								Get Started
							</Button>
						</ul>
					</div>
				</div>
			)}
		</header>
	);
}
