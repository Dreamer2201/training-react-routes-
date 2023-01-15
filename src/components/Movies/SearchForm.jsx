import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchForm(props) {
    const [query, setQuery] = useState('');

    const handleChangeInput = (e) => {
        console.log('input change');
        setQuery(e.target.value);
    }
    const submitForm = (e) => {

        e.preventDefault();
        console.log('submit button');
        props.onSubmitForm(query);
        // setQuery('');
    }

    return (
        <form onSubmit={submitForm}>
            <input name="search" value={query} placeholder="Enter your query" onChange={ handleChangeInput } />
            <button type="submit" >Search movie</button>
        </form>
    )
}