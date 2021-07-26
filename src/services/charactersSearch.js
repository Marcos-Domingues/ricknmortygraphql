import { gql } from "graphql-tag"

export default gql`
query characters($page: Int){
  characters(page: $page) {
    results {
      name
      image
      origin {
        name
      }
      episode {
        episode
      }
    }
  }
}`