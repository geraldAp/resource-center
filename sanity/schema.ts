import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import resourceContent from "./schemas/resourceContent";
import resources from "./schemas/resources";
import techResources from "./schemas/techResources";
import techResourceCategory from "./schemas/techResourceCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    resourceContent,
    resources,
    techResources,
    techResourceCategory,
    blockContent,
  ],
};
