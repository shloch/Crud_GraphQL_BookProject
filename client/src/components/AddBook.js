import React from 'react'
import { useQuery } from "@apollo/client";
import getAuthorsQuery from './graphql/getAuthors'

function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return <p>Loading authors...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text"/>
            </div>
        
            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>
        
            <div className="field">
                <label>Author:</label>
                <select>
                    {data.authors.map(({ name, id }) => (
                        <option key={id}>{name}</option>
                    ))};
                    <option>NO ONE</option>
                </select>
            </div>
        
            <button></button>
        </form>
    )
}

export default AddBook;
