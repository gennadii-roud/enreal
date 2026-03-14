import { writable } from 'svelte/store';

interface RequestData {
	description: string | null;
	totalPrice: number | null;
	coverage: { number: number | string; price: string } | null;
	additionalFeatures: { name: string }[];
}

const defaultState: RequestData = {description: null, totalPrice: null, coverage: null, additionalFeatures: []};
const { subscribe, set } = writable(defaultState);

export default {
	subscribe,
	set
};