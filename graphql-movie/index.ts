import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

// GraphQL Server
const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

// GraphQL Server 시작
const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);
