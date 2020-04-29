import React from 'react';
import {SearchBar} from './SearchStyles'

const Search = (props) => {

    return (

        <React.Fragment>

            <SearchBar 
            type="search" 
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e)}
            />

        </React.Fragment>

    );

};

export default Search;
