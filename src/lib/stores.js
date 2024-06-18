// src/lib/stores.js
import { writable, derived } from 'svelte/store';

const mediaQuery = '(max-width: 767px)'; // Adjust this to your desired mobile breakpoint

let isMobile;

if (typeof window !== 'undefined') {
	const mediaQueryList = window.matchMedia(mediaQuery);
	isMobile = writable(mediaQueryList.matches);

	mediaQueryList.addEventListener('change', (event) => {
		isMobile.set(event.matches);
	});
} else {
	// Default value for SSR or non-browser environments
	isMobile = writable(false);
}

export const mobile = derived(isMobile, ($isMobile) => $isMobile);
