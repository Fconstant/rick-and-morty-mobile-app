import ApolloClient from 'apollo-boost'

const gqlClient = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/"
})

export default gqlClient