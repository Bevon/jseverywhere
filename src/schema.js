// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Note" type defines the queryable fields for every book in our data source.
  type Note {
    id :ID
    content : String
    author : String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "notes" query returns an array of zero or more Books (defined above).
  type Query {
    notes: [Note!]!
    note(id:ID!):Note!
  }
  type Mutation {
    newNote(content:String!):Note!
    deleteNote(id:ID!):Boolean!
    updateNote(id:ID!, content:String!):Note!
  }
`;
