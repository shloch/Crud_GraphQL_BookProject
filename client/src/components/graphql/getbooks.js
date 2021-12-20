
import { gql } from "@apollo/client";

const getBooksQuery = gql`
{
    books {
        name
        id
        genre
    }
}
`

export default getBooksQuery