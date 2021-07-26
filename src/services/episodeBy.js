import { gql } from "graphql-tag"

export default gql`
query episodes($page: Int, $episode: String){
  episodes(page: $page, filter: {episode: $episode}) {
    results {
        air_date
        id
        characters{
            name
            image
        }
        name
    }
  }
}`