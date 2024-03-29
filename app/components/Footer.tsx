import Image from 'next/image';
import Paragraph from './Paragraph';
import Link from 'next/link';
import logo from '@/app/assets/logo.svg';
import facebook from '@/app/assets/facebook.svg';
import linkedin from '@/app/assets/linkedin.svg';
import twitter from '@/app/assets/twitter.svg';
import instagram from '@/app/assets/instagram.svg';
import phone from '@/app/assets/phone.svg';
import email from '@/app/assets/email.svg';
import map from '@/app/assets/map.svg';

export default function Footer() {
	return (
		<footer className="bg-gray-1">
			<div className="mx-auto flex max-w-screen-xxl flex-col px-4 py-14 lg:flex-row">
				<div className="flex flex-1 flex-col gap-y-4 p-4">
					<div className="flex items-center">
						<Image
							src={logo}
							alt="image-footer"
							width={69}
						/>
						<span className="text-2xl font-bold leading-[30.24px]">
							BarryLabs.io
						</span>
					</div>
					<Paragraph className="text-sm leading-[24px]">
						Unlocking the power of AI precision, we revolutionize the way
						businesses operate. Our innovative solution automates repetitive
						tasks, saving valuable time and boosting productivity.
					</Paragraph>
					<ul className="flex gap-x-4">
						<Link href="/">
							<Image
								src={facebook}
								alt="image-footer"
								width={24}
							/>
						</Link>
						<Link href="/">
							<Image
								src={linkedin}
								alt="image-footer"
								width={24}
							/>
						</Link>
						<Link href="/">
							<Image
								src={twitter}
								alt="image-footer"
								width={24}
							/>
						</Link>
						<Link href="/">
							<Image
								src={instagram}
								alt="image-footer"
								width={24}
							/>
						</Link>
					</ul>
				</div>
				<div className="grid flex-1 gap-y-8 p-4 sm:grid-cols-3">
					<div>
						<p className="mb-8 text-[18px] font-bold leading-[22.68px]">
							Pages
						</p>
						<ul className="flex flex-col gap-y-5 text-sm font-light leading-[17.64px]">
							<Link href="/">Home</Link>
							<Link href="/">Pricing</Link>
							<Link href="/">Solution</Link>
							<Link href="/">Demo</Link>
						</ul>
					</div>
					<div>
						<p className="mb-8 text-[18px] font-bold leading-[22.68px]">
							Service
						</p>
						<ul className="flex flex-col gap-y-5 text-sm font-light leading-[17.64px]">
							<Link href="/">CV Screening</Link>
							<Link href="/">Bank statement</Link>
							<Link href="/">Invoice Analyzer</Link>
							<Link href="/">Regulatory Auditor</Link>
						</ul>
					</div>
					<div>
						<p className="mb-8 text-[18px] font-bold leading-[22.68px]">
							Contact
						</p>
						<ul className="flex flex-col gap-y-5 text-sm font-light leading-[17.64px]">
							<Link
								href="/"
								className="flex items-center gap-x-4">
								<Image
									src={phone}
									alt="image-footer"
									width={24}
								/>
								+6282126753060
							</Link>
							<Link
								href="/"
								className="flex items-center gap-x-4">
								<Image
									src={email}
									alt="image-footer"
									width={24}
								/>
								contact@berrytrada.com
							</Link>
							<Link
								href="/"
								className="flex items-center gap-x-4">
								<Image
									src={map}
									alt="image-footer"
									width={24}
								/>
								Bandung, Indonesia
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
