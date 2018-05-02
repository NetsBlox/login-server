function getQueryStringValue(name) {
	const pair = window.location.search.slice(1).split('&')
		.map(pair => {
			const keyVal = pair.split('=');
			keyVal[1] = decodeURIComponent(keyVal[1]);
			return keyVal;
		})
		.find(pair => pair[0] === name);

    return pair && pair.pop();
}
