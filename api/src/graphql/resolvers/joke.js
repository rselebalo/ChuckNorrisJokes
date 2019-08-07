export default {
  Query: {
    joke: async (source, args, { dataSources }, state) => {
      // by using "args" argument we can get access
      // to query arguments
      const { category } = args;

      return dataSources.jokeSource([category]);
      
    },
    jokes: async (source, args, { dataSources }, state) => {
      return dataSources.jokeSource(null);
    }
  }
};
