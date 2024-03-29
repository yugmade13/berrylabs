import Button from './Button';
import Paragraph from './Paragraph';

export default function CTA() {
	return (
		<section className="my-14 flex flex-col items-center justify-center gap-y-8 px-4">
			<h2 className="max-w-screen-xl text-center text-4xl font-bold leading-[56px] md:text-[48px] lg:text-[64px] md:leading-[76px]">
				{"Haven't found which package is"}
				<br></br>
				{'right for you?'}
			</h2>
			<Paragraph className="text-center text-xl leading-7 md:text-2xl md:leading-[40px]">
				{
					"We've got you covered! Talk to our experts to find the best solution for you, anytime for free!"
				}
			</Paragraph>
			<Button className="bg-purple-2 text-xl leading-[30.24px] text-white hover:bg-purple-3 md:text-2xl">
				Talk to expert
			</Button>
		</section>
	);
}
