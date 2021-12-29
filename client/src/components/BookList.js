import React from 'react'
import { useQuery } from "@apollo/client";
import { getBooksQuery } from '../graphql/queries'
import BookDetails from './BookDetails';
import { useState } from 'react';


function BookList() {
  const [selectedID, setSelectedID] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list" >
        {data.books.map(({ name, genre, id }) => (
          <li key={id} onClick={(e) => { setSelectedID(id) }}>
            {name} - ({genre})
          </li>
        ))}
      </ul>
      <BookDetails bookId={ selectedID }/>
    </div>
  )

}

export default BookList;
