import React from 'react'
import { useQuery } from "@apollo/client";
import { flowRight as compose } from 'lodash';
import { getBookQuery } from '../graphql/queries'
import { graphql } from '@apollo/client/react/hoc';



function BookDetails(props) {
    console.log(props)

    const displayBookDetails = () => {
        const { book } = props.data
        if (book) {
            return (
                <div>
                    <h2> {book.name} </h2>
                    <p> {book.genre} </p>
                    <p> {book.author.name} </p>
                    <p> All books by this Author </p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => {
                                return <li key={item.id}> {item.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return( <div> No Book Selected <br/><br/><br/></div>)
        }
    }

    return (
        <div id="book-details">
            <p> Output book details here </p>
            {displayBookDetails()}
        </div>
    )

}

export default compose(
    graphql(getBookQuery, {
        options: (props) => {
            return {
                variables: { id: props.bookId}
            }
        }
    })
)(BookDetails);
