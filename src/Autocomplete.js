import React, { useState } from "react";

const Autocomplete = ({ possibleSearchResults }) => {
	const [search, setSearch] = useState("");
	const [countrylist, setCountryList] = useState([]);
	function findcountry(e) {
		setSearch(e.target.value);
		setCountryList(
			possibleSearchResults.filter((country) =>
				country.toLowerCase().includes(search)
			)
		);
	}
	return (
		<div>
			Autocomplete Here:
			<br />
			<input type="text" value={search} onChange={findcountry} />
			{countrylist.map((country) => (
				<li>{country}</li>
			))}
		</div>
	);
};

export default Autocomplete;
