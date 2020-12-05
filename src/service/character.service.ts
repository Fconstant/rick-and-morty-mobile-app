import { gql } from "apollo-boost";
import gqlClient from "./gqlClient";

const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        name
        id
        status
        species
        gender
        image
      }
    }
  }
`;

export type Character = {
  name: string
  id: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  image: string
}

export type GetCharactersReturn = {
  info: {
    pages: number
    count: number
    next: number | null
    prev: number | null
  },
  results: Character[]
}

export async function getCharacters(page: number = 1) {
  const results = await gqlClient.query({
    query: CHARACTERS_QUERY,
    variables: {
      page,
    },
  });
  if (results.errors) {
    throw results.errors
  }
  return results.data.characters as GetCharactersReturn
}
