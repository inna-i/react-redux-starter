const extractUrlParam = name => {
	const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export default extractUrlParam;
