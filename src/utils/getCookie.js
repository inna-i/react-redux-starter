export default function getCookie(value) {
	return `; ${document.cookie}`
		.split(`; ${value}=`)
		.pop()
		.split(';')
		.shift();
}
