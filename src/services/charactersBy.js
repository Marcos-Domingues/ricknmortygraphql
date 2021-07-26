import gql from "graphql-tag"

export default gql`
query characters($page: Int, $name: String) {
  characters(page: $page, filterCharacter: {name: $name}) {
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