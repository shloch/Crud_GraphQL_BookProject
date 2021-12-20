
import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}
`

export default getAuthorsQuery