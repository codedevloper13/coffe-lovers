/** @format */

import { useState } from "react";

const UserTrackLocation = () => {
	const [locationErrMsg, setlocationErrMsg] = useState("");
	const [LatLong, setLatLong] = useState("");

	const success = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		setLatLong(`${latitude},${longitude}`);
		setlocationErrMsg("");
	};

	const error = () => {
		setlocationErrMsg("Unable to retrieve your location");
	};

	const handleTrackLocation = () => {
		if (!navigator.geolocation) {
			setlocationErrMsg("Geolocation is not supported by your browser");
		} else {
			status.textContent = "Locating…";
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	return {
		LatLong,
		handleTrackLocation,
		locationErrMsg,
	};
};

export default UserTrackLocation;
