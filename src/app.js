import storage from './storage';

export default function increment() {
	const h1 = document.getElementById('count');
	h1.innerHTML = ++storage.clicks;
}