import React from 'react';

const Search = (props) => {



    return (

        <React.Fragment>

            <input 
            type="search" 
            placeholder="Search For Pokemon"
            onChange={(e) => props.onChange(e)}
            />

        </React.Fragment>

    );

};

export default Search;