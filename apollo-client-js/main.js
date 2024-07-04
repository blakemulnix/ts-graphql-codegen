import { ApolloClient, gql } from "@apollo/client/core/index.js";
import { HttpLink } from "@apollo/client/link/http/index.js";
import { InMemoryCache } from "@apollo/client/cache/index.js";
import { prettyPrint } from "./utils.js";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http:localhost:4000/graphql", fetch }),
  cache: new InMemoryCache(),
});

const GET_BIKES = gql(`
  query {
    bikes {
      brand
      model
      rides {
        name
        distance
      }
    }
  }
`);

const { data } = await client.query({
  query: GET_BIKES,
});

prettyPrint(data);

// find specific bike
const GET_BIKE_BY_ID = gql(`
  query GetBikeById($id: Int!) {
    bike(id: $id) {
      brand
      model
      rides {
        name
        distance
      }
    }
  }
`);

const { data: bikeData } = await client.query({
  query: GET_BIKE_BY_ID,
  variables: { id: 1 },
});

prettyPrint(bikeData);

