import gql from "graphql-tag";
/*
  Para actualizar la lista de posts cuando
  ejecute el mutation
*/
export const getAllPosts = gql`
    query getAllPosts {
      getAllPosts {
        title
        description
        createdAt
      }
    }
`;