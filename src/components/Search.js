import React from "react";

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    return (
        <InputGroup className="container">
        <FontAwesomeIcon icon={faSearch}  className="icon"/>
            <FormControl
            placeholder="" 
            type="text"
            className="search"
            onChange={(e) => props.onSearch(e.target.value)}
            value={props.value}
            />
        </InputGroup>
    )
}

export default Search;