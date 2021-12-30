import React from 'react'
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../graphql/queries'
import { useState } from 'react';
import { flowRight as compose } from 'lodash';
import { graphql } from '@apollo/client/react/hoc';


function AddBook(props) {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [addBook] = useMutation(addBookMutation, {
        refetchQueries: [ { query: getBooksQuery } ]
    });

    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return <p>Loading authors...</p>;
    if (error) return <p>Error :(</p>;
    
    const submitForm= (e) => {
        e.preventDefault();
        console.log('form submitted')
        addBook({
            variables: {name: name, genre: genre, authorId: authorId}
        });
    }
    
    return (
        <form id="add-book" onSubmit={e => { submitForm(e) }}>

            <div className="field">
                <label>Book name:</label>
                <input type="text" name="name" onChange={e => setName(e.target.value)}/>
            </div>
        
            <div className="field">
                <label>Genre:</label>
                <input type="text" name="genre" onChange={e => setGenre(e.target.value)}/>
            </div>
        
            <div className="field">
                <label>Author:</label>
                <select name="authorId" onChange={e => setAuthorId(e.target.value)}>
                    {data.authors.map(({ name, id }) => (
                        <option key={id} value={id}>{name}</option>
                    ))};
                </select>
            </div>
        
            <button> +</button>

        </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, {name: "addBookMutation"}),
)(AddBook);
