import { features } from '../utils/features';
import Paragraph from './Paragraph';
import Price from './Price';

export default function Features() {
	return (
		<section className="mx-auto my-12 max-w-screen-xxl px-4">
			<div className="mb-32 text-center">
				<h1 className="mb-4 text-[40px] font-bold leading-[48px]">
					Berrylabs Pricing
				</h1>
				<Paragraph className="text-2xl leading-[36px]">
					Automate Without Breaking the Bank: Affordable Solutions <br></br>
					for Every Business.
				</Paragraph>
			</div>
			<div className="flex justify-between text-base leading-[16.38px]">
				<div className="hidden min-w-[200px] xl:block">
					<div className="mt-[155px] font-semibold">Core Features</div>
					<div className="py-7 leading-[16.38px]">Files Included</div>
					<ul className="mb-12 flex flex-col gap-y-7 py-4">
						<li>Free Generations</li>
						<li>Files per Upload</li>
						<li>Pages per File</li>
						<li>File size limit</li>
						<li>High-accuracy responses</li>
						<li>Mobile-friendly interface</li>
						<li>Priority support</li>
					</ul>
				</div>
				<div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
					{features.map((item, index) => (
						<Price
							key={index}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
