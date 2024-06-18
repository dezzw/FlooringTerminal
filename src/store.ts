// store.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value (empty array)
export const productsData = writable([
	{
		name: 'Bay',
		path: '/6mm/Bay.JPG',
		scene: '/6mm/Bay_Scene.jpg',
		mobile: '/6mm/Bay_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'High Park',
		path: '/6mm/HighPark.JPG',
		scene: '/6mm/HighPark_Scene.jpg',
		mobile: '/6mm/HighPark_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Kipling',
		path: '/6mm/Kipling.JPG',
		scene: '/6mm/Kipling_Scene.jpg',
		mobile: '/6mm/Kipling_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Spadina',
		path: '/6mm/Spadina.JPG',
		scene: '/6mm/Spadina_Scene.jpg',
		mobile: '/6mm/Spadina_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Summer Hill',
		path: '/6mm/Summerhill.JPG',
		scene: '/6mm/Summerhill_Scene.jpg',
		mobile: '/6mm/Summerhill_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Union',
		path: '/6mm/Union.JPG',
		scene: '/6mm/Union_Scene.jpg',
		mobile: '/6mm/Union_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Wellesley',
		path: '/6mm/Wellesley.JPG',
		scene: '/6mm/Wellesley_Scene.jpg',
		mobile: '/6mm/Wellesley_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Wynford',
		path: '/6mm/Wynford.JPG',
		scene: '/6mm/Wynford_Scene.jpg',
		mobile: '/6mm/Wynford_Mobile.jpg',
		type: '6mm'
	},
	{
		name: 'Changi',
		path: '/7mm/Changi.JPG',
		scene: '/7mm/Changi_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Dubai',
		path: '/7mm/Dubai.JPG',
		scene: '/7mm/Dubai_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Narita',
		path: '/7mm/Narita.jpg',
		scene: '/7mm/Narita_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Haneda',
		path: '/7mm/Haneda.JPG',
		scene: '/7mm/Haneda_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'lncheon',
		path: '/7mm/lncheon.JPG',
		scene: '/7mm/lncheon_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Frankfurt',
		path: '/7mm/Frankfurt.jpg',
		scene: '/7mm/Frankfurt_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Gatwick',
		path: '/7mm/Gatwick.jpg',
		scene: '/7mm/Gatwick_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Meilan',
		path: '/7mm/Meilan.JPG',
		scene: '/7mm/Meilan_Scene.jpg',
		type: '7mm'
	},
	{
		name: 'Pearson',
		path: '/7mm/Pearson.JPG',
		scene: '/7mm/Pearson_Scene.jpg',
		type: '7mm'
	}
]);
