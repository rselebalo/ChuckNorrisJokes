import { mergeResolvers } from "merge-graphql-schemas";
import jokeResolver from "./joke";
import categoryResolver from "./category";

const resolvers = [jokeResolver, categoryResolver];

export default mergeResolvers(resolvers);
