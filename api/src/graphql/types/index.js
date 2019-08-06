import { mergeTypes } from "merge-graphql-schemas";

import joke from "./joke.graphql";
import category from "./category.graphql";

export default mergeTypes([joke, category], { all: true });
