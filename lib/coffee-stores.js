/** @format */

/**
 * Get Url for Coffee stores..
 */

const getUrlForCoffeeStores = (latlong, query, limit) => {
	return process.env.FOUTSQUARE_API_URL + `/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
};

// Get coffee stores from lat and long
export const fetchCooffeStores = async () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: process.env.FOUTSQUARE_API_KEY,
		},
	};

	const response = await fetch(getUrlForCoffeeStores("23.119520169890254%2C72.57985903467701", "coffee", 9), options);
	const data = await response.json();
	return data.results;
	// .then((response) => response.json())
	// .then((response) => console.log(response))
	// .catch((err) => console.error(err));
};
