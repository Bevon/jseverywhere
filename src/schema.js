// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # We define here a custom scalar type Datetimet that is used to represent a date and time.

  scalar DateTime


  # This "Note" type defines the queryable fields for every note in our data source.
  type Note {
    id :ID
    content : String
    author : String
    createdAt : DateTime!
    updatedAt : DateTime!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "notes" query returns an array of zero or more Notes and the
  # "note" query returns a single Note or an error message if the Note
  # doesn't exist.
  #
  # Note: we could have also used a fragment here.
  #
  # type Note {
  #   id :ID
  #   content : String
  #   author : String
  # } (defined above).

  type Query {
    notes: [Note!]!
    note(id:ID!):Note!
  }
  type Mutation {
    newNote(content:String!):Note!
  }
`;
