import { gql } from "graphql-tag"

export default gql`
query episodes($page: Int){
  episodes(page: $page) {
    results {
        air_date
        characters{
            name
            image
        }
        name
    }
  }
}`