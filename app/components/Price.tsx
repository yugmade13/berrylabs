import { FeatureProps } from '../utils/features';
import Button from './Button';
import Image from 'next/image';
import check from '@/app/assets/check.svg';
import question from '@/app/assets/question.svg';
import clsx from 'clsx';

const Price = (props: FeatureProps) => {
	const {
		id,
		coreFeatures,
		fileIncluded,
		freeGenerations,
		filesPerUpload,
		pagesPerFile,
		fileSizeLimit,
		highAccuracyResponses,
		mobileFriendlyInterface,
		prioritySupport,
		buttonText,
		isRecommended,
	} = props;

	return (
		<div
			className={clsx(
				'relative rounded-lg border text-center lg:border-0',
				isRecommended && 'border-2 border-purple-1',
				id % 2 !== 0 ? 'bg-gray-1' : 'bg-white',
			)}>
			{isRecommended && (
				<div
					className="rounded-full border border-purple-1 bg-purple-2 px-6 py-2 text-white"
					style={{
						position: 'absolute',
						left: '50%',
						top: '-2px',
						transform: 'translate(-50%,-50%)',
					}}>
					Best Seller
				</div>
			)}
			<header className="flex flex-col gap-y-4 py-4">
				<p className="text-2xl lg:text-xl leading-[25.2px] text-black-2 mt-2">
					{coreFeatures.category}
				</p>
				<p className="mb-3 text-lg lg:text-md leading-[16.38px] text-gray-2">
					{coreFeatures.description}
				</p>
				<h1 className="leading=[39.88px] text-3xl lg:text-[34px] font-bold text-black-1">
					IDR {coreFeatures.price}
				</h1>
			</header>
			<div
				className={clsx(
					'flex w-full justify-center gap-x-1 py-6',
					id % 2 !== 0 ? 'bg-white' : 'bg-gray-1',
				)}>
				<p className="text-lg lg:text-md leading-[16.38px] text-black-2">
					{fileIncluded} Files
				</p>
				<Image
					src={question}
					alt="question"
					width={12}
					height={12}
					style={{ cursor: 'pointer' }}
				/>
			</div>
			<ul className="mb-12 flex flex-col items-center gap-y-5 py-4">
				<li className="flex justify-center gap-x-1 text-lg lg:text-md leading-[16.38px] text-black-2">
					{freeGenerations}
					<Image
						src={question}
						alt="question"
						width={12}
						height={12}
						style={{ cursor: 'pointer' }}
					/>
				</li>
				<li className="flex justify-center gap-x-1 text-lg lg:text-md leading-[16.38px] text-black-2">
					{filesPerUpload}
					<Image
						src={question}
						alt="question"
						width={12}
						height={12}
						style={{ cursor: 'pointer' }}
					/>
				</li>
				<li className="flex justify-center gap-x-1 text-lg lg:text-md leading-[16.38px] text-black-2">
					{pagesPerFile}
					<Image
						src={question}
						alt="question"
						width={12}
						height={12}
						style={{ cursor: 'pointer' }}
					/>
				</li>
				<li className="flex justify-center gap-x-1 text-lg lg:text-md leading-[16.38px] text-black-2">
					{fileSizeLimit} MB
					<Image
						src={question}
						alt="question"
						width={12}
						height={12}
						style={{ cursor: 'pointer' }}
					/>
				</li>
				<li>
					{highAccuracyResponses ? (
						<Image
							src={check}
							alt="images"
							width={24}
							height={24}
						/>
					) : (
						'🙏🏻'
					)}
				</li>
				<li>
					{mobileFriendlyInterface ? (
						<Image
							src={check}
							alt="images"
							width={24}
							height={24}
						/>
					) : (
						'🙏🏻'
					)}
				</li>
				<li>
					{prioritySupport ? (
						<Image
							src={check}
							alt="images"
							width={24}
							height={24}
						/>
					) : (
						'🙏🏻'
					)}
				</li>
			</ul>
			<Button
				className={clsx(
					'leading=[17.64px] mb-4 text-sm font-semibold',
					buttonText === 'Select'
						? 'hover:bg-purple-3 hover:text-white'
						: 'bg-purple-2 text-white hover:bg-purple-3',
				)}>
				{buttonText}
			</Button>
		</div>
	);
};

export default Price;
