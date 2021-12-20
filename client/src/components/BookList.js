import React from 'react'
import { useQuery } from "@apollo/client";
import getBooksQuery from './graphql/getbooks'


function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    console.log(data)

    return data.books.map(({ name, genre, id }) => (
        <div key={id}>
          <ul id="book-list">
            <li>{name} - ({genre})</li>
          </ul>
        </div>
    ));

}

export default BookList;
