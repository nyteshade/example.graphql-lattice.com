import Apollo from 'apollo-client-browser'

export function contentQuery(path) {
  return Apollo.gql`
    query { 
      pageContent(path:"${path}") { 
        markdown, 
        lastModified 
      } 
    }`;
}