export default {
  Query: {
    joke: async (source, args, { dataSources }, state) => {
      // by using "args" argument we can get access
      // to query arguments
      const { category } = args;

      const result = dataSources.jokeSource([category]);
      if (result && result[0]) {
        return result[0];
      }

      return null;
    },
    jokes: async (source, args, { dataSources }, state) => {
      return dataSources.jokeSource(null);
    }
  }
};
