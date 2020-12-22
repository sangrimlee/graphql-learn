// import { userList, getUserById } from './db';
import { pop } from 'core-js/fn/array';
import { movieList, getMovieById, deleteMovie, addMovie } from './db';

const resolvers = {
  Query: {
    movies: () => movieList,
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { title, popularity }) => addMovie(title, popularity),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
