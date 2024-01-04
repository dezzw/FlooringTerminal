// store.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value (empty array)
export const productsData = writable([
	{
		name: 'Bay',
		path: '/6mm/Bay.jpg',
		scene: '/6mm/Bay_Scene.jpg',
		mobile: '/6mm/Bay_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'High Park',
		path: '/6mm/HighPark.jpg',
		scene: '/6mm/HighPark_Scene.jpg',
		mobile: '/6mm/HighPark_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Kipling',
		path: '/6mm/Kipling.jpg',
		scene: '/6mm/Kipling_Scene.jpg',
		mobile: '/6mm/Kipling_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Spadina',
		path: '/6mm/Spadina.jpg',
		scene: '/6mm/Spadina_Scene.jpg',
		mobile: '/6mm/Spadina_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Summer Hill',
		path: '/6mm/Summerhill.jpg',
		scene: '/6mm/Summerhill_Scene.jpg',
		mobile: '/6mm/Summerhill_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Union',
		path: '/6mm/Union.jpg',
		scene: '/6mm/Union_Scene.jpg',
		mobile: '/6mm/Union_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Wellesley',
		path: '/6mm/Wellesley.jpg',
		scene: '/6mm/Wellesley_Scene.jpg',
		mobile: '/6mm/Wellesley_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Wynford',
		path: '/6mm/Wynford.jpg',
		scene: '/6mm/Wynford_Scene.jpg',
		mobile: '/6mm/Wynford_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Changi',
		path: '/7mm/Changi.jpg',
		scene: '/7mm/Changi_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Dubai',
		path: '/7mm/Dubai.jpg',
		scene: '/7mm/Dubai_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Hamad',
		path: '/7mm/Hamad.jpg',
		scene: '/7mm/Hamad_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Haneda',
		path: '/7mm/Haneda.jpg',
		scene: '/7mm/Haneda_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'lncheon',
		path: '/7mm/lncheon.jpg',
		scene: '/7mm/lncheon_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Long Beach',
		path: '/7mm/LongBeach.jpg',
		scene: '/7mm/LongBeach_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Meilan',
		path: '/7mm/Meilan.jpg',
		scene: '/7mm/Meilan_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Pearson',
		path: '/7mm/Pearson.jpg',
		scene: '/7mm/Pearson_Scene.jpg',
		type: '7mm'
	}
]);
