import { writable } from 'svelte/store';

const { subscribe, set } = writable(false);

export default {
	subscribe,
	set
};