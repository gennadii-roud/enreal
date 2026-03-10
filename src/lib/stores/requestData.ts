import { writable } from 'svelte/store';

const defaultState: any = {description: null, totalPrice: null, coverage: [], additionalFeatures: []};
const { subscribe, set } = writable(defaultState);

export default {
	subscribe,
	set
};