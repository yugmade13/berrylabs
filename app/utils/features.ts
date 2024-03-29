export type FeatureProps = {
	id: number;
	coreFeatures: {
		category: string;
		description: string;
		price: string;
		title?: string;
	};
	fileIncluded: number;
	freeGenerations: number;
	filesPerUpload: string;
	pagesPerFile: string;
	fileSizeLimit: number;
	highAccuracyResponses: boolean;
	mobileFriendlyInterface: boolean;
	prioritySupport: boolean;
	buttonText: string;
	isRecommended: boolean;
};

export const features: FeatureProps[] = [
	{
		id: 1,
		coreFeatures: {
			category: 'Free',
			description: 'Suitable for Starter',
			price: '0',
		},
		fileIncluded: 100,
		freeGenerations: 100,
		filesPerUpload: 'Up to 25 Files',
		pagesPerFile: '2 pages per File',
		fileSizeLimit: 4,
		highAccuracyResponses: true,
		mobileFriendlyInterface: true,
		prioritySupport: true,
		buttonText: 'Get Started Free',
		isRecommended: false,
	},
	{
		id: 2,
		coreFeatures: {
			category: 'Basic',
			description: 'Suitable for Generalist',
			price: '299.000',
		},
		fileIncluded: 250,
		freeGenerations: 100,
		filesPerUpload: 'Up to 50 Files',
		pagesPerFile: '5 pages per File',
		fileSizeLimit: 4,
		highAccuracyResponses: true,
		mobileFriendlyInterface: true,
		prioritySupport: true,
		buttonText: 'Select',
		isRecommended: false,
	},
	{
		id: 3,
		coreFeatures: {
			category: 'Pro',
			description: 'Suitable for Specialist',
			price: '590.000',
		},
		fileIncluded: 500,
		freeGenerations: 100,
		filesPerUpload: 'Up to 100 Files',
		pagesPerFile: '10 pages per File',
		fileSizeLimit: 4,
		highAccuracyResponses: true,
		mobileFriendlyInterface: true,
		prioritySupport: true,
		buttonText: 'Select',
		isRecommended: true,
	},
	{
		id: 4,
		coreFeatures: {
			category: 'Premium',
			description: 'Suitable for Agressive Specialist',
			price: '999.000',
		},
		fileIncluded: 1000,
		freeGenerations: 100,
		filesPerUpload: 'Up to 150 Files',
		pagesPerFile: '15 pages per File',
		fileSizeLimit: 16,
		highAccuracyResponses: true,
		mobileFriendlyInterface: true,
		prioritySupport: true,
		buttonText: 'Select',
		isRecommended: false,
	},
];
