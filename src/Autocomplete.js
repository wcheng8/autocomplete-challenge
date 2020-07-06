import React, { useState } from 'react'

const Autocomplete = ({possibleSearchResults}) => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div>
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            {searchValue && possibleSearchResults.filter(r => r.includes(searchValue)).map(t => <li>{t}</li>)}
        </div>
    )
}

export default Autocomplete