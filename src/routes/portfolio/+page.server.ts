import { casesData } from '$lib/data/casesData';

export const load = (): { cases: MediaCardProps[] } => {
	return {
		cases: casesData as MediaCardProps[]
	};
};