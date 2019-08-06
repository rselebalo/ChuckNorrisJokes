export default {
  Query: {
    categories: async (source, args, { dataSources }, state) => {
      return dataSources.categorySource(null);
    },
    category: async (source, args, { dataSources }, state) => {
      // by using "args" argument we can get access
      // to query arguments
      const { id } = args;

      const result = dataSources.categorySource([id]);
      if (result && result[0]) {
        return result[0];
      }

      return null;
    }
  }

  //   Joke: {
  //     categories: async (source, args, { dataSources }) => {
  //       console.dir("Executing Joke.category resolver");
  //       return dataSources.categorySource(source.joke);
  //     }
  //   }
};
